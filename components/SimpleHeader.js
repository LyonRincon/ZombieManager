import React from "react";
import { View, Text } from "react-native";
import styles from "./SimpleHeader.scss";

export function SimpleHeader({ title }) {
	return (
		<View style={styles.headerBox1}>
			<View style={styles.headerBox2}>
				<Text style={styles.text}>{title}</Text>
			</View>
		</View>
	);
}
