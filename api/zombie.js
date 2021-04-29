import axios from "axios";

const serverAddress =
	"https://zombie-manager-4d109-default-rtdb.firebaseio.com/";

export async function getZombies() {
	try {
		const response = await axios.get(`${serverAddress}zombies.json`, {
			headers: { "Content-Type": "application/json" },
			timeout: 35000,
		});
		return response.data;
	} catch (e) {
		console.log("error in getZombies");
		return null;
	}
}

export async function addZombie(name) {
	try {
		const response = await axios.post(
			`${serverAddress}zombies.json`,
			{
				location: "",
				name: name,
			},
			{ headers: { "Content-Type": "application/json" }, timeout: 35000 }
		);
		return response.data;
	} catch (e) {
		console.log("error in addZombie");
		return null;
	}
}

export async function updateZombie(key, zombie) {
	try {
		const response = await axios.put(
			`${serverAddress}zombies/${key}.json`,
			zombie,
			{
				headers: { "Content-Type": "application/json" },
				timeout: 35000,
			}
		);
		return response.data;
	} catch (e) {
		console.log("error in updateZombie");
		return null;
	}
}

export async function deleteZombie(key) {
	try {
		return axios.delete(`${serverAddress}zombies/${key}.json`);
	} catch (e) {
		console.log("error in deleteZombie");
		return null;
	}
}
