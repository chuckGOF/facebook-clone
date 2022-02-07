/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useRef, useState } from "react";
import { userDetails } from "../constants";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db, storage } from "../firebase";
import {
	addDoc,
	collection,
	doc,
	serverTimestamp,
	updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

function InputBox() {
	const inputRef = useRef(null);
	const filePickerRef = useRef(null);
	const [imageToPost, setImageToPost] = useState(null);

	// function to handle post
	const sendPost = async (e) => {
		e.preventDefault();
		if (!inputRef.current.value) return;

		const docRef = await addDoc(collection(db, "posts"), {
			post: inputRef.current.value,
			username: userDetails.username,
			name: userDetails.name,
			userImage: userDetails.img,
			timestamp: serverTimestamp(),
		});

		if (imageToPost) {
			const imageRef = ref(storage, `posts/${docRef.id}/image`);
			await uploadString(imageRef, imageToPost, "data_url").then(
				async (snapshot) => {
					const downloadURL = await getDownloadURL(imageRef);
					await updateDoc(doc(db, "posts", docRef.id), {
						postURL: downloadURL,
					});
				}
			);

			removeImage()
		}

		inputRef.current.value = "";
	};

	// function to attach image to post
	const addImageToPost = (e) => {
		e.preventDefault();

		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}

		reader.onload = (readerEvent) => {
			setImageToPost(readerEvent.target.result);
		};
	};

	// function to remove image if unselected
	const removeImage = () => {
		setImageToPost(null);
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

				{imageToPost && (
					<div
						onClick={removeImage}
						className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
					>
						<img
							className="h-10 object-contain"
							src={imageToPost}
							alt=""
						/>
						<p className="text-xs text-red-500 text-center">
							Remove
						</p>
					</div>
				)}
			</div>

			<div className="flex justify-evenly p-3 border-t">
				<div className="inputIcon">
					<VideoCameraIcon className="h-7 text-red-500" />
					<p className="text-xs sm:text-sm xl:text-base">
						Live Video
					</p>
				</div>

				<div
					onClick={() => filePickerRef.current.click()}
					className="inputIcon"
				>
					<CameraIcon className="h-7 text-green-400" />
					<p className="text-xs sm:text-sm xl:text-base">
						Photo/Video
					</p>
					<input
						ref={filePickerRef}
						onChange={addImageToPost}
						hidden
						type="file"
					/>
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
