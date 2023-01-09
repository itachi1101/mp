
import { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar, Image } from "react-native";
import { launchCamera } from 'react-native-image-picker';
import { registerComplaint } from "../../../ApiCalls";
import { Context } from "../../context/Context";

export default function UserRegisterComplaintScreen() {
    const [complaintImage, setComplaintImage] = useState(null)
    const [complaintText, setComplaintText] = useState(null)
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)
    const handleUpload = async () => {
        const options = {
            storageOptions: {
                path: "images",
                mediaType: "photo"
            }
        }
        try {
            const { assets } = await launchCamera(options)
            const value = assets[0]
            setComplaintImage(value.uri)
            setFile(value)
        } catch (error) {
            console.log("error in photo upload ", error.message)
        }
    }
    const handleSubmit = async () => {
        try {
            const config = {
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${user.token}`,
                },
            };
            console.log(config)
            const data = new FormData()
            data.append("creatorType", "User")
            data.append("mobile", user.mobile)
            data.append("description", complaintText)
            data.append("image", {
                uri: file.uri,
                type: file.type,
                name: file.fileName
            })
            console.log(file)
console.log(data._parts)
            // const result = await registerComplaint(config, data)
            // console.log(result)  
        } catch (error) {
            console.log("error in complaint registration", error)
        }
    }
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>
                Register You Complaint
            </Text>
            <ScrollView style={styles.ScrollViewContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.wrapper}>
                    <Text style={styles.key}>HOUSE NUMBER : </Text>
                    <Text style={styles.value}>{user.houseNo}</Text>
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.key}>SECTOR : </Text>
                    <Text style={styles.value}>{user.sector}</Text>
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.key}>OWNER NAME : </Text>
                    <Text style={styles.value}>{user.username}</Text>
                </View>
                <TextInput style={styles.input} placeholder="write your complaint" onChangeText={(e) => setComplaintText(e)} />
                <TouchableOpacity onPress={handleUpload} style={styles.btnContainer}>
                    {
                        complaintImage ? <Image source={{ uri: complaintImage }} style={{ width: 400, height: 400 }} /> :
                            <Text style={styles.btn}>UPLOAD PHOTO</Text>
                    }
                </TouchableOpacity>
                <View style={{ display: "flex", justifyContent: "center", width: "100%", flexDirection: "column", alignItems: "center" }}>
                    <TouchableOpacity onPress={handleSubmit} style={styles.submitContainer}>
                        <Text style={styles.btnSubmit}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1.2,
        marginBottom: 20,
        color: "black",
        textAlign: 'center'
    },
    ScrollViewContainer: {
        width: 360,
        borderRadius: 20,
        padding: 10,
        flexGrow: 0
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        width: "100%",
        alignItems: "center"
    },
    key: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        color: 'gray'
    },
    value: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "left",
        color: "black"
    },
    input: {
        height: 200,
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        display: "flex",
        flexWrap: "wrap",
        color: "black"
    },
    btnContainer: {
        padding: 10,
        backgroundColor: 'coral',
        width: 150,
        borderRadius: 10,
        marginBottom: 40,
    },
    btn: {
        color: "white",
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "center"
    },
    submitContainer: {
        padding: 10,
        backgroundColor: 'black',
        width: "70%",
        borderRadius: 20,
        marginBottom: 100,
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    btnSubmit: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center"
    }

})