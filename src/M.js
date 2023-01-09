import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Context } from './context/Context'
import AuthNavigation from './Navigation/AuthNavigation'
import TabNavigationUser from './Navigation/AppNavigation'
import TabNavigationDriver from './Navigation/AppNavigationDriver'
const M = () => {
    const { user } = useContext(Context)
    return (
        <View style={{ flex: 1 }}>
            {
                user ? (user.type === "driver" ? <TabNavigationDriver /> : <TabNavigationUser />) : <AuthNavigation />
            }
        </View>
    )
}

export default M