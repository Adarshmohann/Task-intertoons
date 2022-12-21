import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";

import Home from "./Tabs/Home";
import Category from "./Tabs/Category";
import Cart from "./Tabs/Cart";
import Search from "./Tabs/Search";
import Profile from "./Tabs/Profile";

import Productdetails from "./Productdetails";

import { Provider } from 'react-redux';
import { mystore } from "./src/Store/Store";

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Mystack() {
  return (

    <Stack.Navigator>

      <Stack.Screen
        name="Mytabs"
        component={Mytabs}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Productdetails"
        component={Productdetails}
        options={{ headerShown: false }} />

    </Stack.Navigator>

  )
}

function Mytabs() {
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: 'black' }
      }}>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ?
              <Icon name="home" size={24} color='white' />
              : <Icon name="home" size={24} color='gray' />
        }} />

      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ?
              <Icon name="category" size={24} color='white' />
              : <Icon name="category" size={24} color='gray' />
        }} />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ?
              <Icon name="shopping-cart" size={24} color='white' />
              : <Icon name="shopping-cart" size={24} color='gray' />
        }} />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ?
              <Icon name="search" size={24} color='white' />
              : <Icon name="search" size={24} color='gray' />
        }} />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ?
              <Icon name="person" size={24} color='white' />
              : <Icon name="person" size={24} color='gray' />
        }} />

    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={mystore}>
      <NavigationContainer>
        <Mystack />
      </NavigationContainer>
    </Provider>
  )
}