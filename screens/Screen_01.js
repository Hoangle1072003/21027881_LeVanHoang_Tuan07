import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

const Screen_01 = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const handleButton = () => {
    if (name === "") {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Name is required",
      });
    } else {
      Toast.show({
        type: "success",
        position: "top",
        text1: "Success",
        text2: "Name is valid",
      });
      navigation.navigate("Screen_02", {
        name: name,
      });
    }
  };
  return (
    <ScrollView style={styles.container}>
      {/* Logo */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 20,
        }}
      >
        <Image
          source={require("../assets/data/Image 95.png")}
          style={{ width: 200, height: 200, objectFit: "cover" }}
        />
      </View>
      {/* title */}
      <View
        style={{
          maxWidth: 300,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginVertical: 10,
            color: "#7f3fbf",
            textAlign: "center",
          }}
        >
          MANAGE YOUR TASK
        </Text>
      </View>
      {/* input */}
      <View
        style={{
          marginVertical: 20,
        }}
      >
        <TextInput
          placeholder="Enter your name"
          style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            marginVertical: 10,
            borderRadius: 10,
          }}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      {/* Button get Started */}
      <View
        style={{
          marginVertical: 20,
          alignItems: "center",
        }}
      >
        <Button
          onPress={() => {
            handleButton();
          }}
          title="Get Started"
          color="#7f3fbf"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default Screen_01;
