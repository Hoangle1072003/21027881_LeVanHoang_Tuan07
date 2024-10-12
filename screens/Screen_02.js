import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, TextInput, TouchableOpacity } from "react-native";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const Screen_02 = ({ route }) => {
  const data = [
    {
      id: 1,
      title: "Learn React Native",
    },
    {
      id: 2,
      title: "To Check the data",
    },
    {
      id: 3,
      title: "Learn HTML and CSS",
    },
    {
      id: 4,
      title: "Learn Javascript",
    },
    {
      id: 5,
      title: "Learn React",
    },
  ];
  const { name } = route.params ? route.params?.name : { name: "Guest" };
  const [newData, setNewData] = useState(data);
  const [search, setSearch] = useState("");
  const navagion = useNavigation();

  const addJob = (id, job) => {
    if (id) {
      setNewData((prev) =>
        prev.map((item) => (item.id === id ? { ...item, title: job } : item))
      );
    } else {
      const newData = {
        id: data.length + 1,
        title: job,
      };
      setNewData((prev) => [...prev, newData]);
    }
  };

  const handleSearch = (text) => {
    setSearch(text);
    if (text === "") {
      setNewData(data);
      return;
    }
    const filteredData = newData.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );

    setNewData(filteredData);
  };

  const renderTodoList = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 20,
          marginVertical: 5,
          backgroundColor: "#f0f0f0",
        }}
      >
        <View>
          <Image source={require("../assets/data/mdi_marker-tick.png")} />
        </View>
        <View>
          <Text>{item.title}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navagion.navigate("Screen_03", {
                name: name,
                addJob: addJob,
                id: item.id,
                title: item.title,
              });
            }}
          >
            <Image
              source={require("../assets/data/iconamoon_edit-bold.png")}
              style={{
                tintColor: "red",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
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
              navagion.navigate("Screen_01");
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
      {/* input search */}
      <View>
        <TextInput
          placeholder="Search"
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 10,
            marginVertical: 60,
          }}
          value={search}
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
      {/* FLatList Todo */}
      <View
        style={{
          marginVertical: 20,
        }}
      >
        <FlatList
          data={newData}
          keyExtractor={(item) => item.id?.toString()}
          renderItem={renderTodoList}
        />
      </View>
      {/* Button + radio */}
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: "#7f3fbf",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Button
          onPress={() => {
            navagion.navigate("Screen_03", {
              name: name,
              addJob: addJob,
            });
          }}
          title="+"
          color={{
            color: "#fff",
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
export default Screen_02;
