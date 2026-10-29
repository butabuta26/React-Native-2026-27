import { useQuery } from '@tanstack/react-query';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const fetchTodos = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos'
  );

  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }

  return response.json();
};

export default function Todos() {
  const { data, isPending, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  if (isPending) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Failed to load todos.</Text>;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>
            {item.title}
          </Text>

          <Text style={styles.status}>
            {item.completed ? 'Completed' : 'Not completed'}
          </Text>
        </View>
      )}
    />
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  status: {
    fontSize: 14,
    color: '#666666',
  },
});
