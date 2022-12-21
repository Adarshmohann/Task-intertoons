import React, { useState } from "react"
import { View, StyleSheet, Text, Image } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { FlatList } from "react-native-gesture-handler"
import BackendApi from "../Apiconstant"

export default function Cart() {

  const products = useSelector(state => state);
  const navigation = useNavigation()
  const [Counter, setCounter] = useState(0)

  const incrementCount = () => {
    setCounter(Counter + 1)
  }

  const decrementCount = () => {

    setCounter(Counter - 1)
  }


  return (
    <View style={styles.Container}>

      <View style={styles.HeaderView}>
        <View style={styles.Viewstyle}>

          <Icon name="arrow-back" size={26} color='white'
            onPress={() => { navigation.navigate('Home') }} />
          <Text style={styles.inputText}>Cart</Text>

        </View>
      </View>

      <FlatList

        data={products}
        renderItem={({ item }) => {
          return (


            <View style={{ flex: 1 }}>


              <View style={{ height: '100%', width: '100%', flexDirection: 'row', backgroundColor: 'white' }}>

                <Image style={{ height: '55%', width: '20%', marginLeft: 10, marginTop: 20 }}
                  source={{
                    uri: BackendApi?.imagebaseUrl + item?.imageUrl
                  }} />



                <View style={{ width: 130, height: 70, marginLeft: 15, marginTop: 15 }}>
                  <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.urlKey}</Text>
                </View>
                <View style={styles.countadjuster}>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon name="add" size={18} color='black'
                      onPress={() => incrementCount()} />
                    <Text style={{ color: 'white', marginLeft: 5, marginRight: 5 }}>{Counter}</Text>
                    <Icon name="remove" size={18} color='black'
                      onPress={() => decrementCount()} />
                  </View>
                </View>


                <Text style={styles.pricetext}> ₹{item.unitPrice}</Text>

              </View>


            </View>






          )
        }}
      />

    </View>
  )
}
const styles = StyleSheet.create({

  Container: {
    flex: 1,
    backgroundColor: 'white',
  },

  HeaderView: {
    height: '15%',
    width: '100%',
    backgroundColor: 'blue',
    flexDirection: 'row'
  },

  Viewstyle: {
    marginTop: 20,
    marginLeft: 10,
    flexDirection: 'row'
  },

  inputText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 15,
  },

  ItemBox: {
    height: '40%',
    width: '50%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: 'white',
    marginLeft: 15,
    marginTop: 15,
    alignItems: 'center',
  },

  productText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },

  countadjuster: {
    height: 35,
    width: 65,
    backgroundColor: 'red',
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',

  },
  pricetext: {
    marginLeft: 15,
    fontSize: 16,
    marginTop: 30,
    color: 'blue',
    fontWeight: 'bold'
  }
})