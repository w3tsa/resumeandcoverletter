import { Flex, Text, Textarea } from "@chakra-ui/react";
import Image from "next/image";

// local imports
import bulletTwo from "../../../public/images/2-black.png";

const Resume = () => {
  return (
    <>
      <Flex alignItems={"center"} background={"1px solid black"}>
        <Image src={bulletTwo} alt={"bullet number 1"} width={80} height={80} />
        <Text fontWeight={"bold"} pb={"5px"} ml={-3}>
          Copy current resume
        </Text>
      </Flex>
      <Textarea
        isRequired
        placeholder="e.g. Software Engineer with a Focus on Diversity and Inclusion: Creating Products that Empower Everyone."
      />
    </>
  );
};

export default Resume;
