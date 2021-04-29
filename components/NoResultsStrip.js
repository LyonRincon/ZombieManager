import React from "react";
import { Text } from "react-native";
import styles from "./NoResultsStrip.scss";

export function NoResultsStrip({ legend, extraStyle }) {
	return <Text style={[styles.emptyText, extraStyle]}>{legend}</Text>;
}
