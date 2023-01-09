
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CustomButton from '../../Components/CustomButton';

export default function SelectUserTypeScreen({ navigation }) {
  const handleUserPress = () => {
    navigation.navigate("login", {
      type: "user"
    })
  }
  const handleDriverPress = () => {
    navigation.navigate("login", {
      type: "driver"
    })
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          Choose your account type
        </Text>
        <CustomButton click={handleUserPress} title="User" />
        <CustomButton click={handleDriverPress} title="Vehicle Owner" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: "black"
  },
  wrapper: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"

  }
});
