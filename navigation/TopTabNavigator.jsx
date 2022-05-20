import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import HomeScreen from "../components/HomeScreen"
import Watchlist from "../components/WatchList";

const Tab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false}}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Watchlist" component={Watchlist} />
        </Tab.Navigator>
    );
};
export default TopTabNavigator;