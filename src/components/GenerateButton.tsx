import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, useColorMode } from "@chakra-ui/react";

const GenerateButton = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box mt={5}>
        <Button
          background={colorMode === "light" ? "black" : "gray.700"}
          color={"white"}
          width={"100%"}
          borderRadius={10}
          _hover={{ opacity: "0.8" }}
        >
          Generate your Resume and Cover letter <ArrowForwardIcon />
        </Button>
      </Box>
    </>
  );
};

export default GenerateButton;
