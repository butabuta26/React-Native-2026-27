import { useQuery } from '@tanstack/react-query';
import { Text, View } from 'react-native';

export default function TodoScreen() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
      );

      const data = await response.json();

      return data;
    },
  });
  console.log(isPending);
  if (isPending) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {data.map((todo) => (
        <Text key={todo.id}>{todo.title}</Text>
      ))}
    </View>
  );
}