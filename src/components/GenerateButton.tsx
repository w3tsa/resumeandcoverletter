import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, useColorMode } from "@chakra-ui/react";

type Props = {
  handleClick: any;
  text: string;
  ariaLabel: string;
  loading: boolean;
};

const GenerateButton = (props: Props) => {
  const { handleClick, text, ariaLabel, loading } = props;
  const { colorMode } = useColorMode();
  return (
    <>
      <Box mt={5}>
        <Button
          background={colorMode === "light" ? "black" : "gray.700"}
          color={"white"}
          // width={"100%"}
          borderRadius={10}
          _hover={{ opacity: "0.8" }}
          onClick={handleClick}
          aria-label={ariaLabel}
          isLoading={loading}
        >
          {text}
          <ArrowForwardIcon />
        </Button>
      </Box>
    </>
  );
};

export default GenerateButton;
