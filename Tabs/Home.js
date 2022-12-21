import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, Image } from "react-native";
import { FlatList, TextInput, TouchableHighlight } from "react-native-gesture-handler";
import axios from "axios";
import Icon from "react-native-vector-icons/MaterialIcons";
import BackendApi from "../Apiconstant";
import { displayDetails } from "../src/Actions/Actions";
import { useDispatch } from 'react-redux';




const Home = ({ navigation }) => {



    const dispatch = useDispatch();





    const showDetails = item => {
        dispatch(displayDetails(item)),
            navigation.navigate('Productdetails')

    }

    const [data, setdata] = useState(null)
    const [product, setproduct] = useState(null)



    useEffect(() => {
        axios.get('https://wpr.intertoons.net/kmshoppyapi/api/v2/Products/HomeProducts')
            .then((response) => {

                setdata(response?.data?.Data?.MobileMainBanners)

            })
            .catch((error) => {
                console.log(error, 'error')
            })

        axios.get("https://wpr.intertoons.net/kmshoppyapi/api/v2/FeaturedProduct?custId=''&guestId='", {
            headers: {
                vendorUrlKey: 'kmshoppy',
            }
        })
            .then((response) => {

                setproduct(response?.data?.Data)

            })
            .catch((error) => {
                console.log(error, 'error')
            })
    }, [])


    const renderItem = ({ item }) => {
        return (
            <View style={{ height: '100%' }}>

                <Text style={{ color: 'white' }}>{item.elementName}</Text>

                <Image style={{ height: '100%', width: '95%' }}
                    source={{
                        uri: BackendApi?.imagebaseUrl + item?.imageUrl
                    }} />

            </View>
        )
    }







    return (
        <View style={styles.container}>

            <View style={styles.Banner}>

                <View style={styles.inputView}>

                    <Icon name="location-on" size={26} color='white' />


                    <Text style={styles.inputText}> Choose Location</Text>
                    <Icon name="expand-more" size={26} color='white' />

                    <TouchableHighlight style={{
                        height: 50,
                        width: 70,
                        backgroundColor: 'blue',
                        marginLeft: 90
                    }}

                        underlayColor={'transparent'}
                        onPress={() => { navigation.navigate('Cart') }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='favorite' size={24} color='white' />

                        </View>


                    </TouchableHighlight>

                </View>

                <View style={styles.BoxView}>

                    <View style={styles.SearchBar}>

                        <Icon name="search" size={22} color='white' />

                        <TextInput
                            placeholder='Search for over 5000 products'
                            placeholderTextColor={'white'}>
                        </TextInput>

                    </View>

                </View>
            </View>






            <View style={{ height: '30%' }}>
                <FlatList
                    horizontal={true}
                    data={data}
                    renderItem={renderItem}




                />
            </View>

            <View style={{ flexDirection: 'row' }}>

                <Text style={styles.Featuretxt}>Featured Products</Text>
                <Text style={styles.finaltext}>See More</Text>


                <View style={{ marginTop: 10 }}>
                    <Icon name="expand-more" size={26} color='red' />
                </View>


            </View>


            <FlatList
                horizontal={true}
                data={product}
                renderItem={({ item }) => {
                    return (

                        <View style={{ height: '20%', width: 220 }}>
                            <View style={styles.ItemBox}>

                                <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 30 }}>

                                    <Icon name="favorite" size={22} color='red' />
                                    <View style={styles.offerbox}>
                                        <Text style={{ marginLeft: 10, color: 'black' }}>3% off</Text>

                                    </View>

                                </View>


                                <View style={{ height: '50%', width: '70%', alignItems: 'center' }}>

                                    <View style={{ height: '80%', width: '80%', marginLeft: 20 }}>
                                        <Image style={{ height: '75%', width: '60%' }}
                                            source={{
                                                uri: BackendApi?.imagebaseUrl + item?.imageUrl
                                            }}

                                        />
                                    </View>

                                    <View style={{ height: 45, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}
                                            onPress={() => {
                                                showDetails(item);
                                            }}>{item.urlKey}</Text>

                                        <Text style={styles.productText}> ₹{item.unitPrice}</Text>
                                    </View>
                                    <View style={{ marginTop: 5, flexDirection: 'row' }}>
                                        <Text style={{ color: 'red', fontWeight: 'bold' }}>{item.prWeight}</Text>

                                        <View style={styles.Cartadd}>
                                            <Icon name="add" size={20} color='black' />
                                        </View>
                                    </View>

                                </View>

                            </View>


                        </View>




                    )
                }}
            />


        </View>
    )
}

export default Home;
const styles = StyleSheet.create({

    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },

    Banner: {
        height: '20%',
        width: '100%',
        backgroundColor: 'blue'
    },

    inputView: {
        marginLeft: 10,
        marginTop: 20,
        flexDirection: 'row'
    },

    inputText: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 15
    },

    BoxView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    SearchBar: {
        height: 50,
        width: 280,
        borderColor: 'grey',
        borderRadius: 5,
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },

    ItemBox: {
        height: 230,
        width: 200,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: 'white',
        marginLeft: 15,
        marginTop: 15,
        alignItems: 'center',


    },

    Featuretxt: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 15,
        marginTop: 10
    },

    finaltext: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 80,
        marginTop: 10

    },
    offerbox: {
        backgroundColor: 'pink',
        height: 40,
        width: 40,
        borderRadius: 20,
        marginLeft: 135,
        flexDirection: 'row'
    },
    imagebox: {
        height: 80,
        width: 120,
        marginLeft: 12,
        backgroundColor: 'red'
    },
    productText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',

    },
    Cartadd: {
        height: 30,
        width: 35,
        backgroundColor: 'white',
        marginLeft: 90,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    }

})





