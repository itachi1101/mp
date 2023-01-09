

// --------------------------------------Navigation---------------------------
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import IconsPath from '../Data/IconsPath';



import UserNotificationScreen from '../screens/UserScreens/UserNotificationScreen';
import UserProfileScreen from '../screens/UserScreens/UserProfileScreen';
const Tab = createBottomTabNavigator()

// ----------------------------------------icons---------------------------------
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// -----------------------------screen imports -------------------------------------
import AppNavigation from "./StackNavigationUser";




export default function TabNavigationUser() {
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
                        marginHorizontal: 16,
                        height: 60,

                    },
                    tabBarActiveTintColor: 'orange',
                    tabBarIconStyle: { display: "none" },
                    tabBarLabelPosition: "beside-icon",
                    tabBarLabelStyle: {
                        fontWeight: "700",
                        fontSize: 12,
                        padding: 4,
                        borderRadius: 4
                    },
                }}

            >
                <Tab.Screen name="Main" component={AppNavigation} />
                <Tab.Screen name="Notification" component={UserNotificationScreen} />
                <Tab.Screen name="Profile" component={UserProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}