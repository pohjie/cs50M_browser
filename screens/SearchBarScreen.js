import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function SearchBarScreen() {
  const [text, onChangeText] = useState(null)
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.text_header}>Welcome to the ultimate badass movie browser!</Text>

      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        placeholder="Enter the movie title here."
      />

      <TouchableOpacity 
        style= {styles.submitButton}
        // onPress = { console.log(text)}>
        onPress = {() => navigation.navigate("SearchResult",
                                             { movieTitle: text })}>
          <Text style={styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white'
  },
});