import Head from "next/head";
import Header from "../components/Header";
import { useSession, getSession } from "next-auth/react";
import Login from "../components/Login";
import Sidebar from '../components/Sidebar'
import {userDetails} from '../constants'

export async function getServerSideProps(context) {
	return {
		props: {
			session: await getSession(context),
		},
	};
}

export default function Home({ session }) {
	// const { data: session } = useSession();
	
	if (!userDetails) return <Login />;
	return (
		<div className="h-screen bg-gray-100 overflow-hidden">
			<Head>
				<title>Facebook</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="flex">
				<Sidebar />
			</main>
		</div>
	);
}
