import { useEffect, useState } from "react";
import { Box, Container, Heading, Flex, Icon, Spinner } from "@chakra-ui/react";
import { FaMicrophone, FaListAlt } from "react-icons/fa";
import { fetchTranscriptionList } from "../../api/transcriptions";
import TranscriptionList from "../../components/transcriptions/List";
import CreateTranscription from "../../components/transcriptions/Create";
import Pagination from "../../components/common/Pagination";

const PAGE_SIZE = 12;

const Transcriptions = () => {
  const [transcriptions, setTranscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const loadTranscriptions = async () => {
      setLoading(true);
      try {
        const offset = (currentPage - 1) * PAGE_SIZE;
        const data = await fetchTranscriptionList(PAGE_SIZE, offset);
        setTranscriptions(data.results);
        setTotal(data.total);
      } catch (error) {
        setError("Failed to load transcriptions");
      } finally {
        setLoading(false);
      }
    };

    loadTranscriptions();
  }, [currentPage]);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  if (loading) {
    return (
      <Container centerContent>
        <Spinner color="#0a192f" size="lg" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container centerContent>
        <Box color="red.500">{error}</Box>
      </Container>
    );
  }

  return (
    <Container maxW="full" p={4} bg="gray.50" borderRadius="lg">
      {/* 録音エリア */}
      <Box bg="white" p={4} boxShadow="md" borderRadius="md" mb={6}>
        <Flex align="center" mb={4}>
          <Icon as={FaMicrophone} boxSize={6} color="blue.500" />
          <Heading size="md" ml={3} color="blue.600">
            録音
          </Heading>
        </Flex>
        <CreateTranscription />
      </Box>

      {/* 文字起こしリストエリア */}
      <Box bg="white" p={4} boxShadow="md" borderRadius="md">
        <Flex align="center" mb={4}>
          <Icon as={FaListAlt} boxSize={6} color="teal.500" />
          <Heading size="md" ml={3} color="teal.600">
            文字起こしリスト
          </Heading>
        </Flex>

        <TranscriptionList transcriptions={transcriptions} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Box>
    </Container>
  );
};

export default Transcriptions;
