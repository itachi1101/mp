import { View, Text, StyleSheet, Button, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { getFirebaseTokens, sendNotification } from '../../ApiCalls'

const DriverSelectScreenCard = ({ sector, click }) => {
    const handlePress = async () => {
        try {
            const tokens = await getFirebaseTokens(sector, "user")
            await sendNotification(tokens)
        } catch (error) {
            console.log("error in DriverSelectScreenCard", error)
        }
        click()
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading11}>SECTOR:{sector}</Text>
            <TouchableOpacity onPress={handlePress} style={styles.btn}>
                <Text style={styles.btntxt}>Send Notification</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 180,
        width: 290,
        backgroundColor: "#dce0dc",
        marginBottom: 10,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 20
    },
    heading11: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black'
    },
    btn: {
        backgroundColor: '#f77e80',
        padding: 10,
        fontSize: 24,
        marginTop: 8,
        borderRadius: 14,
        color: "white"
    },
    btntxt: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    }
})

export default DriverSelectScreenCard