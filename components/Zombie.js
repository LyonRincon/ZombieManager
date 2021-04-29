import React from "react";
import {
	View,
	Text,
	Image,
	ActivityIndicator,
	TouchableOpacity,
} from "react-native";
import styles from "./Zombie.scss";
import { useDispatch } from "react-redux";

export function Zombie({
	zombie,
	zombieAction,
	actionType,
	actionIcon,
	hideLocation,
}) {
	const { id, name, location } = zombie;
	const dispatch = useDispatch();
	return (
		<View style={styles.zombieItem}>
			<Image
				source={require("../assets/zombieIcon.png")}
				style={styles.zombieIcon}
				PlaceholderContent={<ActivityIndicator />}
			/>
			<View style={styles.zombieNameBox}>
				{name?.length > 0 && (
					<Text style={styles.zombieName}>{name}</Text>
				)}
				{!hideLocation && location?.length > 0 && (
					<Text style={styles.zombieLocation}>{location}</Text>
				)}
			</View>
			<TouchableOpacity
				onPress={() =>
					dispatch(
						zombieAction(
							actionType === "delete"
								? id
								: { id, name, location }
						)
					)
				}
			>
				{actionIcon}
			</TouchableOpacity>
		</View>
	);
}
