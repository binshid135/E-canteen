import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import FoodCards from '@/components/FoodCards'


const Home = () => {

  const styles = StyleSheet.create({
    adimage: {
      width: "100%",
      height: 180,
      marginTop: 20,
      borderRadius: 10,
    },
    headcontainer: {
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 10,
      
    },
    tag: {
      fontFamily: "londrina",
      textAlign: "center",
      fontSize: 30,
      marginTop: 13,
    },

  })

  const data = [{ id: 1, name: "Fish", price: 80, image: "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg" },
  { id: 1, name: "Biriyani", price: 120, image: "https://img.freepik.com/free-photo/veg-biryani-veg-pulav-fried-rice-indian-food-generative-ai_1258-151588.jpg?t=st=1731783626~exp=1731787226~hmac=cb085e86af9b1b7941c85920cfde9deac318f170b944f0bc38b1955ca8db669c&w=900" },
  { id: 1, name: "burger", price: 140, image: "https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1751.jpg?t=st=1731783665~exp=1731787265~hmac=803153f7952163736b330584d4810a88f97ee3f457aa2dea8625f36266799257&w=1060" },
  { id: 1, name: "Shawarma", price: 100, image: "https://img.freepik.com/free-photo/side-view-chicken-doner-with-greens-cucumber-tomato-sauce-cucumber-red-onion-pita-slice-lemon-board_141793-4824.jpg?t=st=1731783698~exp=1731787298~hmac=91692b2ad53ec7b4271e41ba36536bf53c7a155705ed36d6e79f476fb775eff8&w=900" },


  ]

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <FoodCards item={{ image: item.image, name: item.name, price: item.price }} />
        }
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={() => (
          <View >
            <View >
              <View style={styles.headcontainer}>
                <Text style={{ fontSize: 35, fontFamily: "londrina", color: "black", marginTop: 20 }} >E-cantenn</Text>
                <Text style={{ color: "gray", marginTop: 1 }}>Order your favourite food</Text>
                <Image source={require('@/assets/images/ads.jpg')} style={styles.adimage} />
                <Text style={styles.tag}>E-canteen <Text style={{ color: "rgb(33, 193, 82)" }}>Specials</Text></Text>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Home