import LoginScreen from "../screens/GlobalScreens/LoginScreen";
import OnBoardingScreen from "../screens/GlobalScreens/OnBoardingScreen";
import SelectUserTypeScreen from "../screens/GlobalScreens/SelectUserTypeScreen";
import RegisterScreen from "../screens/GlobalScreens/SignUpScreen";



// --------------------------------------Navigation---------------------------
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()





export default function AuthNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="OnBoarding">
                <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{ title: "WELCOME" }} />
                <Stack.Screen name="chooseType" component={SelectUserTypeScreen} options={{ title: "" }} />
                <Stack.Screen name="login" component={LoginScreen} options={{ title: "" }} />
                <Stack.Screen name="signup" component={RegisterScreen} options={{ title: "" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}