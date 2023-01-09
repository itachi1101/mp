import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserNotificationCards from '../../Components/UserNotificationCards'
import UserNotificationData from '../../Data/UserNotificationData'
const UserNotificationScreen = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(UserNotificationData)
  }, [])
  console.log(data)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>

        {
          data && data.map((d) => {
            return (
              <UserNotificationCards key={d.id} description={d.description} />
            )
          })
        }
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper:{
    justifyContent:"center",
    alignItems:"center",
    
  }
})
export default UserNotificationScreen