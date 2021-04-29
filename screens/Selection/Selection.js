import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import { Overlay } from "react-native-elements";
import {
	SimpleHeader,
	LoadingWithLabel,
	LocationBlock,
	LocationSelectorModal,
} from "../../components";
import styles from "./Selection.scss";
import * as actions from "../../actions/actions";
import * as constants from "../../constants/locations";
import * as helper from "../../helpers/helper";

export function Selection() {
	const dispatch = useDispatch();
	const { zombiesData, status, selectorModalOpen } = useSelector(
		(state) => state.mainReducer
	);
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

	return (
		<SafeAreaView style={styles.mainContainer}>
			<SimpleHeader title={"Zombie Management"} />
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
					<View style={styles.listBox}>
						{constants.locations?.length > 0 &&
							constants.locations.map((location, index) => {
								return (
									<LocationBlock
										location={location}
										list={zombiesData}
										key={`s${index}`}
									/>
								);
							})}
					</View>
					<Overlay
						isVisible={selectorModalOpen}
						onBackdropPress={() =>
							dispatch(actions.openSelectorModal(false))
						}
					>
						<LocationSelectorModal />
					</Overlay>
				</ScrollView>
			)}
		</SafeAreaView>
	);
}
