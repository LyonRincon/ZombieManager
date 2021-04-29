import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./LoadingWithLabel.scss";

export function LoadingWithLabel({
	label,
	boxStyle,
	textStyle,
	loaderBoxStyle,
}) {
	return (
		<View style={[styles.box, boxStyle]}>
			<Text style={[styles.text, textStyle]}>{label}</Text>
			<View style={[styles.loader, loaderBoxStyle]}>
				<ActivityIndicator size="large" color="#b2b8be" animating />
			</View>
		</View>
	);
}
