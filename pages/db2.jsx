import { HiLogout, HiLogin } from "react-icons/hi";
import SideMenu from "../components/SideMenu";
import Image from "next/image";
import clientPromise from "../lib/mongodb";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
 function UserSide ({ users })   {
return (
		<div className="flex flex-col flex-nowrap relative  h-full ">
			<div className="w-full h-[50px] z-10">
				<Navbar />
			</div>
    <div className="flex  flex-row relative  h-screen">
     <div className="transition-all duration-500 ease-in-out  w-14 sm:w-16 xl:w-[17rem] h-full shrink-0  ">
  
           <SideMenu  />
        
		</div>
				<Main />
			</div>
		</div>
  );
}
export default UserSide;


  











export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("nextjs-mongodb-atlas-demo");

  let users = await db.collection("posts").find({}).toArray();
  users = JSON.parse(JSON.stringify(users));

  return {
    props: { users },
  };
}