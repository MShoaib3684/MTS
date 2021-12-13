// import * as React from 'react';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';



const Item = ({ id, images }) => (
    <View style={{
        paddingVertical: 8,
    }}>
        <Image
            style={{
                // height: 250,
                height: Dimensions.get('window').height / 5,
                width: Dimensions.get('window').width / 1,
                alignSelf: 'center',
                borderRadius: 5,
            }}
            source={{ uri: images }}
        />
    </View>
);



const Unsplash = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        // fetch('https://api.unsplash.com/search/photos?query=Cat&client_id=v2bnN5LEl2UTzwm0YEKvJ8oE0PDf0naZJjMROqhkios')
        fetch('https://api.unsplash.com/photos/random?count=35&client_id=v2bnN5LEl2UTzwm0YEKvJ8oE0PDf0naZJjMROqhkios')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    // fetch('https://api.unsplash.com/photos/random?count=35&client_id=v2bnN5LEl2UTzwm0YEKvJ8oE0PDf0naZJjMROqhkios')
    // $ curl https://api.unsplash.com/search/photos?query=wanderlust █


    const renderItem = ({ item }) => (
        <Item id={item.id} images={item.urls.small} />
    )

    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: 'salmon', }}>
            <Text style={{
                marginStart: 20,
                paddingHorizontal: 20,
                fontSize: 25,
                fontWeight: 'bold',
                alignSelf: 'center',
                color: 'white'
            }}>
                Photos Are Comming
            </Text>



            {isLoading ? <ActivityIndicator /> :
                (
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                    />
                )
            }
        </View>
    )
}



export default Unsplash;