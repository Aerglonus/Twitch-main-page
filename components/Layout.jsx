import React from "react";
import Main from "./Main";
import SideMenu from "./SideMenu";
import Navbar from "../components/Navbar";
import LiveChannels from "./LiveChannels";
import SideBar from "./SideBar";

const Layout = () => {
	return (
		<div className="flex flex-col flex-nowrap relative  h-full ">
			<div className="w-full h-[50px] z-10">
				<Navbar />
			</div>
			<div className="flex  flex-row relative  h-screen">
				<SideBar />
				<Main />
			</div>
		</div>
	);
};

export default Layout;
