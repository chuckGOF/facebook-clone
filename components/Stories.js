import React, { useState, useEffect } from "react";
import faker from "@faker-js/faker";
import StoryCard from "./StoryCard";

const storries = [
	{
		name: "Fadeel Gbaiye",
		src: "https://links.papareact.com/zof",
		profile: "https://links.papareact.com/l4v",
	},
	{
		name: "Elon Musk",
		src: "https://links.papareact.com/4zn",
		profile: "https://links.papareact.com/kxk",
	},
	{
		name: "Jeff Bezos",
		src: "https://links.papareact.com/k2j",
		profile: "https://links.papareact.com/f0p",
	},
	{
		name: "Mark Zuckerberg",
		src: "https://links.papareact.com/xql",
		profile: "https://links.papareact.com/snf",
	},
	{
		name: "Bill Gates",
		src: "https://links.papareact.com/4u4",
		profile: "https://links.papareact.com/Zvy",
	},
];
function Stories() {
	const [stories, setStories] = useState([]);

	useEffect(() => {
		const getStories = [...Array(5)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));
		setStories(getStories);
	}, []);
	return (
		<div>
			<div className="flex justify-center space-x-3 mx-auto">
				{storries.map((story, i) => (
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
