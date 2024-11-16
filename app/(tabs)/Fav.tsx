import { View, Text, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native'
import React from 'react'

const Fav = () => {
  const styles = StyleSheet.create({
    topcontainer: {
      height: 100,
      backgroundColor: "white",
    },
    tophead: {
      fontFamily: "londrina",
      textAlign: "center",
      fontSize: 30,
      marginTop: 20,
    },
    subhead: {
      fontWeight: "bold",
      fontSize: 20,
      textDecorationLine: "underline",
      margin: 20,

    }
  })

  const data = [{ id: 1, name: "Fish", price: 80, image: "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg" },
  { id: 1, name: "Biriyani", price: 120, image: "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg" },
  { id: 1, name: "burger", price: 150, image: "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg" },
  { id: 1, name: "Shawarma", price: 150, image: "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg" },


  ]

  return (
    <SafeAreaView>
      <FlatList
        data={[]}
        renderItem={({ item }) =>
          <></>
        }
        keyExtractor={(item) => item}
        ListHeaderComponent={() => (
          <View>
            <View style={styles.topcontainer}>
              <Text style={styles.tophead}>E-canteen</Text>
            </View>
            <View>
              <Text style={styles.subhead}>Favourites</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={()=>(
          <View style={{justifyContent:"center",alignItems:"center",marginTop:30}}>
            <Image source={require('@/assets/images/emptycart.png')} style={{width:"100%",height:200}}/>
            <Text style={{marginTop:10,fontSize:15,}}>Cart Empty</Text>
          </View>
        )}

      />

    </SafeAreaView>

  )
}

export default Fav