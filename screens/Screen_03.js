import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

const Screen_03 = ({ route }) => {
  const { name, addJob, id, title } = route.params
    ? route.params
    : { name: "Guest", addJob: () => {}, id: null, title: "" };
  const navigation = useNavigation();
  const [job, setJob] = useState(title);
  useEffect(() => {
    setJob(title);
  }, [title]);

  const handleButton = () => {
    if (job === "") {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Job is required",
      });
    } else {
      addJob(job, id);
      Toast.show({
        type: "success",
        position: "top",
        text1: "Success",
        text2: "Job is valid",
      });
      navigation.goBack();
    }
  };
  return (
    <ScrollView style={styles.container}>
      {/* navigation and info */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={require("../assets/data/Icon Button 12.png")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View>
            <Image source={require("../assets/data/Avatar 31.png")} />
          </View>
          <View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                hi {name}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "#8D8D8D",
                  textAlign: "center",
                }}
              >
                Have agrate day a head
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* Title */}
      <View
        style={{
          marginVertical: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#7f3fbf",
            textAlign: "center",
          }}
        >
          {id ? "EDIT YOUR JOB" : "ADD YOUR JOB"}
        </Text>
      </View>
      {/* Input */}
      <View>
        <TextInput
          placeholder="Enter your job"
          style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            marginVertical: 10,
            borderRadius: 10,
          }}
          value={job}
          onChangeText={(text) => setJob(text)}
        />
      </View>
      {/* Button finish */}
      <View
        style={{
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Button
          title="Finish"
          color="#7f3fbf"
          onPress={() => {
            handleButton();
          }}
        />
      </View>
      {/* Image */}
      <View
        style={{
          marginVertical: 20,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/data/Image 95.png")}
          style={{
            width: 150,
            height: 150,
            borderRadius: 10,
          }}
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
export default Screen_03;
