import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsGithub } from "react-icons/bs";

// local imports
import ToggleDarkMode from "../ToggleDarkMode";

const MobileView = () => {
  return (
    <Flex m="20px auto" alignItems={"center"} justify="space-between">
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        width="250px"
      >
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="solid"
          />
          <MenuList>
            <MenuItem>
              <Link
                passHref
                as={NextLink}
                href="https://github.com/w3tsa/"
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  width={"70px"}
                >
                  <BsGithub /> <Text>github</Text>
                </Flex>
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Text fontSize={"lg"} letterSpacing={1.2} fontWeight={"bold"}>
          letmerite.vercel.app
        </Text>
      </Flex>
      <Box>
        <ToggleDarkMode />
      </Box>
    </Flex>
  );
};

export default MobileView;
