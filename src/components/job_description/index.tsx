import { Flex, Text, Textarea } from "@chakra-ui/react";
import Image from "next/image";

// local imports
import bulletOne from "../../../public/images/1-black.png";

type Props = {
  jobDescription: string;
  setJobDescription: (arg0: string) => void;
};

const JobDescription = (props: Props) => {
  const { jobDescription, setJobDescription } = props;
  const spanStyle = {
    paddingBottom: "5px",
    color: "gray",
  };
  return (
    <>
      <Flex alignItems={"center"} background={"1px solid black"}>
        <Image src={bulletOne} alt={"bullet number 1"} width={80} height={80} />
        <Text fontWeight={"bold"} pb={"5px"} ml={-3}>
          Copy the job description{" "}
        </Text>
        <span style={spanStyle}>(or write a few sentence about the job)</span>
      </Flex>
      <Textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        isRequired
        rows={6}
        maxLength={1000}
        placeholder="e.g. looking for a Node/React Full Stack Engineer for a Long-Term Remote Contract opportunity.
Must Haves:
5+ years experience in Full Stack Software Development, programming, database development and infrastructure development
4+ years of experience with Node.js, React.js, and Javascript"
      />
    </>
  );
};

export default JobDescription;
