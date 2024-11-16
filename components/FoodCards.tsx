import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

interface FoodItem {
    image: string
    name: string
    price: number
}

interface FoodCardsProps {
    item: FoodItem
}

const FoodCards: React.FC<FoodCardsProps> = ({ item }) => {
    const styles = StyleSheet.create({
        foodsimage: {
            width: 160, height: 120, margin: 10,
            borderRadius: 10,
        },
        details: {
            justifyContent: "center",
            alignItems: "center"
        },
        itemName: {
            textDecorationLine: "underline",
            fontWeight: "bold",
            fontSize: 15,
        },
        price: {
            color: "rgb(33, 193, 82)",
            fontSize: 20,
            fontWeight: "light",
            textDecorationLine: "underline",
        },
        buttonstyles: {
            borderRadius: 10,
            height: 40,
            padding: 10,
            textDecorationLine: "underline",
            // backgroundColor: "rgb(33, 193, 82)"
        },
        container: {
            justifyContent: "center",
            alignItems: "center",
            flex: 1, // Ensure the container takes up the full screen height
            padding: 10, // Add padding to prevent elements from touching screen edges
            flexDirection: "column", // Arrange child elements vertically
        }

    })
    const handlepress = () => {
        router.push('/Fav')
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ marginTop: 8 }}>
                <View>
                    <Image source={{ uri: item.image }} style={styles.foodsimage} />
                </View>
            </TouchableOpacity>
            <View style={styles.details}>
                <Text style={styles.price}>₹{item.price}</Text>
                <Text style={styles.itemName}>{item.name}</Text>
                <CustomButton title="Add to favourists" Otherstyle={styles.buttonstyles} handlepress={handlepress} />
            </View>
        </View>
    )
}

export default FoodCards