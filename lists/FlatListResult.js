import React from 'react'
import { StyleSheet, FlatList, SafeAreaView} from 'react-native'

import Item from './Item'

const renderItem = ({ item }, navigation) => (
  <Item
    item={item}
    navigation={navigation}
  />
)

export default function FlatListResult({ searchResults, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={searchResults}
        renderItem={(item) => renderItem(item, navigation)}
        keyExtractor={item => item.imdbID}
      />
    </SafeAreaView>
  )
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
});