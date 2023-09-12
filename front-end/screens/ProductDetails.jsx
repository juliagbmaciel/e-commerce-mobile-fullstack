import { SafeAreaView, View, TouchableOpacity, Image, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import styles from './productDetails.style'
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants'





const ProductDetails = ({ navigation }) => {
  const route = useRoute();
  const item = route.params
  const [count, setCount] = useState(1)

  const decrement = () => {
    if (count < 2) {
      return
    } else {
      setCount(count - 1)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Ionicons name='chevron-back-circle' size={30} color={COLORS.black} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }}>
          <Ionicons name='heart' size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
        <View>
          <View style={styles.ratingRow}>
            <View style={styles.rating}>
              {[1, 2, 3, 4, 5].map((index) => (
                <Ionicons
                  key={index}
                  name='star'
                  size={24}
                  color="gold"
                />
              ))}
              <Text style={styles.ratingText}> (4,9) </Text>
            </View>
            <View style={styles.rating}>
              <TouchableOpacity onPress={() => { setCount(count + 1) }}>
                <SimpleLineIcons
                  name='plus'
                  size={20}
                />
              </TouchableOpacity>
              <Text style={styles.ratingText}>   {count}   </Text>
              <TouchableOpacity onPress={() => { decrement() }}>
                <SimpleLineIcons
                  name='minus'
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Descrição aqui</Text>
            <Text style={styles.descText}>
              {item.description}
            </Text>
          </View>
          <View style={{ marginBottom: SIZES.small }}>
            <View style={styles.location}>
              <View style={{flexDirection: "row"}}>
                <Ionicons
                  name='location-outline'
                  size={20}
                />
                <Text>{item.product_location}</Text>
              </View>
              <View style={{flexDirection: "row"}}>
                <MaterialCommunityIcons
                  name='truck'
                  size={20}
                />
                <Text>   Entrega grátis </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
                <Text style={styles.cartTitle}>Compre agora</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
                <Fontisto 
                name='shopping-bag'
                size={22}
                color={COLORS.lightWhite}
                />
          </TouchableOpacity>
        </View>
                
      </View>
    </View>
  )
}



export default ProductDetails
