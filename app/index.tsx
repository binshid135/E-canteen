import { Redirect, router } from "expo-router";
import { Text, View,StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";


export default function Index() {

 

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',  // Vertically centers the content
      alignItems: 'center',      // Horizontally centers the content
      backgroundColor: 'white', // light background color
    },
    heading: {
      fontSize: 70,
      fontFamily:'londrina'
    },
    empl:{
      color:"rgb(58, 181, 75)",
      fontSize:90,
    }
  });

  useEffect(() => {
    
    const timer=setTimeout(()=>{
      router.replace('/SignIn')
    },3000)
  
    return () => clearTimeout(timer);
  }, [router])
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}><Text style={styles.empl}>E</Text>-canteen</Text>
      <Text>Your Canteen, Anytime, Anywhere!</Text>
    </View>
  )
}
