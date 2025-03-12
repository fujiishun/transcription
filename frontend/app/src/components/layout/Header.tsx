import { Box, Heading, Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      bg="#0a192f"
      color="white"
      p={4}
      textAlign="left"
      boxShadow="md"
    >
      <Flex align="center" gap={2}>
        <Heading size="lg">文字起こしアプリ</Heading>
      </Flex>
    </Box>
  );
};

export default Header;
