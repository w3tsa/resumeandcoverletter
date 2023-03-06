import { openAIStream, OpenAIStreamPayload } from "../../../utils/OpenAIStream";

if (!process.env.OPEN_AI_KEY) {
  throw new Error("OPEN_AI_KEY is not set");
}

export const config = {
  runtime: "edge",
};

const handler = async (req: Request): Promise<Response> => {
  const { prompt } = (await req.json()) as {
    prompt?: string;
  };

  if (!prompt) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response("prompt is required", { status: 400 });
  }

  const payload: OpenAIStreamPayload = {
    model: process.env.OPEN_AI_MODEL as any,
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 200,
    stream: true,
    n: 1,
  };

  const stream = await openAIStream(payload);
  return new Response(stream, { status: 200 });
};

export default handler;