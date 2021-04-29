import _ from "lodash";

// converting format for easier handling
export const formatFromFirebase = (list) => {
	const result = Object.keys(list).map((item) => {
		return {
			id: item,
			name: list[item].name,
			location: list[item].location,
		};
	});
	return result;
};

// helper to sort an array of objects by key (criteria)
export const sortByCriteria = (list, criteria) => {
	const result = _.sortBy(list, criteria);
	return result;
};

// helper to get zombies by location
export const getZombiesByLocation = (list, location) => {
	return list.filter((zombie) => zombie.location.toLowerCase() === location);
};

export const isLoading = (status) => Boolean(status === "loading");

export const hasError = (status) => Boolean(status === "error");
