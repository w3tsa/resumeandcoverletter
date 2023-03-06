import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";

// styles
import styles from "@/styles/Hero.module.css";
import { BsGithub } from "react-icons/bs";

const Hero = () => {
  return (
    <Box mt={5}>
      <Link href="https://github.com/w3tsa/fluentparrot" isExternal>
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
        Generate your next{" "}
        <span className={styles.boujee}>Resume/cover-letter</span> using chatGPT
      </Heading>
      <br />
      <Text color={"gray"}>47,118 Resumes/Cover-letter generated so far.</Text>
    </Box>
  );
};

export default Hero;

/* 
<span className="boujee-text">Resume.</span>
*/
