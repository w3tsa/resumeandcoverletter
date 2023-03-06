import { CopyIcon } from "@chakra-ui/icons";
import { Box, Textarea, useToast } from "@chakra-ui/react";
import { useRef, useState } from "react";

// local imports
import useAutosizeTextArea from "../../../utils/useAutoSizeTextArea";

type Props = {
  text: string;
};

const Result = (props: Props) => {
  const { text } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const toast = useToast();

  useAutosizeTextArea(textAreaRef.current, text);
  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setValue(val);
  };
  async function copyToClipBoard() {
    const result: any = textAreaRef.current;
    await navigator.clipboard.writeText(result.textContent);
    toast({
      title: "Copied to clipboard",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  }
  return (
    <Box position={"relative"}>
      <CopyIcon
        position={"absolute"}
        top={0}
        right={0}
        m={5}
        onClick={copyToClipBoard}
        cursor={"pointer"}
      />
      <Textarea
        name={"result"}
        ref={textAreaRef}
        value={text}
        onChange={handleChange}
        pointerEvents={"none"}
      ></Textarea>
    </Box>
  );
};

export default Result;
