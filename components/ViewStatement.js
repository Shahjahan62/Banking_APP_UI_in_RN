import { View, Text, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const ViewStatement = (props) => {
  return (
    <View style={{ marginTop: 30 }}>
      <View
        style={{
          width: "90%",
          height: 267,
          backgroundColor: "#292929",
          borderRadius: 20,
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            height: 89,
            width: "100%",
            borderBottomWidth: 0.5,
            borderColor: "#EEEEEE",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
              // justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: "#6A6A6A",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Icon name="list-alt" size={30} color="#fff" />
            </View>
            <View
              style={{
                width: "75%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "5%",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                View Statement
              </Text>
              <Icon
                name="angle-right"
                size={35}
                color="#fff"
                // style={{ marginLeft: "40%" }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            height: 89,
            width: "100%",
            borderBottomWidth: 0.5,
            borderColor: "#EEEEEE",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
              // justifyContent: "space-around",
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: "#6A6A6A",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="lock" size={30} color="#fff" />
            </View>
            <View
              style={{
                marginLeft: "5%",
                width: "75%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Change Pin
              </Text>
              <Icon
                name="angle-right"
                size={35}
                color="#fff"
                // style={{ marginLeft: "30%" }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            height: "50%",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
              // justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: "#6A6A6A",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="minus-circle" size={30} color="#fff" />
            </View>
            <View
              style={{
                width: "75%",

                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "5%",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  // marginLeft: "",
                }}
              >
                Remove Card
              </Text>
              <Icon name="angle-right" size={35} color="#fff" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ViewStatement;
