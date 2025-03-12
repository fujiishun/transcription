import { Box, Flex } from "@chakra-ui/react";
import AppRoutes from "./routes/AppRouter";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <Flex direction="column" h="100vh">
      <Box flexShrink={0}>
        <Header />
      </Box>

      <Flex flex="1" overflow="hidden">
        <Box flexShrink={0}>
          <Sidebar />
        </Box>

        <Box flex="1" overflowY="auto" p={4} bg="gray.50" borderRadius="lg">
          <AppRoutes />
        </Box>
      </Flex>

      <Box flexShrink={0}>
        <Footer />
      </Box>
    </Flex>
  );
};

export default App;
