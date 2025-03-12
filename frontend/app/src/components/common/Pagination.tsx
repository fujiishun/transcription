import { HStack, Button, Flex } from "@chakra-ui/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pagesToShow = 5;
  const halfPagesToShow = Math.floor(pagesToShow / 2);

  let startPage = Math.max(currentPage - halfPagesToShow, 1);
  let endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  if (endPage - startPage < pagesToShow - 1) {
    startPage = Math.max(endPage - pagesToShow + 1, 1);
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <Flex justify="center" align="center" mt={4} gap={2}>
      {/* 最初のページボタン (1ページ目なら表示しない) */}
      {currentPage > 1 && (
        <Button onClick={() => onPageChange(1)} variant="outline">
          {"<<"}
        </Button>
      )}

      {/* 前のページボタン (1ページ目なら表示しない) */}
      {currentPage > 1 && (
        <Button onClick={() => onPageChange(currentPage - 1)} variant="outline">
          {"<"}
        </Button>
      )}

      {/* ページ番号 */}
      <HStack spacing={1}>
        {pageNumbers.map((page) => (
          <Button
            key={page}
            size="sm"
            variant={page === currentPage ? "solid" : "outline"}
            colorScheme={page === currentPage ? "blue" : "gray"}
            onClick={() => onPageChange(page)}
            borderRadius="full"
          >
            {page}
          </Button>
        ))}
      </HStack>

      {/* 次のページボタン (最後のページなら表示しない) */}
      {currentPage < totalPages && (
        <Button onClick={() => onPageChange(currentPage + 1)} variant="outline">
          {">"}
        </Button>
      )}

      {/* 最後のページボタン (最後のページなら表示しない) */}
      {currentPage < totalPages && (
        <Button onClick={() => onPageChange(totalPages)} variant="outline">
          {">>"}
        </Button>
      )}
    </Flex>
  );
};

export default Pagination;
