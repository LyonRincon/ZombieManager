import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import AppNavigator from "./navigation/AppNavigator";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
	return (
		<Provider store={store}>
			<AppNavigator />
		</Provider>
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
