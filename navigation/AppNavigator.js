import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import { Management, Selection } from "../screens";

function MainNavigator() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => getTabBarIcon(route, color),
			})}
			tabBarOptions={getTabBarOptions()}
		>
			<Tab.Screen name="Selection" component={Selection} />
			<Tab.Screen name="Management" component={Management} />
		</Tab.Navigator>
	);
}

const getTabBarIcon = (navigation, tintColor) => {
	const routeName = navigation.name;
	let iconName;
	switch (routeName) {
		case "Selection":
			iconName = `prescription`;
			break;
		default:
			iconName = `dizzy`;
			break;
	}
	return (
		<Icon name={iconName} size={25} color={tintColor} type={"fontisto"} />
	);
};

const getTabBarOptions = () => {
	return {
		activeTintColor: "#EB5656",
		inactiveTintColor: "#B2B8BE",
		showLabel: false,
		style: {
			backgroundColor: "#253546",
			height: 70,
			borderTopStartRadius: 20,
			borderTopEndRadius: 20,
			overflow: "hidden",
			borderTopWidth: 0.5,
		},
	};
};

const myTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: "#131C24",
		border: "#131B24",
	},
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function AppNavigator() {
	return (
		<NavigationContainer theme={myTheme}>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="App" component={MainNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
