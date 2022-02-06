import Image from "next/image";
import React from "react";
import { userDetails } from "../constants";

function InputBox() {
	return (
		<div className="bg-white-500 border mt-5">
			<Image
				src={userDetails.img}
				alt=""
				width={30}
				height={30}
				objectFit="contain"
			/>
			<form>
				<input
					type="text"
					placeholder="What's on your mind Fadeel Gbaiye?"
				/>
			</form>
      <button type='submit' hidden>Post</button>
		</div>
	);
}

export default InputBox;
