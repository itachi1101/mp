

// --------------------------------------Navigation---------------------------
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



const Tab = createBottomTabNavigator()

// ----------------------------------------icons---------------------------------



// -----------------------------screen imports -------------------------------------
import StackNavigationDriver from './StackNavigationDriver';
import DriverProfileScreen from '../screens/DriverScreens/DriverProfile';
import DriverNotificationScreen from '../screens/DriverScreens/DriverNotificationScreen';



export default function TabNavigationDriver() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        position: "absolute",
                        backgroundColor: 'whitesmoke',
                        borderRadius: 50,
                        bottom: 10,
                        marginHorizontal: 15,
                        height: 60,
                        justifyContent: "center",
                        alignItems: "center"

                    },
                    tabBarActiveTintColor: 'orange',
                    tabBarIconStyle: { display: "none" },
                    tabBarLabelPosition: "beside-icon",
                    tabBarLabelStyle: {
                        fontWeight: "700",
                        fontSize: 12,
                        textAlign: "center",
                        alignItems: "center"
                    },
                }}

            >
                <Tab.Screen name="Main" component={StackNavigationDriver} options={{}} />
                <Tab.Screen name="Notification" component={DriverNotificationScreen} />
                <Tab.Screen name="Profile" component={DriverProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}