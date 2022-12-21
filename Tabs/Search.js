import React from "react"
import { View, StyleSheet, Text } from "react-native"




export default function Search() {
  return (
    <View style={styles.Container}>

      <Text>Search Page</Text>


    </View>
  )
}

const styles = StyleSheet.create({

  Container: {
    flex: 1,
    backgroundColor: 'Grey',
    alignItems: 'center',
    justifyContent: 'center'
  }
})