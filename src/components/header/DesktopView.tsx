import { Flex, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

// local imports
import logoLight from "../../../public/images/logo_light.png";
import logoDark from "../../../public/images/logo_dark.png";
import ToggleDarkMode from "../ToggleDarkMode";

const DesktopView = () => {
  const { colorMode } = useColorMode();
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
          letmerite.vercel.app
        </Text>
      </Flex>
      <ToggleDarkMode />
    </Flex>
  );
};

export default DesktopView;
