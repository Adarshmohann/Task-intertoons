import React from "react";
import { View, Text, Image, TouchableHighlight, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "./src/Actions/Actions";

import BackendApi from "./Apiconstant";
import { useNavigation } from "@react-navigation/native";


export default function Productdetails() {

    const Details = useSelector(state => state);
    const navigation = useNavigation()
    const items = useSelector(state => state)
    const dispatch = useDispatch();

    const addItem = item => {
        dispatch(addProducts(item))

    };



    return (
        <View style={{ width: '100%', backgroundColor: 'white', height: '100%' }}>
            <View style={styles.Banner}>
                <Icon name="arrow-back" size={28} color='black'
                    onPress={() => { navigation.navigate('Home') }} />
                <View style={{ marginLeft: 250, flexDirection: 'row', marginTop: 20 }}>
                    <Icon name='shopping-cart' size={26} color='black'
                        onPress={() => { navigation.navigate('Cart') }} />
                    <Text style={{ fontSize: 17, marginLeft: 10, color: 'black', fontWeight: 'bold' }}>
                        {items.length}</Text>
                </View>
            </View>
            <FlatList style={{ backgroundColor: 'white', height: 150, width: '100%' }}
                data={Details}
                renderItem={({ item }) => {
                    return (
                        <View style={{ alignItems: 'center' }}>

                            <Image style={{ height: 200, width: '55%', marginTop: 20 }}
                                source={{
                                    uri: BackendApi?.imagebaseUrl + item?.imageUrl
                                }}
                            />
                            <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 10 }}>{item.urlKey}</Text>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: 'red', fontWeight: 'bold', marginTop: 30 }}>{item.prWeight}</Text>
                                <Text style={styles.pricetext}> ₹{item.unitPrice}</Text>
                            </View>

                            <View style={styles.Box}>
                                <View style={{ width: 170, marginLeft: 10, flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginTop: 10 }}>{item.urlKey}</Text>
                                    <TouchableHighlight style={styles.Cartadd}
                                        onPress={() => {
                                            addItem(item);
                                        }}>
                                        <Text style={{ color: 'red', fontWeight: 'bold' }}>ADD</Text>
                                    </TouchableHighlight>
                                </View>

                                <Text style={{ marginLeft: 30, fontSize: 18, color: 'black', fontWeight: 'bold' }}> ₹{item.unitPrice}</Text>
                            </View>

                            <TouchableHighlight style={styles.Buybox}>
                                <Text style={{ fontWeight: "bold", color: 'white' }}>BUY NOW</Text>
                            </TouchableHighlight>


                        </View>


                    )
                }}
            />

        </View>
    )
}
const styles = StyleSheet.create({

    Box: {
        height: 100,
        width: 350,

        marginTop: 15,
        borderColor: 'red',
        borderRadius: 5,
        borderWidth: 2,
    },

    Banner: {
        height: '20%',
        width: '100%',
        marginLeft: 20,
        marginTop: 20,
        flexDirection: 'row'
    },

    Cartadd: {
        height: 40,
        width: 75,
        backgroundColor: 'white',
        marginLeft: 80,
        borderRadius: 3,
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },

    pricetext: {
        marginLeft: 30,
        fontSize: 26,
        marginTop: 15,
        color: 'blue',
        fontWeight: 'bold'
    },

    Buybox: {
        height: 50,
        width: 230,
        backgroundColor: 'green',
        marginTop: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
