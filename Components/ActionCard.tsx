import { Linking, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }

    return (
        <ScrollView>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]} >
                <View style={styles.headingContainer} >
                    <Text style={styles.headingText}>Blog Title</Text>
                </View>

                <Image source={{
                    uri: "data:image/jpeg;base64,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"
                }}

                    style={styles.cardImage}

                />

                <View style={styles.bodyContainer} >
                    <Text numberOfLines={3}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident porro fugit odit eaque magni repellat adipisci voluptas blanditiis quae repudiandae perspiciatis consectetur mollitia maiores, enim esse pariatur quaerat, laudantium ad.

                    </Text>
                </View>

                <View style={styles.FooterContainer} >
                    <Text numberOfLines={3}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident porro fugit odit eaque magni repellat adipisci voluptas blanditiis quae repudiandae perspiciatis consectetur mollitia maiores, enim esse pariatur quaerat, laudantium ad.

                    </Text>
                </View>


                

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headingText: {},
    card: {},
    elevatedCard: {},
    headingContainer: {},
    cardImage: {
        height: 200
    },
    bodyContainer: {
        marginBottom: 9,
        padding: 10,
    },

    FooterContainer : {},

})