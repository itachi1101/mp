
import { ScrollView, StyleSheet, Text, StatusBar, TouchableOpacity, View, SafeAreaView } from "react-native";
import BillPaymentCard from "../../Components/BillPaymetCard";
import CalendarComponent from "../../Components/CalanderComponent";
import CustomStatusCard from "../../Components/CustomStatusCard";




export default function UserMainScreen({ navigation }) {
    return (
        <ScrollView style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsHorizontalScrollIndicator={false} style={styles.scrollViewContainer}>
                    <CustomStatusCard />
                    <BillPaymentCard previousBills={() => {
                        navigation.navigate("previousBills")
                    }} />

                </ScrollView>
                <View style={styles.calendarContainer}>
                    <Text style={styles.calendarText}>
                        Collection Record
                    </Text>
                    <CalendarComponent />
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("registerComplaint")
                }}
                    style={styles.complainContainer}>
                    <Text style={styles.complainText}>
                        Register Complaint
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginBottom: 20,
        backgroundColor: "white"
    },
    scrollViewContainer: {
        backgroundColor: "white"
    },
    calendarContainer: {
        padding: 20,

    }
    , calendarText: {
        textAlign: "center",
        padding: 20,
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 1.2,
        color: "black"
    }
    ,
    complainContainer: {
        backgroundColor: '#f77e80',
        padding: 10,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 18,
        marginTop:20,
        marginBottom:100
    },
    complainText: {
        textAlign: "center",
        fontSize: 24,
        color: "white",
        fontWeight: 'bold',
    }
})