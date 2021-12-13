import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import { ScrollView } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';

const SignUpScreen = ({ navigation }) => {
    // const [checked, setChecked] = React.useState('first');
    const [stateFullName, setStateFullName] = useState('')
    const [stateUserName, setStateUserName] = useState('')
    const [stateEmail, setStateEmail] = useState('')
    const [statePassword, setStatePassword] = useState('')
    const [statePhoneNumber, setStatePhoneNumber] = useState('')
    const [stateRole, setStateRole] = React.useState('driver');
    const [value, setValue] = useState('');
    const [formattedValue, setFormattedValue] = useState('');
    const [disabled, setDisabled] = useState(false);

    // const sendData = () => {
    //     console.log('a')
    //     fetch('https://mtechub-project-cheers.herokuapp.com/api/user/signup', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             FullName: stateFullName,
    //             Email: stateEmail,
    //             Password: statePassword,
    //             PhoneNumber: statePhoneNumber,
    //             // "PhoneNumber": "03436484737",
    //             "DOB": "23-08-1997",
    //             "Address": "house # ad 99,street # 06 , Rawalpindi",
    //             "Role": stateRole
    //         })
    //     })
    //         .then((response) => response.json())
    //         .then((data) => console.log(data))
    //         .catch((error) => {
    //             console.error(error);
    //         })
    // }

    const postUser = () => {
        console.log('a')
        axios({
            method: 'POST',
            url: 'https://mtechub-project-cheers.herokuapp.com/api/user/signup',
            data: {
                FullName: stateFullName,
                Email: stateEmail,
                Password: statePassword,
                PhoneNumber: statePhoneNumber,
                // "PhoneNumber": "03436484737",
                "DOB": "23-08-1997",
                "Address": "house # ad 99,street # 06 , Rawalpindi",
                "Role": stateRole
            },
            headers: {
                "Authorization": "Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408",
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(function (response) {
                console.log("response", JSON.stringify(response.data));
                alert(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log("error", error);


            })
    }



    return (
        <SafeAreaView
            style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', marginTop: "10%", alignContent: 'center', justifyContent: 'center' }}>
                </View>
                <View style={{ flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 28, color: COLORS.dark, alignSelf: 'center' }}>
                        Welcome to
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 28, color: COLORS.dark, alignSelf: 'center' }}>
                        Moseng Trading Services
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: COLORS.light, alignSelf: 'center' }}>
                        Create a new Account
                    </Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={STYLES.inputContainer}>

                        <TextInput placeholder="Full Name" onChangeText={text => setStateFullName(text)} style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>

                        <TextInput
                            placeholder="Password"
                            style={STYLES.input}
                            secureTextEntry
                            onChangeText={text => setStatePassword(text)}
                        />

                    </View>
                    <View style={STYLES.inputContainer}>

                        <TextInput placeholder="Email" style={STYLES.input} onChangeText={text => setStateEmail(text)} />
                    </View>
                    <View style={STYLES.inputContainer}>

                        <TextInput
                            placeholder="Password"
                            style={STYLES.input}
                            secureTextEntry
                            onChangeText={text => setStatePassword(text)}
                        />
                    </View>
                    <View style={STYLES.inputContainer}>

                        <TextInput placeholder="Phone No" onChangeText={text => setStatePhoneNumber(text)} style={STYLES.input} />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: COLORS.light, }}>I am a: </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: COLORS.light, }}>Driver </Text>
                        </View>
                        <RadioButton
                            value="driver"
                            color={COLORS.code}
                            status={stateRole === 'driver' ? 'checked' : 'unchecked'}
                            onPress={() => { setStateRole('driver'), console.log(stateRole) }}
                        />
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: COLORS.light, }}>Customer </Text>
                        </View>
                        <RadioButton
                            value="customer"
                            color={COLORS.code}
                            status={stateRole === 'customer' ? 'checked' : 'unchecked'}
                            onPress={() => { setStateRole('customer'), console.log(stateRole) }}
                        />
                    </View>

                    {/* <TouchableOpacity onPress={() => navigation.navigate('SignIn')}> */}

                    {/* <TouchableOpacity onPress={() => { sendData() }}> */}
                    <TouchableOpacity onPress={() => { postUser() }}>
                        <View style={{}}>
                            <View style={STYLES.btnSecondary}>

                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                                    Signup
                                </Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                        <Text style={{ color: COLORS.light, fontSize: 18 }}>
                            Already a user?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text
                                style={{
                                    color: COLORS.code,
                                    fontWeight: '500', fontSize: 18
                                }}> Signin
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUpScreen;
