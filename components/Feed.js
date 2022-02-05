import React, { useState, useEffect } from "react";
import Stories from "./Stories";
import faker from "@faker-js/faker";

function Feed() {
	const [profiles, setProfiles] = useState([]);

	useEffect(() => {
		const getProfiles = [...Array(5)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));
		setProfiles(getProfiles);

		console.log(profiles)
	}, []);

	return (
		<div>
			<div>
				{profiles.map((profile) => (
					<Stories
						key={profile.id}
						username={profile.username}
						img={profile.avatar}
					/>
				))}
			</div>
		</div>
	);
}

export default Feed;
