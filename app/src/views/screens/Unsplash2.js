// import * as React from 'react';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, ScrollView, SafeAreaView, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';




const Item = ({ id, images }) => (
    <View style={{
        paddingVertical: 8,
    }}>
        <Image
            style={{
                // height: 250,
                height: Dimensions.get('window').height / 4,
                width: Dimensions.get('window').width / 1,
                alignSelf: 'center',
                borderRadius: 5,
            }}
            source={{ uri: images }}
        />
    </View>
);


const Unsplash2 = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [text, setText] = useState('');

    const search = (e) => {
        // console.log("eeee", e)
        fetch(`https://api.unsplash.com/search/photos?query=${e}&client_id=v2bnN5LEl2UTzwm0YEKvJ8oE0PDf0naZJjMROqhkios`)
            // fetch(`https://api.unsplash.com/search/photos?query=cat&client_id=v2bnN5LEl2UTzwm0YEKvJ8oE0PDf0naZJjMROqhkios`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error("error", error))
            .finally(() => setLoading(false));
    };


    const renderItem = ({ item }) => {
        // console.log("abc")
        return <Item id={item.id} images={item.urls.small} />
    }
    // console.log("data", data)
    return (
        <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: 'pink', }}>
            <TextInput
                placeholder="search images"
                onChangeText={event => {

                    // console.log('search', data)

                    setText(event)
                }} style={{ color: 'white' }}>
            </TextInput>
            {/* {isLoading ? <ActivityIndicator /> : ( */}
            <TouchableOpacity onPress={() => search(text)}>
                <View style={{ marginTop: 10 }}>
                    <Button style={{ padding: 10, backgroundColor: 'green' }} >
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                            search
                        </Text>
                    </Button>
                </View>
            </TouchableOpacity>

            <View style={{ flex: 5 }}>
                {isLoading ? <ActivityIndicator /> :
                    (
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={data.results}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                        />
                    )
                }
            </View>
        </SafeAreaView>
    )
}

export default Unsplash2;