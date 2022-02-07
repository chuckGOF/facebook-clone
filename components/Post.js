/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import Moment from "react-moment";
import {
	DotsHorizontalIcon,
	ChatAltIcon,
	ShareIcon,
	ThumbUpIcon,
} from "@heroicons/react/outline";

function Post({ name, username, userImage, caption, postImage, timestamp }) {
	return (
		<div className="flex flex-col">
			<div className="bg-white mt-5 rounded-t-2xl shadow-sm p-5">
				<div className="flex items-center space-x-2">
					<Image
						className="rounded-full"
						src={userImage}
						alt=""
						width={40}
						height={40}
						objectFit="contain"
					/>
					<div className="flex-grow">
						<p className="font-medium">{name}</p>
						{timestamp ? (
							<p className="text-xs text-gray-400">
								{new Date(timestamp?.toDate()).toLocaleString()}
							</p>
						) : (
							<p className="text-xs text-gray-400">Loading...</p>
						)}
					</div>
					<div className="flex justify-end">
						<DotsHorizontalIcon className="h-7 w-7" />
					</div>
				</div>
				<p className="pt-4">{caption}</p>
			</div>
			{postImage && (
				<div className="relative h-56 md:h-96 bg-white">
					<Image
						src={postImage}
						alt=""
						layout="fill"
						objectFit="cover"
					/>
					<p className="p-2">
						<span className="font-bold">{username}</span> {caption}
					</p>
				</div>
			)}

			<div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
				<div className="inputIcon rounded-none rounded-bl-2xl">
					<ThumbUpIcon className="h-4" />
					<p className="text-xs sm:text-base">Like</p>
				</div>

				<div className="inputIcon rounded-none">
					<ChatAltIcon className="h-4" />
					<p className="text-xs sm:text-base">Comment</p>
				</div>

				<div className="inputIcon rounded-none rounded-br-2xl">
					<ShareIcon className="h-4" />
					<p className="text-xs sm:text-base">Share</p>
				</div>
			</div>
		</div>
	);
}

export default Post;
