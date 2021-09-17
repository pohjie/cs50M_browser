import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

import { fetchResults } from '../api';

// need to be refactored out
const Item = ({ item, navigation }) => (
  <View>
    <TouchableOpacity
      onPress={() => navigation.navigate("MovieDetails",
                                          {item: item})}>
      <Image
        style={styles.tinyLogo}
        source={{ uri: item.Poster }}
      />
      <Text>{item.Title}</Text>
      <Text>{item.Year}</Text>
    </TouchableOpacity>
  </View>
)

// need to be refactored out
const renderItem = ({ item }, navigation) => (
  <Item
    item={item}
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
      <FlatList
        contentContainerStyle={styles.flatList}
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
  flatList: {
    flexGrow: 1,
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