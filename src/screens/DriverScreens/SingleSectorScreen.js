import { View, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import React from 'react'
const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
];
const SingleSectorScreen = () => {

    const ListItem = ({ sector }) => {
        return (
            <View style={{ width: 300, backgroundColor: "lightgray", marginBottom: 10, flexDirection: "row", height: 80, borderRadius: 20, padding: 20, justifyContent: "space-around", alignItems: "center" }}>
                <Text style={{fontWeight:"bold",}}>{sector}</Text>
                <TouchableOpacity style={{ backgroundColor: "lightgreen", width: 70, height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ textAlign: "center", color: "white", }}>DONE</Text>
                </TouchableOpacity >
                <TouchableOpacity style={{ backgroundColor: "coral", width: 80, height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ textAlign: "center", color: "white", }}>Complaint</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                {
                    DATA.map((d) => {
                        return (
                            <ListItem key={d.id} sector={1} />
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        justifyContent: 'center',
        alignItems: "center"
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
export default SingleSectorScreen