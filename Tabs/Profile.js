import React from "react"
import { View ,StyleSheet,Text} from "react-native"




export default function Profile() {
  return (
    <View style={styles.Container}>

      <Text>Profile Page</Text>

    </View>
  )
}

const styles = StyleSheet.create({

  Container: {
    flex: 1,
    backgroundColor: 'Grey',
    alignItems:'center',
    justifyContent:'center'
  }
})