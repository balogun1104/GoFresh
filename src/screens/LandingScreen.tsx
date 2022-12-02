import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from 'expo-location';

const screenWidth = Dimensions.get('screen').width

const LandingScreen = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const [address, setAddress] = useState('');
    const [displayAddress, setDisplayAddress] = useState('Waiting For Location...')

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});

            const { coords } = location

            if (coords) {
                const { latitude, longitude } = coords;
            
                let addressResponse: any = await Location.reverseGeocodeAsync({ latitude, longitude })
            
                for (let item of addressResponse) {
                    setAddress(item)
                    let currentAddress = `${item.name}, ${item.street}, ${item.postalCode}, ${item.country}`
                    setDisplayAddress(currentAddress)
                    return;
                 }
             }else {
                // jjd ///
             }
        });

    }, [])

  

    return (
        <View style={styles.container}>
            <View style={styles.navigation} />


            <View style={styles.body}>
                <Image source={require('../images/delivery_icon.png')} style={styles.delivery_icon} />
                <View style={styles.addressContainer}>
                    <Text style={styles.addressTitle}>Your Delivery Address</Text>
                </View>
                <Text style={styles.addressText}>{displayAddress}</Text>
            </View>
            <View style={styles.footer} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(240,240,240)",
    },
    navigation: {
        flex: 2,

    },
    body: {
        flex: 9,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flex: 1,

    },
    delivery_icon: {
        width: 120,
        height: 120,
    },
    addressContainer: {
        width: screenWidth - 100,
        borderBottomColor: 'red',
        borderBottomWidth: 0.5,
        alignItems: 'center',
        padding: 5,
        marginBottom: 10,

    },
    addressTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#707070'
    },
    addressText: {
        fontSize: 20,
        fontWeight: '200',
        color: '#4F4F4F',
    }
});

export default LandingScreen;
