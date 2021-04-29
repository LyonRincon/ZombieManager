import React from "react";
import { Zombie } from "./Zombie";
import { NoResultsStrip } from "./NoResultsStrip";

export function ZombieList({
	list,
	zombieAction,
	actionType,
	actionIcon,
	emptyLabel = "Zombie free zone",
	hideLocation,
}) {
	const haveZombies = list && list.length > 0;
	return (
		<>
			{haveZombies &&
				list.map((zombie, index) => {
					return (
						<Zombie
							zombie={zombie}
							key={`zl${index}`}
							zombieAction={zombieAction}
							actionType={actionType}
							actionIcon={actionIcon}
							hideLocation={hideLocation}
						/>
					);
				})}
			{!haveZombies && <NoResultsStrip legend={emptyLabel} />}
		</>
	);
}
