import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import fetch from 'node-fetch';
global.fetch = fetch;
// browser
import 'whatwg-fetch';
import nodeFetch from 'node-fetch';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
    accessKey: 'v2bnN5LEl2UTzwm0YEKvJ8oE0PDf0naZJjMROqhkios',

});

const search = (e) => {
    fetch(`https://api.unsplash.com/search/photos?query=${e}&page=1`)

}

//     e.preventDefault();
//     setSearchQuery(TextInput);
//     fetch(`https://api.unsplash.com/search/photos?query=${TextInput}&page=1`, {
//         method: "GET",
//         headers: {
//             Authorization: "Client-ID v2bnN5LEl2UTzwm0YEKvJ8oE0PDf0naZJjMROqhkios"
//         }
//     }).then(data => data.json()).then(result => {
//         setTotalImages(result.total);
//         setImages(result.results);
//     })
// }


const Unsplash1 = ({ navigation }) => {

    const [data, setData] = useState('0');
    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: 'salmon', }}>
            <TextInput
                placeholder="search images"
                onChange={event => {
                    const { eventCount, target, text, e } = event.nativeEvent;
                    console.log('search', data)
                    setData(text)
                }} style={{ color: 'white' }}>
            </TextInput>

            <View style={{ flex: 0.3, }}>
                <Button style={{ marginTop: 10, padding: 10, backgroundColor: 'green', }} onPress={() => navigation.navigate('Unsplash2')}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                        search
                    </Text>
                </Button>
            </View>

            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <FlatList
                    query={data}
                />
            </View>
        </View>
    )
}

export default Unsplash1;