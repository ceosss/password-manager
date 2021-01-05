import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Vault from "../components/Vault";
import Tools from "../components/Tools";
import Profile from "../components/Profile";
import {
  Fontisto,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import colors from "../helper/colors";

const Home = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{ backgroundColor: colors.purple }}
        inactiveColor={colors.gray}
        activeColor="#fff"
      >
        <Tab.Screen
          name="Vault"
          component={Vault}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="locker-multiple"
                size={20}
                color={focused ? "#fff" : colors.neutralGray}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tools"
          component={Tools}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Fontisto
                name="equalizer"
                size={18}
                color={focused ? "#fff" : colors.neutralGray}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome
                name="user"
                size={22}
                color={focused ? "#fff" : colors.neutralGray}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});

// <TouchableOpacity onPress={signOut}>
//   <Text>LOG-OUT</Text>
// </TouchableOpacity>
