import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { SIZES, COLORS } from '../../constants'
import ProductCardView from './ProductCardView'
import useFetch from '../../hook/useFetch'
import { ActivityIndicator } from 'react-native'

const ProductRow = () => {
    const { data, isLoading, error } = useFetch('')
    return (
        <View style={{marginTop: SIZES.medium, height: 400, marginLeft: 15}}>
            {isLoading ? (
                <ActivityIndicator />
            ): error ? (
                <Text>Ops, algo deu errado...</Text>
                
            ) : (
                <FlatList
                data={data}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <ProductCardView item = {item}/>}
                horizontal
                contentContainerStyle={{ columnGap: 1 }}
            />
            )}
        </View>

    )
}

export default ProductRow

