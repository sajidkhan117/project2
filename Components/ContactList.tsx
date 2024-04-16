// import React from 'react'
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'

export default function ContactList() {
    const data = [
        {
            name: "John Doe",
            fatherName: "Michael Doe",
            address: "123 Main Street, Cityville",
            imageUrl: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=600"
        }, 
        {
            name: "Jane Smith",
            fatherName: "David Smith",
            address: "456 Elm Street, Townsville",
            imageUrl: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Alice Johnson",
            fatherName: "Robert Johnson",
            address: "789 Oak Street, Villagetown",
            imageUrl: "https://www.pexels.com/photo/portrait-of-young-woman-678783/"
        }
    ];


    return (
        <View>
            <Text style={styles.HeadingText}>ContactList</Text>
            <ScrollView
                style={styles.Container}
                scrollEnabled={false}
            >
                {data.map(({ name, fatherName, address, imageUrl }) => (
                    <View key={name} style={styles.UserCard}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.userImage}
                        />
                         <Text style={styles.userName}>
                            {name}
                        </Text>
                        <Text style={styles.fatherName}>
                            {fatherName}
                        </Text>
                        <Text style={styles.Address}>
                            {address}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    HeadingText: {},
    Container: {},
    UserCard: {},
    userImage: {
        width : 60 ,
        height : 60 ,
        borderRadius: 30,
    } ,
    userName:{},
    fatherName: {},
    Address : {},


})