import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="#0a192f"
      color="white"
      p={4}
      textAlign="right"
      mt="auto"
    >
      <Text fontSize="sm">&copy; 2025 文字起こしアプリ</Text>
    </Box>
  );
};

export default Footer;
