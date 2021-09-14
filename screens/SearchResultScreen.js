import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function SearchResultScreen({ route, navigation }) {
  const { movieTitle } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.text_header}>Search Results</Text>
      <Text>{movieTitle}</Text>
      <Button
        title="Read more"
        onPress={() => navigation.navigate("MovieDetails")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text_header: {
    alignItems: 'center',
    fontSize: 16,
    textAlign: 'center',
  },
});