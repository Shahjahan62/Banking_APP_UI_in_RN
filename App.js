import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import MyCards from "./screens/MyCards";
import ViewStatement from "./components/ViewStatement";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createBottomTabNavigator();

// const Tabs = createMaterialBottomTabNavigator();

export default function App() {
  return (
    // <Home />
    // <ViewStatement />
    // <MyCards />

    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        inactiveColor="grey"
        barStyle={{ backgroundColor: "#000000" }}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <Icon name="home" size={35} />,
          }}
        />
        <Tab.Screen
          name="MyCards"
          initialRouteName="Home"
          activeColor="#fff"
          inactiveColor="grey"
          barStyle={{ backgroundColor: "#000000" }}
          component={MyCards}
          options={{
            tabBarIcon: () => <Icon name="credit-card" size={30} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
