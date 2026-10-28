import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Tabs } from 'expo-router';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="todos" />
      </Tabs>
    </QueryClientProvider>
  );
}