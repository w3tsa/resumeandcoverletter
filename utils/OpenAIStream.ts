/* eslint-disable import/no-extraneous-dependencies */
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";

export type ChatGptAgent = "user" | "system";

export interface ChatGptMessage {
  role: ChatGptAgent;
  content: string;
}

export interface OpenAIStreamPayload {
  model: string;
  messages: ChatGptMessage[];
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
  stream: boolean;
  n: number;
}

export async function openAIStream(payload: OpenAIStreamPayload) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const URL: any = process.env.OPENAI_API_URL;

  let counter = 0;

  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
    },
    body: JSON.stringify(payload),
  });

  const stream = new ReadableStream({
    async start(controller) {
      // callback
      function onParse(e: ParsedEvent | ReconnectInterval) {
        if (e.type === "event") {
          const { data } = e;
          // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
          if (data === "[DONE]") {
            controller.close();
            return;
          }
          try {
            const json = JSON.parse(data);
            const text = json.choices[0].delta?.content || "";
            if (counter < 2 && (text.match(/\n/) || []).length > 0) {
              // this is a prefix character (i.e., "\n\n"), do nothing
              // eslint-disable-next-line no-useless-return
              return;
            }
            const queue = encoder.encode(text);
            controller.enqueue(queue);
            counter += 1;
          } catch (error) {
            // maybe parse error
            controller.error(error);
          }
        }
      }
      // stream response (SSE) from OpenAI may be fragmented into multiple chunks
      // this ensures we properly read chunks and invoke an event for each SSE event stream
      const parser = createParser(onParse);
      // https://web.dev/streams/#asynchronous-iteration
      // eslint-disable-next-line no-restricted-syntax
      for await (const chunk of res.body as any) {
        parser.feed(decoder.decode(chunk));
      }
    },
  });

  return stream;
}
