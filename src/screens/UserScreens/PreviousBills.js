
import { ScrollView, StyleSheet, Text, View, StatusBar } from "react-native";
import BillData from '../../Data/PreviousBillData'
export default function PreviousBills() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headingWrapper}>

                <Text style={styles.heading}>
                    BILLING HISTORY
                </Text>
                <Text style={styles.subHeading}>
                    Address: Sector-20 Noida Block E
                </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                {
                    BillData.map((b) => {
                        return (
                            <View key={b.id} style={styles.listContainer}>
                                <Text style={styles.listContainerDate}>{b.date}</Text>
                                <Text style={styles.listContainerAmount}> {'\u20B9'} {b.amount}</Text>
                                <Text style={styles.listCntainerStatus}>{b.status}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    headingWrapper: {
        color: "black",
        padding: 10,
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1.2,
        textAlign: "center",
        color: "black",

    },
    subHeading: {
        fontSize: 15,
        marginTop: 12,
        marginBottom: 20,
        color: "black",
        textAlign: "center"
    },
    scrollContainer: {
        backgroundColor: "white",
        width: 350,
        padding: 20,
        borderRadius: 20,
        marginBottom: 20,
        flexGrow: 0,
        color: "black"
    },
    listContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 12,
        borderBottomWidth: 1,
        paddingVertical: 18,
        borderColor: "gray",
        color: "black"

    },
    listContainerDate: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 3,
        color: "black"

    },
    listContainerAmount: {
        fontSize: 16,
        padding: 3,
        marginRight: 19,
        color: "black"

    },
    listCntainerStatus:{
        color:"white",
        backgroundColor:"lightgreen",
        paddingHorizontal:10,
        textAlign:"center",
        borderRadius:10
    }
})