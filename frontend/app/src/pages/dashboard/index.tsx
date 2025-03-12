"use client";

import { Box, Grid, Stack } from "@chakra-ui/react";
import { KpiSummary } from "../../components/dashboard/KpiSummary";
import { MonthlyChart } from "../../components/dashboard/MonthlyChart";
export default function DashboardPage() {
  return (
    <Stack spacing={6} p={6} minH="100vh">
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        <Box>
          <KpiSummary
            dealCount={20}
            interviewCount={8}
            successCount={5}
            remainingRate="10%"
          />
        </Box>
        <Box>
          <MonthlyChart />
        </Box>
      </Grid>
    </Stack>
  );
}
