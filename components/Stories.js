import React, { useState, useEffect } from "react";
import faker from "@faker-js/faker";
import StoryCard from "./StoryCard";

function Stories() {
	const [stories, setStories] = useState([]);

	useEffect(() => {
		const getStories = [...Array(5)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));
		setStories(getStories);

		console.log(profiles);
	}, []);
	return (
		<div>
			<div>
				{stories.map((story) => (
					<StoryCard
						key={story.id}
						username={story.username}
						img={story.avatar}
					/>
				))}
			</div>
		</div>
	);
}

export default Stories;
