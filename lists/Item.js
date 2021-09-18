import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function Item({ item, navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("MovieDetails",
          { item: item })}>
        <Image
          style={styles.tinyLogo}
          source={{ uri: item.Poster }}
        />
        <Text>{item.Title}</Text>
        <Text>{item.Year}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  tinyLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
  },
});