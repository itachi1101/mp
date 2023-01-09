// --------------------------------------Navigation---------------------------
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()



// -----------------------------screen imports -------------------------------------
import DriverMainScreeen from "../screens/DriverScreens/DriverMainScreeen";
import DriverRegisterComplaintScreen from "../screens/DriverScreens/DriverComplaintScreeen";
import DriverSectorChooseScreen from "../screens/DriverScreens/DriverSectorChooseScreen";
import SingleSectorScreen from '../screens/DriverScreens/SingleSectorScreen';






export default function StackNavigationDriver() {
    return (

        <Stack.Navigator initialRouteName="userScreen">
            <Stack.Screen name="userScreen" component={DriverMainScreeen} options={{ title: "WELCOME" }} />
            <Stack.Screen name="chooseSector" component={DriverSectorChooseScreen} options={{ title: "" }} />
            <Stack.Screen name="registerComplaint" component={DriverRegisterComplaintScreen} options={{ title: "" }} />
            <Stack.Screen name="SingleSectorScreen" component={SingleSectorScreen} options={{ title: "" }} />
        </Stack.Navigator>

    )
}