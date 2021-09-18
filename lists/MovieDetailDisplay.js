import React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'

export default function MovieDetailsDisplay({ item, navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{ uri: item.Poster }}
      />
      <Text>Title: {item.Title}</Text>
      <Text>Year: {item.Year}</Text>
      <Text>Rating: {item.Rated || "NA"}</Text>
      <Text>Type: {item.Type}</Text>     
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
  tinyLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
  },
});