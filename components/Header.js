/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import {
	SearchIcon,
	FlagIcon,
	PlayIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";
import {
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	HomeIcon,
	UserGroupIcon,
	ViewGridIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { useSession, signOut } from "next-auth/react";

function Header() {
	const {data: session} = useSession()
	return (
		<div className="flex sticky top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md">
			<div className="flex items-center">
				<Image
					src="https://links.papareact.com/5me"
					alt=""
					width={40}
					height={40}
					objectFit="contain"
				/>
				<div className="flex items-center bg-gray-100 p-2 border rounded-full ml-2">
					<SearchIcon className="h-6 text-gray-600" />
					<input
						className="hidden md:inline-flex flex-shrink ml-2 items-center bg-transparent placeholder-gray-500 outline-none"
						type="text"
						placeholder="Search Facebook"
					/>
				</div>
			</div>

			<div className="flex justify-center flex-grow">
				<div className="flex items-center space-x-6 md:space-x-2">
					<HeaderIcon Icon={HomeIcon} active />
					<HeaderIcon Icon={FlagIcon} />
					<HeaderIcon Icon={PlayIcon} />
					<HeaderIcon Icon={ShoppingCartIcon} />
					<HeaderIcon Icon={UserGroupIcon} />
				</div>
			</div>

			<div className="flex items-center sm:space-x-2 justify-end">
				<Image
					// className="rounded-full h-7 w-7"
					className="rounded-full cursor-pointer"
					src="https://windows10spotlight.com/wp-content/uploads/2018/10/0666a2eb7b483900e65de263a3c6ebc6-768x432.jpg"
					alt=""
					width={40}
					height={40}
					layout="fixed"
				/>

				<p className="font-semibold pr-3 whitespace-nowrap">
					Fadeel Gbaiye
				</p>

				<ViewGridIcon className="icon" />
				<ChatIcon className="icon" />
				<BellIcon className="icon" />
				<ChevronDownIcon className="icon" />
			</div>
		</div>
	);
}

export default Header;
