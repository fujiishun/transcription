'use client'

import { Box, VStack, Text, Flex } from '@chakra-ui/react'
import { FaBriefcase, FaCalendarAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

type KpiSummaryProps = {
  dealCount: number
  interviewCount: number
  successCount: number
  remainingRate: string
}

export function KpiSummary({ dealCount, interviewCount, successCount, remainingRate, rejectionRate }: KpiSummaryProps) {
  return (
    <VStack spacing={4} align="stretch">
      {/* 営業数 */}
      <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
        <Text fontSize="sm" color="gray.600">
          営業数
        </Text>
        <Flex justify="space-between" align="center" mt={1}>
          <Text fontSize="2xl" fontWeight="bold">
            {dealCount}
          </Text>
          <FaBriefcase size={20} />
        </Flex>
      </Box>

      {/* 面談数 */}
      <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
        <Text fontSize="sm" color="gray.600">
          面談数
        </Text>
        <Flex justify="space-between" align="center" mt={1}>
          <Text fontSize="2xl" fontWeight="bold">
            {interviewCount}
          </Text>
          <FaCalendarAlt size={20} />
        </Flex>
      </Box>

      {/* 成功数 */}
      <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
        <Text fontSize="sm" color="gray.600">
          成功数
        </Text>
        <Flex justify="space-between" align="center" mt={1}>
          <Text fontSize="2xl" fontWeight="bold">
            {successCount}
          </Text>
          <FaCheckCircle size={20} color="green" />
        </Flex>
      </Box>

      {/* 見送り率 */}
      <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
        <Text fontSize="sm" color="gray.600">
          見送り率
        </Text>
        <Flex justify="space-between" align="center" mt={1}>
          <Text fontSize="2xl" fontWeight="bold">
            {remainingRate}
          </Text>
          <FaTimesCircle size={20} color="red" />
        </Flex>
      </Box>
    </VStack>
  )
}
