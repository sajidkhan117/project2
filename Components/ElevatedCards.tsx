import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal = {true} style={[styles.container]}>

        <View style ={[styles.card ,styles.cardElevator]}>
            <Text>Tap</Text> 
        </View>

        <View style ={[styles.card ,styles.cardElevator]}>
            <Text>Me</Text> 
        </View>

        <View style ={[styles.card ,styles.cardElevator]}>
            <Text>To</Text> 
        </View>

        <View style ={[styles.card ,styles.cardElevator]}>
            <Text>Scroll</Text> 
        </View>


        <View style ={[styles.card ,styles.cardElevator]}>
            <Text>more....</Text> 
        </View>

        <View style ={[styles.card ,styles.cardElevator]}>
            <Text>😂😂😂😂</Text> 
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
      padding : 9,
    },
    headingText :{
            fontSize: 24,
            fontWeight: 'bold',
            paddingHorizontal : 8,
    },
    card : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        margin : 10,
        borderRadius : 10, 
        width : 100,
        height : 100,
    },
    cardElevator: {
        backgroundColor: "#CAD5E2",
        elevation : 4,
        shadowOffset : {
            width : 1,
            height : 1,
        },
        shadowColor : "red",
        shadowOpacity: 0.4,
        shadowRadius : 2,
    },
})