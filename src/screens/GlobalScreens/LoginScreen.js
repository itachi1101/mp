import { StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar, ScrollView } from 'react-native';
import CustomButton from '../../Components/CustomButton'
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';

import messaging from '@react-native-firebase/messaging';
export default function LoginScreen({ navigation, route }) {
    const [adharNo, setAdharNo] = useState(null)
    const [password, setPassword] = useState(null)
    const { login } = useContext(Context)
    const userType = route.params.type

    const handleSubmit = async () => {
        try {
            await login(adharNo, password, userType)
           
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.mainText}>
                    LOGIN
                </Text>
                <View style={styles.formContainer}>
                    <Text style={styles.labels}>Enter Adhar Number</Text>
                    <TextInput style={styles.inputStyle} autoCapitalize="none"
                        autoCorrect={false} onChangeText={(e) => setAdharNo(e)} />
                    <Text style={styles.labels}>Enter your Password</Text>
                    <TextInput style={styles.inputStyle} autoCapitalize="none"
                        autoCorrect={false} secureTextEntry={true} onChangeText={(e) => setPassword(e)} />
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("signup")
                    }} style={styles.linkContainer}>
                        <Text style={styles.linkText}>Don't have an account?
                            <Text style={{ color: "blue", marginLeft: "10px" }}>
                                Register
                            </Text>
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.btnContainer}>
                        <CustomButton click={handleSubmit} title="LOGIN" />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    mainText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "gray"
    },
    formContainer: {
        marginTop: 20
    },
    labels: {
        fontSize: 18,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,

    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 10,
        fontSize: 18,
        marginBottom: 20
    },
    linkContainer: {
        marginTop: 10,
    },
    linkText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "gray"
    }

    ,
    btnContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    }
})