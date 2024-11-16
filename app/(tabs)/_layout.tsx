import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const TabLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "black",
            tabBarStyle: {
                backgroundColor: "white",
                // borderTopWidth: 1,
                // borderTopColor: "white",
                height: 60,
                borderTopRightRadius: 6,
                borderTopLeftRadius: 6,
            }
        }}>
            <Tabs.Screen name="Home"
                options={{
                    tabBarLabel: ({ color }) =>
                        <Text style={{ color: color, fontSize: 10 }}>home</Text>,
                    tabBarIcon: ({ color }) =>
                        <FontAwesome name="home" size={24} color={color} />
                }} />
            <Tabs.Screen name="Fav"
                options={{
                    tabBarLabel: ({ color }) =>
                        <Text style={{ color: color, fontSize: 10 }}>Fav</Text>,
                    tabBarIcon: ({ color }) =>
                        <MaterialIcons name="favorite-outline" size={24} color={color} />
                }} />
            <Tabs.Screen name="Profile"
                options={{
                    tabBarLabel: ({ color }) =>
                        <Text style={{ color: color, fontSize: 10 }}>Explore</Text>,
                    tabBarIcon: ({ color }) =>
                        <MaterialCommunityIcons name="account-circle" size={24} color={color} />
                }} />
        </Tabs>
    )
}

export default TabLayout