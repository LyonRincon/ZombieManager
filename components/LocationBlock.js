import React from "react";
import { View, Text } from "react-native";
import { ZombieList } from "./ZombieList";
import { Icon } from "react-native-elements";
import * as helper from "../helpers/helper";
import styles from "./LocationBlock.scss";
import * as actions from "../actions/actions";

export function LocationBlock({ location, list }) {
	const locationZombies = helper.getZombiesByLocation(list, location.id);
	return (
		<View style={styles.blockContainer}>
			<View style={styles.blockTitleBlock}>
				<Icon
					containerStyle={styles.blockIcon}
					name={location.iconName}
					size={25}
					color="#131C24"
					type={location.iconType ?? ""}
				/>
				<Text style={styles.blockTitle}>{location.displayName}</Text>
			</View>
			<ZombieList
				list={locationZombies}
				zombieAction={actions.selectZombie}
				actionType="edit"
				actionIcon={<Icon name="edit" size={25} color="#EB5656" />}
				hideLocation
			/>
		</View>
	);
}
