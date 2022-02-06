import Image from "next/image";
import React, { useRef } from "react";
import { userDetails } from "../constants";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function InputBox() {
	const inputRef = useRef(null);

	// function to handle post
	const sendPost = async (e) => {
		e.preventDefault();
		if (!inputRef.current.value) return;

		const addPost = await addDoc(collection(db, "posts"), {
			post: inputRef.current.value,
			username: userDetails.username,
			imageUrl: userDetails.img,
			timestamp: serverTimestamp(),
		});
	};

	return (
		<div className="bg-white p-2 mt-6 rounded-2xl shadow-md text-gray-500 font-medium">
			<div className="flex items-center p-4 space-x-4">
				<Image
					className="rounded-full cursor-pointer"
					src={userDetails.img}
					alt=""
					width={40}
					height={40}
					layout="fixed"
					// objectFit="contain"
				/>
				<form className="flex flex-1">
					<input
						ref={inputRef}
						className="rounded-full h-12 bg-gray-100 px-5 flex-grow focus:outline-none"
						type="text"
						placeholder={`What's on your mind ${userDetails.username}?`}
					/>
					<button hidden onClick={sendPost} type="submit">
						Submit
					</button>
				</form>
			</div>

			<div className="flex justify-evenly p-3 border-t">
				<div className="inputIcon">
					<VideoCameraIcon className="h-7 text-red-500" />
					<p className="text-xs sm:text-sm xl:text-base">
						Live Video
					</p>
				</div>

				<div className="inputIcon">
					<CameraIcon className="h-7 text-green-400" />
					<p className="text-xs sm:text-sm xl:text-base">
						Photo/Video
					</p>
				</div>

				<div className="inputIcon">
					<EmojiHappyIcon className="h-7 text-yellow-300" />
					<p className="text-xs sm:text-sm xl:text-base">
						Feeling/Activity
					</p>
				</div>
			</div>
		</div>
	);
}

export default InputBox;
