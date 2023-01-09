import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native';
import CustomButton from "../../Components/CustomButton";

export default function RegisterScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
                <Text style={styles.mainText}>
                    Register
                </Text>
                <View style={styles.formContainer}>
                    <Text style={styles.labels}>Enter Mobile Number</Text>
                    <TextInput style={styles.inputStyle} autoCapitalize="none"
                        autoCorrect={false} />
                    <Text style={styles.labels}>Enter House Number</Text>
                    <TextInput style={styles.inputStyle} autoCapitalize="none"
                        autoCorrect={false} />
                    <Text style={styles.labels}>Enter Sector</Text>
                    <TextInput style={styles.inputStyle} autoCapitalize="none"
                        autoCorrect={false} />
                    <Text style={styles.labels}>Enter your Email</Text>
                    <TextInput style={styles.inputStyle} autoCapitalize="none"
                        autoCorrect={false} />
                    <Text style={styles.labels}>EnterPassword</Text>
                    <TextInput style={styles.inputStyle} autoCapitalize="none"
                        autoCorrect={false} secureTextEntry={true} />
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("login")
                    }} style={styles.linkContainer}>
                        <Text style={styles.linkText}>Already have an account?
                            <Text style={{ color: "blue" }}>
                                LOGIN
                            </Text>
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.btnContainer}>
                        <CustomButton title="Register" />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // paddingTop: StatusBar.currentHeight,
        marginBottom: 10,

    },
    wrapper: {
        flex: 1,
        flexDirection: "column",
        padding: 10,

    },
    mainText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "gray"
    },
    formContainer: {
        width: "100%",
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
        borderRadius: 1,
        fontSize: 18,
        marginBottom: 10,
        color: 'black'
    },
    linkContainer: {
        marginTop: 10,
    },
    linkText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "gray",
    }

    ,
    btnContainer: {
        marginTop: 30,
        marginBottom: 20
    }
})