import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

import { fetchResults } from '../api';

// need to be refactored out
const Item = ({ title, year, poster, navigation }) => (
  <View>
    <TouchableOpacity
      onPress={() => navigation.navigate("MovieDetails")}>
      <Image
        style={styles.tinyLogo}
        source={{ uri: poster }}
      />
      <Text>{title}</Text>
      <Text>{year}</Text>
    </TouchableOpacity>
  </View>
)

// need to be refactored out
const renderItem = ({ item }, navigation) => (
  <Item
    title={item.Title}
    year={item.Year}
    poster={item.Poster}
    navigation={navigation}
  />
)

export default function SearchResultScreen({ route, navigation }) {
  const { movieTitle } = route.params
  const [searchResults, setSearchResults] = useState([])

  getResults = async (movieTitle) => {
    const results = await fetchResults(movieTitle)
    setSearchResults(results)
  }

  useEffect(() => {
    let mounted = true

    try {
      getResults(movieTitle)
    } catch (err) {
      console.log(err)
    }

    return () => {
      mounted = false
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.text_header}>Search Results</Text>
      <Text>{movieTitle}</Text>
      <Button
        title="Read more"
        onPress={() => navigation.navigate("MovieDetails")}
      /> */}
      <FlatList
        data={searchResults}
        renderItem={(item) => renderItem(item, navigation)}
        keyExtractor={item => item.imdbID}
      />
    </SafeAreaView>
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
  tinyLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
  },
});