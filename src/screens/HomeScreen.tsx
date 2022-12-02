import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text>Navigation</Text>
      </View>
      <View style={styles.body}>
        <Text>Home Scrren</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    navigation: {
        flex: 2,
        backgroundColor: 'red',
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: 'yellow',
    },
    footer: {
        flex: 1,
        backgroundColor: 'cyan',
    }
})

export default HomeScreen