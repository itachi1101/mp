

// --------------------------------------Navigation---------------------------
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()



// -----------------------------screen imports -------------------------------------
import PreviousBills from "../screens/UserScreens/PreviousBills";
import UserMainScreen from "../screens/UserScreens/UserMainScreen"
import UserRegisterComplaintScreen from "../screens/UserScreens/UserRegisterComplaint";






export default function AppNavigation() {
    return (

        <Stack.Navigator initialRouteName="userScreen">
            <Stack.Screen name="userScreen" component={UserMainScreen} options={{ title: "WELCOME" }} />
            <Stack.Screen name="previousBills" component={PreviousBills} options={{ title: "" }} />
            <Stack.Screen name="registerComplaint" component={UserRegisterComplaintScreen} options={{ title: "" }} />
        </Stack.Navigator>

    )
}