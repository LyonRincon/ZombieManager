import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { NoResultsStrip } from "./NoResultsStrip";
import styles from "./LocationSelectorModal.scss";
import { updateZombie } from "../actions/actions";
import { locations } from "../constants/locations";

export function LocationSelectorModal() {
	const dispatch = useDispatch();
	const { selectedZombie } = useSelector((state) => state.mainReducer);
	const haveLocations = locations && locations.length > 0;
	return (
		<>
			{haveLocations &&
				locations
					.filter((l) => l.id.length > 0)
					.map((location, index) => {
						const disabled =
							selectedZombie.location === location.id;
						return (
							<TouchableOpacity
								onPress={() =>
									disabled
										? {}
										: dispatch(
												updateZombie(
													selectedZombie.id,
													{
														name:
															selectedZombie.name,
														location: location.id,
													}
												)
										  )
								}
								key={`m${index}`}
								style={styles.container}
								disabled={disabled}
							>
								<Icon
									containerStyle={styles.blockIcon}
									name={location.iconName}
									size={50}
									color={disabled ? "#b2b8be" : "#131C24"}
									type={location.iconType ?? ""}
								/>
							</TouchableOpacity>
						);
					})}
			{!haveLocations && <NoResultsStrip legend={"No locations"} />}
		</>
	);
}
