import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { query, collection, orderBy, getDocs } from "firebase/firestore";
import Post from "./Post";
// import { useCollection } from "react-firebase-hooks/firestore";

function Posts({ p }) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const queryDoc = async () => {
			const postQuery = query(
				collection(db, "posts"),
				orderBy("timestamp", "desc")
			);

			const querySnapshot = await getDocs(postQuery);
			querySnapshot.forEach((snap) => {
				// console.log(snap.data())
				let postData = {
					id: snap.id,
					...snap.data(),
				};

				setPosts((prevState) => [...prevState, postData]);
			});
		};
		queryDoc();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// const [snapshot, loading, error] = useCollection(
	// 	query(collection(db, "posts"), orderBy("timestamp", "desc"))
	// );

	return (
		<div>
			{posts
				? posts.map((post) => (
						<Post
							key={post.id}
							name={post.name}
							username={post.username}
							userImage={post.userImage}
							caption={post.post}
							postImage={post.postURL}
							timestamp={post.timestamp}
						/>
				))
				: p.map((post) => (
						<Post
							key={post.id}
							name={post.name}
							username={post.username}
							userImage={post.userImage}
							caption={post.post}
							postImage={post.postURL}
							timestamp={post.timestamp}
						/>
				))}
		</div>
	);
}

export default Posts;
