import { Box, Heading, Text } from "@chakra-ui/react";

// styles
import styles from "@/styles/Hero.module.css";
// import { BsGithub } from "react-icons/bs";

type Props = {
  count: number;
};

const Hero = (props: Props) => {
  const { count } = props;
  return (
    <Box mt={5}>
      {/* <Link href="https://github.com/w3tsa/writemecoverletter" isExternal>
        <Button
          leftIcon={<BsGithub />}
          colorScheme="gray"
          variant="outline"
          boxShadow={"md"}
        >
          Star on GitHub
        </Button>
      </Link> */}
      <Heading as="h1" size="3xl" mt={5}>
        Generate your next{" "}
        <span className={styles.boujee}>Resume/cover-letter</span> using chatGPT
      </Heading>
      <br />
      <Text color={"gray"}>
        {count.toLocaleString("en-us")} Resumes/Cover-letter generated so far.
      </Text>
    </Box>
  );
};

export default Hero;
