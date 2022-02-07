import React, { useState, useEffect } from "react";
import faker from "@faker-js/faker";
import StoryCard from "./StoryCard";
import { stories } from "../constants";

function Stories() {
	const [storries, setStorries] = useState([]);

	useEffect(() => {
		const getStories = [...Array(5)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));
		setStorries(getStories);
	}, []);

	return (
		<div>
			<div className="flex justify-center space-x-3 mx-auto">
				{stories.map((story, i) => (
					<StoryCard
						// key={story.id}
						key={i}
						name={story.name}
						src={story.src}
						profile={story.profile}
					/>
				))}
			</div>
		</div>
	);
}

export default Stories;
