import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function CustomStatusCard() {
    const [status, setStatus] = useState(true)
    const date = new Date()

    const today = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    return (
        <View style={[styles.container, styles.elevation]}>
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>
                    <Text style={{ color: "black" }}>DATE: </Text>
                    {today}
                </Text>
            </View>
            <View style={[styles.statusContainer, status ? styles.statusContainerTrue : styles.statusContainerFalse]}>
                <Text style={styles.statusText}>
                    {status ? "PICKUP DONE" : "Ready For Pickup "}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: 180,
        borderRadius: 20,
        width: 290,
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 15
    },
    elevation: {
        shadowColor: "#52006A",
        elevation: 30
    },
    dateContainer: {
        padding: 10,
        display: "flex",
        borderRadius: 15,
        marginBottom: 35,
        justifyContent: 'center'
    }
    ,
    dateText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "gray"
    },
    statusContainer: {
        padding: 10,
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 15,
        width: 180
    },
    statusContainerTrue: {
        backgroundColor: "green",
    },
    statusContainerFalse: {
        backgroundColor: "coral"
    },
    statusText: {
        textAlign: 'center',
        fontSize: 20,
        color: "white",
        fontWeight: 'bold'
    }
})