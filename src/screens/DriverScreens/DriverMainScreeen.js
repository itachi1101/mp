import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ShadowPropTypesIOS } from 'react-native'
import React from 'react'

const DriverMainScreeen = ({ navigation }) => {
    const handleSectorClick = () => {
        navigation.navigate("chooseSector")
    }
    const handleComplaintClick = () => {
        navigation.navigate("registerComplaint")
    }
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>

                <TouchableOpacity onPress={handleSectorClick} style={styles.sectorbtn}>
                    <Text style={styles.text} >Choose Sector</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectorbtn} onPress={handleComplaintClick}>
                    <Text style={styles.text}>Register Complaint</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    sectorbtn: {
        backgroundColor: "coral",
        padding: 10,
        width: "70%",
        marginTop: 30,
        padding: 20,
        borderRadius: 20
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center"
    }
})
export default DriverMainScreeen