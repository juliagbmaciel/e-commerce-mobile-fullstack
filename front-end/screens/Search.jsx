import { View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'
import { SIZES, COLORS } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './search.style'
import axios from 'axios'


const Search = () => {
  const [ searchKey, setSearchKey ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);

  async function handlePress(){
    try {
      const response = await axios.get(`http://10.109.71.13:3004/search/${searchKey}`)
      setSearchResults(response.data)
    } catch (error) {
      console.log("Falhou ao pegar o produto")
    }
  }



  console.log(searchKey)
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name='camera-outline'
            size={SIZES.xLarge} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder='What are you looking for?'s
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => handlePress()}>
            <Feather name='search' size={24}
              color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Search