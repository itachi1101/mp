import { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet, FlatList, Animated, TouchableOpacity } from "react-native";
import OnBoardingItem from "../../Components/OnBoardingItem.js";
import onBoardingData from "../../Data/OnBoardingData.js";
import Paginator from '../../Components/Paginator'
import { StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function OnBoardingScreen({navigation}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current
    const slidesRef = useRef(null)
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
    const handlePress=()=>{
        if(currentIndex< onBoardingData.length-1){
            slidesRef.current.scrollToIndex({index:currentIndex+1})
        }
        else{
            navigation.navigate("chooseType")
            // navigation.dispatch(StackActions.replace("chooseType"))
        }
    }
    useEffect(()=>{
        const check=async()=>{
            const res=await AsyncStorage.getAllKeys()
            console.log(res)
        }
        check()
    },[])
    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>

                <FlatList data={onBoardingData} renderItem={({ item }) => <OnBoardingItem item={item} />}

                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
            <Paginator data={onBoardingData} scrollX={scrollX} />
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={{fontSize:20,color:"white"}}>NEXT</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"white"
    },
    button: {
        backgroundColor: '#f4338f',
        padding: 20,
        marginBottom:10,
        borderRadius:10,
        width:150,
        textAlign:"center",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
    }
})