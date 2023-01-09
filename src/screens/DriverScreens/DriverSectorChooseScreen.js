import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import DriverSelectScreenCard from '../../Components/DriverSelectScreenCard'

const DriverSectorChooseScreen = ({navigation}) => {
    const [sectors, setSectors] = useState([1, 2, 3, 4])

    return (
        <ScrollView style={styles.container} >
            <View style={styles.wrapper}>

                {
                    sectors && sectors.map((d) => {
                        return (
                            <DriverSelectScreenCard click={()=>navigation.navigate("SingleSectorScreen")} key={d} sector={d} />
                        )
                    })
                }
            </View>

        </ScrollView>
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
        alignItems: "center",
        marginBottom:100
    }
})
export default DriverSectorChooseScreen