import { Stack } from "expo-router";
import { View,Text } from "react-native";
import { useFonts } from "expo-font";



export default function RootLayout() {
  const [fontsLoaded]=useFonts({    
    "spacemono":require('./../assets/fonts/SpaceMono-Regular.ttf'),
    "lobster":require('./../assets/fonts/Lobster-Regular.ttf'),
    "edu-aus":require('./../assets/fonts/EduAUVICWANTHand-Bold.ttf'),
    "amaranth":require('./../assets/fonts/Amaranth-Regular.ttf'),
    "londrina":require('./../assets/fonts/LondrinaSolid-Black.ttf')
  })
  console.log("Fonts loaded:", fontsLoaded);

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>; // or a loading spinner
  }
  
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
    </Stack>
  )
}
