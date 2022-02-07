import Image from "next/image";
import React from "react";

function Contact({ name, src }) {
	return (
		<div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
			<Image
				className="rounded-full"
				src={src}
				alt=""
				width={50}
				height={50}
				layout="fixed"
				objectFit="cover"
			/>
            <p>{name}</p>
            <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full"></div>
		</div>
	);
}

export default Contact;
