import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./SimpleHeader.scss";

export function SimpleHeader({ title }) {
	const styles = StyleSheet.create({
		headerBox1: {
			backgroundColor: "#131B24",
		},
		headerBox2: {
			height: 85,
			backgroundColor: "#EB5656",
			borderBottomWidth: 0,
			borderBottomEndRadius: 20,
			borderBottomStartRadius: 20,
			alignItems: "center",
			flexDirection: "row",
		},
		text: {
			fontSize: 16,
			width: "100%",
			textAlign: "center",
			color: "#fff",
		},
	});
	return (
		<View style={styles.headerBox1}>
			<View style={styles.headerBox2}>
				<Text style={styles.text}>{title}</Text>
			</View>
		</View>
	);
}
