import { Box, VStack, Link, Flex, Icon } from "@chakra-ui/react";
import { FaHome, FaKeyboard, FaUser, FaEnvelope, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box
      as="aside"
      bg="white"
      color="black"
      w="250px"
      p={4}
      minH="100vh"
      boxShadow="md"
    >
      <VStack spacing={4} align="stretch">
        <Link
          href="/dashboard"
          p={2}
          borderRadius="md"
          _hover={{ bg: "#0a192f", color: "white", textDecoration: "none" }}
        >
          <Flex align="center">
            <Icon as={FaHome} mr={2} />
            ダッシュボード
          </Flex>
        </Link>
        <Link
          href="/transcription"
          p={2}
          borderRadius="md"
          _hover={{ bg: "#0a192f", color: "white", textDecoration: "none" }}
        >
          <Flex align="center">
            <Icon as={FaKeyboard} mr={2} />
            テキスト生成
          </Flex>
        </Link>
        <Link
          href="/profile"
          p={2}
          borderRadius="md"
          _hover={{ bg: "#0a192f", color: "white", textDecoration: "none" }}
        >
          <Flex align="center">
            <Icon as={FaUser} mr={2} />
            プロフィール
          </Flex>
        </Link>
        <Link
          href="/mail"
          p={2}
          borderRadius="md"
          _hover={{ bg: "#0a192f", color: "white", textDecoration: "none" }}
        >
          <Flex align="center">
            <Icon as={FaEnvelope} mr={2} />
            メール
          </Flex>
        </Link>
        <Link
          href="/settings"
          p={2}
          borderRadius="md"
          _hover={{ bg: "#0a192f", color: "white", textDecoration: "none" }}
        >
          <Flex align="center">
            <Icon as={FaCog} mr={2} />
            設定
          </Flex>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
