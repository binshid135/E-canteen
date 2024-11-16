import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons';

interface InputFieldsProps {
    label?: string; // Optional label
    placeholder?: string; // Optional placeholder
    Otherstyle?: object; // Optional custom style for TextInput
    onChangeText?: (text: string) => void; // Function to handle text change
    value?: string; // Value for controlled component
    keyboardType?:string;
}

const InputFields: React.FC<InputFieldsProps> = ({ placeholder, label ,Otherstyle, keyboardType }) => {
    const [showpassword, SetShowPassword] = useState(false)

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: 50,
            backgroundColor: "white",
            borderColor: "black",
            justifyContent: "center",
            alignItems:"center",
            paddingLeft: 10,
            marginTop: 10,
            flexDirection:"row",
        },
        input:{
            flex:1
        }
        
    })
    return (
        <View>
            <View>
                {/* <Text>{label}</Text> */}
                <View style={StyleSheet.compose(styles.container,Otherstyle)}>
                    <TextInput 
                    style={styles.input}
                    placeholder={placeholder}
                    secureTextEntry={label === 'password' && !showpassword}
                    />
                    {label === "password" && (
                        <TouchableOpacity onPress={() => SetShowPassword(!showpassword)}>
                            <View style={{paddingRight:10}}>
                                {!showpassword ? <Entypo name="eye-with-line" size={24} color="black" /> : <Entypo name="eye" size={24} color="black" />}
                            </View>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    )
}

export default InputFields