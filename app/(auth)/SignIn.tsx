import { View, Text, StyleSheet, Image, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import InputFields from '@/components/InputFields';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import { useState, useEffect } from 'react';

const SignIn = () => {

    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        // Listens to keyboard events
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => setKeyboardVisible(true)
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => setKeyboardVisible(false)
        );

        // Cleanup listeners on component unmount
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const ScreenWidth = Dimensions.get('window').width;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",


        },
        image: {
            width: ScreenWidth,
            height: 300,
        },
        seccontainer: {
            marginTop: keyboardVisible ? 15 : -12,
            backgroundColor: "rgb(244, 245, 249)",
            borderTopStartRadius: 15,
            borderTopEndRadius: 15,
        },
        textview: {
            marginLeft: 20,
            marginTop: 15,
            marginRight: 20,
        },
        heading: {
            fontFamily: "londrina",
            fontSize: 35,
            textDecorationLine: "underline"
        },
        subheading: {
            marginTop: 5,
            fontSize: 12,
            textDecorationLine: "underline",
            color: "rgb(150, 152, 154)",
        },
        otherstyles: {
            borderRadius: 10
        }
    })

    const handlepress = () => {
        router.push('/Home')
    }
    return (
        <>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View>
                    {!keyboardVisible && (
                        <View>
                            <Image source={require('@/assets/images/burger.jpg')} style={styles.image} />
                        </View>
                    )}
                    <View style={styles.seccontainer}>
                        <View style={styles.textview}>
                            <Text style={styles.heading}>Welcome E-Canteen !</Text>
                            <Text style={styles.subheading}>Log in to your Account</Text>
                            <View style={{ marginTop: 20 }}>
                                <InputFields placeholder="Email Id" label="Email" Otherstyle={styles.otherstyles} />
                                <InputFields label="password" placeholder="Password" keyboardType="password" Otherstyle={styles.otherstyles} />
                            </View>
                            <View style={{ marginTop: 30 }} >
                                <CustomButton title="Login" Otherstyle={styles.otherstyles} handlepress={handlepress} />
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ textDecorationLine: "underline", color: "rgb(150, 152, 154)", marginTop: 5 }}>Don't Have an Account?<Text style={{ fontWeight: "bold", color: "black", paddingLeft: 10 }} onPress={() => router.push('/SignUp')}>{' '}Signup</Text></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

export default SignIn