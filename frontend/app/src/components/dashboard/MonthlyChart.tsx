"use client";

import { Box, Text } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "1月", 営業数: 15, 面談数: 8, 成功数: 4 },
  { month: "2月", 営業数: 18, 面談数: 10, 成功数: 5 },
  { month: "3月", 営業数: 20, 面談数: 12, 成功数: 6 },
  { month: "4月", 営業数: 25, 面談数: 14, 成功数: 7 },
  { month: "5月", 営業数: 22, 面談数: 13, 成功数: 6 },
];

export function MonthlyChart() {
  return (
    <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
      <Text fontSize="lg" fontWeight="bold" mb={3}>
        月次推移
      </Text>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="営業数" fill="#4A90E2" />
          <Bar dataKey="面談数" fill="#50E3C2" />
          <Bar dataKey="成功数" fill="#F5A623" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
