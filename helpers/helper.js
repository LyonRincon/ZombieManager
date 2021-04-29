import _ from "lodash";

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

export const sortByCriteria = (list, criteria) => {
	const result = _.sortBy(list, criteria);
	return result;
};

export const getZombiesByLocation = (list, location) => {
	return list.filter((zombie) => zombie.location.toLowerCase() === location);
};

export const isLoading = (status) => Boolean(status === "loading");

export const hasError = (status) => Boolean(status === "error");
