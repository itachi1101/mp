import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BillPaymentCard({ previousBills }) {
    return (
        <View style={[styles.container, styles.elevation]}>
            <Text style={styles.heading}>
                BILL
            </Text>
            <Text style={styles.subheading}>
                Total Outstanding is {'\u20B9'}20
            </Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={previousBills} style={[styles.payContainer, styles.payContainerBlack]}>
                    <Text style={styles.payText}>PREVIOUS BILLS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.payContainer}>
                    <Text style={styles.payText}>PAY NOW</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: 180,
        borderRadius: 20,
        padding: 10,
        width: 280,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
        marginTop: 15
    },
    elevation: {
        shadowColor: "#52006A",
        elevation: 30
    },
    heading: {
        padding: 10,
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 1.2,
        color: "gray"

    },
    subheading: {
        padding: 10,
        fontSize: 18,
        color: "black",
    }
    ,
    btnContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
    },
    payContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'coral',
        borderRadius: 10,
        height: 40,
        width: 120,
        marginRight: 10,
    },
    payContainerBlack: {
        backgroundColor: 'black'
    },
    payText: {
        fontSize: 13,
        color: "white",
        textAlign: "center"

    }
})