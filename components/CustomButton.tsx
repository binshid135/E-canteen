import { View, Text, TouchableOpacity, StyleSheet ,GestureResponderEvent} from 'react-native'
import React from 'react'

interface CustomButtonProps {
    title?: string;
    Otherstyle: object;
    handlepress:(event: GestureResponderEvent) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ Otherstyle,title,handlepress }) => {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: "rgb(58, 181, 75)",
            height: 50,
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
        },
        textstyles: {
            color: "white",
            fontSize: 15,
            fontWeight: "300"
        }
    })
    return (
        <TouchableOpacity
            onPress={handlepress}
            activeOpacity={0.7}
            style={StyleSheet.compose(styles.container, Otherstyle)}
        >
            <Text style={StyleSheet.compose(styles.textstyles,Otherstyle)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton