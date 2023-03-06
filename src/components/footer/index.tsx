import { Box, Flex, Text, Icon, Link } from "@chakra-ui/react";
import { BsGithub, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} mb={5}>
      <Box>
        <Text>
          Powered by <strong>ChatGPT</strong>
        </Text>
      </Box>
      <Box
        as={Flex}
        // backgroundColor={"red"}
        width={"50px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link href={"https://twitter.com/Tanveersayem"} isExternal>
          <Icon as={BsTwitter} fontSize={20} color={"gray"}></Icon>
        </Link>
        <Link href={"https://github.com/w3tsa"} isExternal>
          <Icon as={BsGithub} fontSize={20} color={"gray"}></Icon>
        </Link>
      </Box>
    </Flex>
  );
};

export default Footer;
