/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import faker from "@faker-js/faker";
// import { contacts } from "../constants";
import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

function Widgets() {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		const getContacts = [...Array(8)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));

		setContacts(getContacts);
	}, []);

	return (
		<div className="hidden lg:flex flex-col w-60 p-2 mt-5">
			<div className="flex justify-between items-center text-gray-500 mb-5">
				<h2 className="text-xl">Contacts</h2>
				<div className="flex space-x-2">
					<VideoCameraIcon className="h-6" />
					<SearchIcon className="h-6" />
					<DotsHorizontalIcon className="h-6" />
				</div>
			</div>

			{contacts?.map((contact) => (
				<Contact
					key={contact.id}
					src={contact.avatar}
					name={contact.name}
				/>
			))}
		</div>
	);
}

export default Widgets;
