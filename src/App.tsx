import { AppShell, Container, Stack, Text, Title} from '@mantine/core';
import { CurrencyConverter } from './components/CurrencyConverter';

export default function Page() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header p="md">
        <Title fw={700}>Currency Converter</Title>
      </AppShell.Header>

      <AppShell.Main>
        <Container size="lg" mt="xl">
            <CurrencyConverter />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}