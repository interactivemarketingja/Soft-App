import React from 'react';
import { Box, Container, Grid, Heading, Stat, StatLabel, StatNumber, StatGroup } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';

export function Dashboard() {
  const { data: transactions } = useQuery({
    queryKey: ['recent-transactions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .order('date', { ascending: false })
        .limit(5);
      
      if (error) throw error;
      return data;
    }
  });

  const { data: invoices } = useQuery({
    queryKey: ['recent-invoices'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .order('issue_date', { ascending: false })
        .limit(5);
      
      if (error) throw error;
      return data;
    }
  });

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>Dashboard</Heading>
      
      <StatGroup mb={8}>
        <Stat>
          <StatLabel>Total Invoices</StatLabel>
          <StatNumber>{invoices?.length || 0}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Recent Transactions</StatLabel>
          <StatNumber>{transactions?.length || 0}</StatNumber>
        </Stat>
      </StatGroup>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading size="md" mb={4}>Recent Transactions</Heading>
          {transactions?.map(transaction => (
            <Box key={transaction.id} p={2} borderBottomWidth="1px">
              {transaction.description} - {new Date(transaction.date).toLocaleDateString()}
            </Box>
          ))}
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading size="md" mb={4}>Recent Invoices</Heading>
          {invoices?.map(invoice => (
            <Box key={invoice.id} p={2} borderBottomWidth="1px">
              {invoice.invoice_number} - ${invoice.total_amount}
            </Box>
          ))}
        </Box>
      </Grid>
    </Container>
  );
}