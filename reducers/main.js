import * as helper from "../helpers/helper";

const initialState = {
	status: null, // loading, success, error
	zombieName: "",
	zombiesData: [],
	selectorModalOpen: false,
	selectedZombie: {},
};

export default function mainReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_ZOMBIES_START":
		case "DELETE_ZOMBIE_START":
		case "UPDATE_ZOMBIE_START":
			return { ...state, status: "loading" };
		case "ADD_ZOMBIE_START":
			return { ...state, zombieName: action.payload, status: "loading" };
		case "GET_ZOMBIES_SUCCESS": {
			const newList = helper.formatFromFirebase(action.payload);
			return {
				...state,
				status: "success",
				zombiesData: helper.sortByCriteria(newList, "name"),
			};
		}
		case "GET_ZOMBIES_REJECT":
		case "ADD_ZOMBIE_REJECT":
		case "DELETE_ZOMBIE_REJECT":
			return {
				...state,
				status: "error",
			};
		case "ADD_ZOMBIE_SUCCESS":
			return {
				...state,
				zombieName: "",
			};
		case "CHANGE_SELECTOR_MODAL_OPEN":
			return {
				...state,
				selectorModalOpen: action.payload,
			};
		case "SELECT_ZOMBIE":
			return {
				...state,
				selectedZombie: action.payload,
			};
		default:
			return state;
	}
}
