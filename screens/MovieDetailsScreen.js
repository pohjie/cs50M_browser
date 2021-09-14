import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function MovieDetailsScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go home"
        onPress={() => navigation.navigate("SearchBar")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});