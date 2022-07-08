import clientPromise from "../lib/mongodb";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import { HiLogout, HiLogin } from "react-icons/hi";
import SideBar from "../components/SideBar";
import Image from "next/image";
import side from "./db2"
import UserSide from "./db2";
export default function Home() {
  return (
		<div className="flex flex-col flex-nowrap relative  h-full ">
			<div className="w-full h-[50px] z-10">
				<Navbar />
			</div>
    <div className="flex  flex-row relative  h-screen">
     
				<Main />
			</div>
		</div>
  );
}









export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("nextjs-mongodb-atlas-demo");

  let users = await db.collection("posts").find({}).toArray();
  users = JSON.parse(JSON.stringify(users));

  return {
    props: { users },
  };
}