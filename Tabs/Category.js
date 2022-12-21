import React from "react"

import { StyleSheet,View,Text } from "react-native"




export default function Category(){
    return(
      <View style={styles.container}>
       <Text style={{color:'white'}}>Category page</Text>
      </View>
    )
  }
  const styles=StyleSheet.create({

    container:{
      flex:1,
      backgroundColor:'black',
      alignItems:'center',
      justifyContent:'center'
    }
  })