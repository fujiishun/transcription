import { Box, SimpleGrid } from "@chakra-ui/react";
import TranscriptionCard from "./Card";

interface Transcription {
  id: number;
  content: string;
  created_at: string;
}

interface TranscriptionListProps {
  transcriptions: Transcription[];
}

const TranscriptionList: React.FC<TranscriptionListProps> = ({
  transcriptions,
}) => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
        {transcriptions.map((item) => (
          <TranscriptionCard
            key={item.id}
            title={`ID: ${item.id}`}
            createdAt={new Date(item.created_at).toLocaleString()}
            content={item.content}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TranscriptionList;
