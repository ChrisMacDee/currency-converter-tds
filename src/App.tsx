import { AppShell, Container, Stack, Title, Text, Button, Card } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header p="md">
        <Text fw={700}>My App</Text>
      </AppShell.Header>

      <AppShell.Main>
        <Container size="sm" mt="xl">
          <Stack gap="lg">
            <Title>Welcome</Title>
            <Text c="dimmed">Here's your starting point.</Text>

            <Card withBorder radius="md" padding="lg">
              <Text fw={500} mb="sm">A card section</Text>
              <FontAwesomeIcon icon={faEnvelope} />
              <Button>Get started</Button>
            </Card>
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}