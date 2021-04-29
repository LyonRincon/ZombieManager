import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	View,
	Text,
	SafeAreaView,
	RefreshControl,
	ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import {
	SimpleHeader,
	LoadingWithLabel,
	Zombie,
	AddZombie,
	ZombieList,
} from "../../components";
import styles from "./Management.scss";
import * as actions from "../../actions/actions";
import * as helper from "../../helpers/helper";

export function Management() {
	const dispatch = useDispatch();
	const { zombiesData, status } = useSelector((state) => state.mainReducer);
	const [refreshing, setRefreshing] = useState(false);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		dispatch(actions.getZombies());
	};

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		fetchData();
		setRefreshing(false);
	}, [refreshing]);

	const loading = helper.isLoading(status);
	const error = helper.hasError(status);
	const haveZombies = zombiesData && zombiesData.length > 0;

	return (
		<SafeAreaView style={styles.mainContainer}>
			<SimpleHeader title={"Zombie Guild"} />
			{loading && !error && (
				<LoadingWithLabel
					label="Loading zombies"
					boxStyle={styles.loadingBox}
					loaderBoxStyle={styles.loadingIcon}
				/>
			)}
			{!loading && !error && (
				<ScrollView
					style={styles.innerContainer}
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							onRefresh={onRefresh}
							tintColor={"#b2b8be"}
						/>
					}
				>
					<AddZombie />
					<View style={styles.listBox}>
						<Text style={styles.titleText}>Zombie Roster</Text>
						<ZombieList
							list={zombiesData}
							zombieAction={actions.deleteZombie}
							actionType="delete"
							actionIcon={
								<Icon name="delete" size={25} color="#EB5656" />
							}
							emptyLabel="The world is zombie free!"
						/>
					</View>
				</ScrollView>
			)}
		</SafeAreaView>
	);
}
