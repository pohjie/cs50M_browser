import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

import { fetchResults } from '../api';
import FlatListResult from '../lists/FlatListResult';

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
    <FlatListResult searchResults={searchResults}
      navigation={navigation} />
  )
}