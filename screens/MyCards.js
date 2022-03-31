import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SwiperGradient from "../components/SwiperGradient";
import ViewStatement from "../components/ViewStatement";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-swiper";

const COLORS = { TextColor: "#FFF" };

const ITEM1 = [
  {
    code: "**** **** **** 3245",
    avail: "Available balance",
    price: "$2,200",
    date: "01/24",
  },
];
const ITEM2 = [
  {
    code: "**** **** **** 6539",
    avail: "Available balance",
    price: "$650",
    date: "04/23",
  },
];
const ITEM3 = [
  {
    code: "**** **** **** 4560",
    avail: "Available balance",
    price: "$1,200",
    date: "01/22",
  },
];

const MyCards = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#000000",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 60,
        }}
      >
        <Text
          style={{ color: COLORS.TextColor, fontWeight: "bold", fontSize: 25 }}
        >
          MyCards
        </Text>
        <Swiper
          style={{
            // width: "100%",
            height: 230,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "5%",
          }}
          loop={false}
          dot={
            <View
              style={{
                backgroundColor: "grey",
                width: 12,
                height: 12,
                borderRadius: 10,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 15,
                marginBottom: 3,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: "#BECAF5",
                width: 15,
                height: 15,
                borderRadius: 12,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 15,
                marginBottom: 3,
              }}
            />
          }
        >
          {ITEM1.map((item, index) => {
            return (
              <SwiperGradient
                key={index}
                code={item.code}
                available={item.avail}
                prices={item.price}
                Date={item.date}
              />
            );
          })}

          {ITEM2.map((item, index) => {
            return (
              <SwiperGradient
                key={index}
                code={item.code}
                available={item.avail}
                prices={item.price}
                Date={item.date}
              />
            );
          })}
          {ITEM3.map((item, index) => {
            return (
              <SwiperGradient
                key={index}
                code={item.code}
                available={item.avail}
                prices={item.price}
                Date={item.date}
              />
            );
          })}
        </Swiper>
        <View
          style={{
            width: "90%",
            height: 90,
            backgroundColor: "#414A61",
            borderRadius: 16,
            flexDirection: "row",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginLeft: "5%",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Make a Payment
          </Text>
          <View
            style={{
              marginLeft: "15%",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20,
                marginLeft: "35%",
              }}
            >
              $220
            </Text>
            <Text style={{ color: "#fff", fontSize: 13 }}>Due:Feb 10,2022</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 25 }}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonText}>Transactions</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <ViewStatement />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Button: {
    width: "35%",
    height: 40,
    backgroundColor: "#414A61",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  ButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default MyCards;
