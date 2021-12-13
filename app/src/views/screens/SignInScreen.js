import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
global.Buffer = global.Buffer || require('buffer').Buffer;


const SignInScreen = ({ navigation }) => {

    const [stateEmail, setStateEmail] = useState('')
    const [statePassword, setStatePassword] = useState('')

    const Email = '';
    const Password = '';

    const getData = () => {
        console.log('a')
        const token = Buffer.from(`${Email}:${Password}`, 'utf8').toString('base64')
        console.log('b')
        const url = 'https://mtechub-project-cheers.herokuapp.com/api/user/login';
        const data = {
            Email: stateEmail,
            Password: statePassword,
        }
        console.log('c')
        axios.post(url, data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(function (response) {
                console.log("response", JSON.stringify(response.data));
                alert(JSON.stringify(response.data));
                // .then(function (response) {
                console.log('Authenticated');
            }).catch(function (error) {
                console.log('Error on Authentication');

            })
    }

    // var session_url = 'https://mtechub-project-cheers.herokuapp.com/api/user/login';
    // const getData = () => {
    //     console.log('a')
    //     axios.post(session_url, {
    //         withCredentials: true,
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         }
    //     }, {
    //         auth: {
    //             Email: stateEmail,
    //             Password: statePassword,
    //         }
    //     })
    //         .then(function (response) {
    //             console.log("response", JSON.stringify(response.data));
    //             alert(JSON.stringify(response.data));
    //             // .then(function (response) {
    //             console.log('Authenticated');
    //         }).catch(function (error) {
    //             console.log('Error on Authentication');
    //         });
    // }
    // const getData = () => {
    //     console.log('a')
    //     axios
    //         .get('https://mtechub-project-cheers.herokuapp.com/api/user/login')
    //         .then(function (response) {
    //             // handle success
    //             console.log('b')
    //             alert(JSON.stringify(response.data));
    //             console.log('s', response.data)

    //         })
    //         .catch(function (error) {
    //             // handle error
    //             alert(error.message);
    //             console.log('e')
    //         })
    //         .finally(function () {
    //             // always executed
    //             alert('Finally called');

    //         });
    // };



    // const getData = (data) => {
    //     console.log('a')
    //     axios({
    //         method: 'POST',
    //         url: 'https://mtechub-project-cheers.herokuapp.com/api/user/login',

    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             Email: stateEmail,
    //             Password: statePassword,
    //         })

    //     })
    //         .then(function (response) {
    //             console.log("response", JSON.stringify(response.data));
    //             alert(JSON.stringify(response.data));
    //         })
    //         .catch(function (error) {
    //             console.log("Login failed", error);


    //         })
    // }



    // const getData = () => {
    //     console.log('a')
    //     fetch('https://mtechub-project-cheers.herokuapp.com/api/user/login', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             Email: stateEmail,
    //             Password: statePassword,
    //         })
    //     })
    //         .then((response) => response.json())
    //         .then((data) => console.log(data))
    //         .catch((error) => {
    //             console.error(error);
    //         })
    // }


    // const baseUrl = 'https://mtechub-project-cheers.herokuapp.com';

    // // Passing configuration object to axios
    // const getData = () => {
    //     console.log('a')
    //     axios({
    //         method: 'POST',
    //         url: `${baseUrl}/api/user/login`,
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             Email: stateEmail,
    //             Password: statePassword,
    //         })
    //     })
    //         .then((response) => response.json())
    //         .then((response) => {
    //             console.log(response.data);
    //         });


    //     // Invoking get method to perform a GET request
    //     axios.get(`${baseUrl}/api/user/login`).then((response) => {
    //         console.log(response.data);
    //     });
    // };


    // const baseUrl = 'https://mtechub-project-cheers.herokuapp.com';

    // Passing configuration object to axios
    // const fetchUser = async () => {
    //     const configurationObject = {
    //         method: 'POST',
    //         url: `${baseUrl}/api/user/login`,

    //     };
    //     const response = await axios(configurationObject);
    //     console.log(response.data);
    // };

    // Invoking get method to perform a GET request
    // const fetchUser = async () => {
    //     const url = `${baseUrl}/api/user/login`;
    //     const response = await axios.get(url);
    //     console.log(response.data);
    // };

    return (
        <ScrollView showsVerticalScrollIndicator={false}
            style={{ paddingHorizontal: "5%", width: Dimensions.get('screen').width, height: Dimensions.get('screen').height, flex: 1, backgroundColor: COLORS.white }}>

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
                    Sign in to continue
                </Text>
            </View>
            <View style={{ marginTop: "3%" }}>
                <View style={STYLES.inputContainer}>

                    <TextInput placeholder="Email" style={STYLES.input} onChangeText={text => setStateEmail(text)} />
                </View>
                <View style={STYLES.inputContainer}>

                    <TextInput
                        placeholder="Password"
                        style={STYLES.input}
                        onChangeText={text => setStatePassword(text)}
                        secureTextEntry
                    />


                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                        marginTop: "5%",
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                        <Text
                            style={{ color: COLORS.code, fontSize: 18, fontWeight: '500' }}> Forgot Password?
                        </Text>

                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, marginTop: "50%" }}>
                    <View Style={{ flex: 1, backgroundColor: 'green', }}>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('TabBottom')}> */}
                        {/* <TouchableOpacity onPress={() => { getData() }}> */}
                        <TouchableOpacity onPress={getData}>
                            <View style={STYLES.btnPrimary}>
                                <Text onPress={() => navigation.navigate('TabBottom')} style={{ color: '#fff', fontWeight: 'bold', fontSize: 18, }}>
                                    LOGIN
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                        <Text style={{ color: COLORS.light, fontSize: 18 }}>
                            New User ?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            {/* <TouchableOpacity  onPress={() => { getData() }}> */}

                            <Text
                                style={{ color: COLORS.code, fontWeight: '500', fontSize: 18 }}> Signup
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
};

export default SignInScreen;






// <SafeAreaView
// style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.light, }}>
// <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: 'gray' }}>
//     <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'green', marginTop: "10%", alignContent: 'center', justifyContent: 'center' }}>

//     <View style={{ flex: 2, marginTop: 20, backgroundColor: 'blue' }}>

//         <View style={STYLES.inputContainer}>

//             <TextInput placeholder="Email" style={STYLES.input} />
//         </View>
//         <View style={STYLES.inputContainer}>

//             <TextInput
//                 placeholder="Password"
//                 style={STYLES.input}
//                 secureTextEntry
//             />
//         </View>
//     </View>

//     <View style={{ flex: 3, backgroundColor: 'green' }}>


//         <View style={{ flex: 2, backgroundColor: 'gray', marginTop: 10, justifyContent: 'space-around' }}>
//             <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
//                 <View style={STYLES.btnSecondary}>

//                     <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
//                         Login
//                     </Text>

//                 </View>

//             </TouchableOpacity>
//             <View
//                 style={{
//                     flexDirection: 'row',
//                     justifyContent: 'center',
//                 }}>
//                 <Text style={{ color: COLORS.light, fontSize: 18 }}>
//                     New User ?
//                 </Text>
//                 <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
//                     <Text
//                         style={{ color: COLORS.code, fontWeight: '500', fontSize: 18 }}> Signup
//                     </Text>
//                 </TouchableOpacity>

//             </View>
//             <View style={{ flex: 1, backgroundColor: 'pink' }}>
//             </View>



//         </View>
//     </View>
// </ScrollView>
// </SafeAreaView>

















// import React from 'react';
// import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import COLORS from '../../consts/color';
// import STYLES from '../../styles';
// // import { ScrollView } from 'react-native-gesture-handler';






// const SignInScreen = ({ navigation }) => {


//     return (


//         <SafeAreaView
//             style={{ paddingHorizontal: "2%", width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }}>
//             <ScrollView>
//                 <View style={{ flex: 1, backgroundColor: '' }}>
//                     <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>

//                         <Text style={{ fontWeight: 'bold', fontSize: 28, color: COLORS.dark, alignSelf: 'center' }}>
//                             Welcome to
//                         </Text>
//                         <Text style={{ fontWeight: 'bold', fontSize: 28, color: COLORS.dark, alignSelf: 'center' }}>
//                             Moseng Trading Services
//                         </Text>
//                         <Text style={{ fontWeight: 'bold', fontSize: 18, color: COLORS.light, alignSelf: 'center' }}>
//                             Sign in to continue
//                         </Text>

//                     </View>
//                     <View style={{ flex: 1, backgroundColor: 'pink', }}>

//                         <View style={STYLES.inputContainer}>
//                             <TextInput placeholder="Email" style={STYLES.input} />
//                         </View>
//                         <View style={STYLES.inputContainer}>

//                             <TextInput
//                                 placeholder="Password"
//                                 style={STYLES.input}
//                                 secureTextEntry
//                             />
//                         </View>
//                         <View
//                             style={{
//                                 flexDirection: 'row',
//                                 justifyContent: 'flex-end',
//                                 marginTop: "5%",
//                             }}>
//                             <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
//                                 <Text
//                                     style={{ color: COLORS.code, fontSize: 18, fontWeight: '500' }}> Forgot Password?
//                                 </Text>

//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                     <View style={{ flex: 1, backgroundColor: 'blue', }}>
//                         <TouchableOpacity onPress={() => navigation.navigate('TabBottom')}>
//                             <View style={{ paddingVertical: "10%" }}>
//                                 <View style={STYLES.btnPrimary}>
//                                     <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold', flexDirection: 'row' }}>
//                                         Login
//                                     </Text>
//                                 </View>

//                                 <Text style={{ color: COLORS.light, fontSize: 18, flexDirection: 'row' }}>
//                                     New User?
//                                 </Text>
//                                 <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//                                     <View style={{ flexDirection: 'row' }}>
//                                         <Text
//                                             style={{ color: COLORS.code, fontWeight: '500', fontSize: 18 }}> Signup
//                                         </Text>
//                                     </View>
//                                 </TouchableOpacity>

//                             </View>

//                         </TouchableOpacity>


//                     </View>
//                 </View >
//             </ScrollView>
//         </SafeAreaView >
//     );
// };

// export default SignInScreen;