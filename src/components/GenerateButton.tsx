import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, useColorMode } from "@chakra-ui/react";

type Props = {
  handleClick: any;
};

const GenerateButton = (props: Props) => {
  const { handleClick } = props;
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
          onClick={handleClick}
        >
          Generate your Resume and Cover letter <ArrowForwardIcon />
        </Button>
      </Box>
    </>
  );
};

export default GenerateButton;
