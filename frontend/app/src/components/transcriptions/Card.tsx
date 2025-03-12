import { Box, Heading, Flex, Text } from "@chakra-ui/react";

interface TranscriptionCardProps {
  title: string;
  createdAt: string;
  content: string;
}

const TranscriptionCard: React.FC<TranscriptionCardProps> = ({
  title,
  createdAt,
  content,
}) => {
  return (
    <Box
      bg="white"
      boxShadow="md"
      borderRadius="lg"
      p={4}
      border="1px solid"
      borderColor="gray.200"
      display="flex"
      flexDirection="column"
      h="full"
    >
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="md">{title}</Heading>
        <Text fontSize="sm" color="gray.500">
          {createdAt}
        </Text>
      </Flex>

      <Flex flexDirection="column" flex="1">
        <Flex>
          <Text fontSize="md" flexShrink={0} mr={1}>
            <strong>内容:</strong>
          </Text>
          <Text
            fontSize="md"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            flex="1"
          >
            {content}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TranscriptionCard;
