import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const UserNotificationCards = ({ description }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{description}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height:100,
        width:"90%",
        backgroundColor:"#dce0dc",
        marginBottom:10,
        marginTop:10,
        justifyContent:"center",
        alignContent:"center",
        borderRadius:30
    },
    title: {
        color:"black",
        paddingHorizontal:10
    }
})

export default UserNotificationCards