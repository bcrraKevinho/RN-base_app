import React from "react";
import { StyleSheet, Linking, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function Navigation(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="Screen1">
      <Tab.Screen
        name="Screen1Nav"
        component={Screen1}
        options={{
          tabBarLabel: "Screen1",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen2Nav"
        component={Screen2}
        options={{
          tabBarLabel: "Screen2",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen3Nav"
        component={Screen3}
        options={{
          tabBarLabel: "Screen3",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          title: "Home",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen name="Screen1" component={Screen1} />
      <Drawer.Screen name="Screen2" component={Screen2} />
      <Drawer.Screen name="Screen3" component={Screen3} />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      <View>
        <DrawerItemList {...props} />
      </View>
      <View>
        <DrawerItem
          label="Notificaciones"
          icon={({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          )}
          onPress={() => console.log("Notificaciones")}
        />
        <DrawerItem
          label="Configuración"
          icon={({ color }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={color}
              size={26}
            />
          )}
          onPress={() => console.log("Cerrar sesión")}
        />
        <DrawerItem
          label="Cerrar sesión"
          icon={({ color }) => (
            <MaterialCommunityIcons name="logout" color={color} size={26} />
          )}
          style={{}}
          onPress={() => console.log("Cerrar sesión")}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
