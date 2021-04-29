import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, TextInput } from "react-native";
import { Button, Icon } from "react-native-elements";
import * as actions from "../actions/actions";
import styles from "./AddZombie.scss";

export function AddZombie() {
	const dispatch = useDispatch();
	const { zombieName } = useSelector((state) => state.mainReducer);

	const [name, setName] = useState(zombieName);

	useEffect(() => {
		setName(zombieName);
	}, [zombieName]);

	const addZombie = () => {
		name.trim().length > 0 && dispatch(actions.addZombie(name.trim()));
	};

	return (
		<View style={styles.addBox}>
			<Text style={styles.titleText}>Add Zombie</Text>
			<View style={styles.addBoxInner}>
				<TextInput
					style={styles.input}
					onChangeText={(text) => setName(text)}
					value={name}
					placeholder={"Zombie's name"}
					maxLength={50}
					placeholderTextColor={"#c1c1c1"}
					onSubmitEditing={addZombie}
				/>
				<Button
					icon={<Icon name="add" size={20} color="white" />}
					title="Add Zombie"
					type="solid"
					buttonStyle={styles.button}
					titleStyle={styles.buttonTitle}
					onPress={addZombie}
					disabled={name.trim().length === 0}
				/>
			</View>
		</View>
	);
}
