import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Box, Text, Button, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

// local imports
import logoLight from "../../../public/images/logo_light.png";
import logoDark from "../../../public/images/logo_dark.png";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} mt={"20px"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Image
          src={colorMode === "light" ? logoLight : logoDark}
          alt={"logo"}
          width={"50"}
          height={"50"}
        />
        <Text fontSize={"lg"} letterSpacing={1.2} fontWeight={"bold"}>
          writemecoverletter.com
        </Text>
      </Flex>
      <Box>
        <Button variant={"unstyled"} onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Button>Support Project!</Button>
      </Box>
    </Flex>
  );
};

export default Header;
