import {
	getZombies as getZombiesApi,
	addZombie as addZombieApi,
	updateZombie as updateZombieApi,
	deleteZombie as deleteZombieApi,
} from "../api/zombie";

export const getZombies = () => (dispatch) => {
	dispatch({ type: "GET_ZOMBIES_START" });
	getZombiesApi()
		.then((res) => {
			dispatch({ type: "GET_ZOMBIES_SUCCESS", payload: res || {} });
		})
		.catch(() =>
			dispatch({
				type: "GET_ZOMBIES_REJECT",
			})
		);
};

export const addZombie = (name) => (dispatch) => {
	dispatch({ type: "ADD_ZOMBIE_START", payload: name });
	addZombieApi(name)
		.then(() => {
			dispatch({ type: "ADD_ZOMBIE_SUCCESS" });
			dispatch(getZombies());
		})
		.catch(() =>
			dispatch({
				type: "ADD_ZOMBIE_REJECT",
			})
		);
};

export const updateZombie = (key, zombie) => (dispatch) => {
	dispatch({ type: "UPDATE_ZOMBIE_START" });
	updateZombieApi(key, zombie)
		.then(() => {
			dispatch(getZombies());
			dispatch(openSelectorModal(false));
		})
		.catch(() =>
			dispatch({
				type: "UPDATE_ZOMBIE_REJECT",
			})
		);
};

export const deleteZombie = (key) => (dispatch) => {
	dispatch({ type: "DELETE_ZOMBIE_START" });
	deleteZombieApi(key)
		.then(() => {
			dispatch(getZombies());
		})
		.catch(() =>
			dispatch({
				type: "DELETE_ZOMBIE_REJECT",
			})
		);
};

export const openSelectorModal = (open) => (dispatch) => {
	dispatch({ type: "CHANGE_SELECTOR_MODAL_OPEN", payload: open });
};

export const selectZombie = (zombie) => (dispatch) => {
	dispatch({ type: "SELECT_ZOMBIE", payload: zombie });
	dispatch(openSelectorModal(true));
};
