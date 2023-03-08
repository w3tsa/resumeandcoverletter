import { Box, Button, Heading, Text, Link } from "@chakra-ui/react";
import Balancer from "react-wrap-balancer";

// styles
import styles from "@/styles/Hero.module.css";
import NextLink from "next/link";
import { BsGithub } from "react-icons/bs";
// import { BsGithub } from "react-icons/bs";

type Props = {
  count: number;
};

const Hero = (props: Props) => {
  const { count } = props;
  return (
    <Box mt={5}>
      <Link
        as={NextLink}
        href="https://github.com/w3tsa/resumeandcoverletter"
        isExternal
        _hover={{ textDecoration: "none" }}
      >
        <Button
          leftIcon={<BsGithub />}
          colorScheme="gray"
          variant="outline"
          boxShadow={"md"}
        >
          Star on GitHub
        </Button>
      </Link>
      <Heading as="h1" size="3xl" mt={5}>
        <Balancer ratio={0.65}>
          Generate your next <span className={styles.boujee}>Resume </span> or{" "}
          <span className={styles.boujee}>Cover letter</span> using chatGPT
        </Balancer>
      </Heading>
      <br />
      <Text color={"gray"}>
        {count.toLocaleString("en-us")} Resumes/Cover-letter generated so far.
      </Text>
    </Box>
  );
};

export default Hero;
