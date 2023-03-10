import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, useColorMode } from "@chakra-ui/react";

const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Button variant={"unstyled"} onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
      {/* <Button>Support Project!</Button> */}
    </Box>
  );
};

export default ToggleDarkMode;
