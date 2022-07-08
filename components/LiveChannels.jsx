import React from "react";
import Thumbnails from "./Thumbnails";

import { UserData } from "../data/streamdata";
const LiveChannels = () => {
	// const Random = Math.floor(Math.random() * 16);

	return (
		<div id="live" className=" p-2 md:pt-8 ">
			<h2 className="text-[3rem] font-Roobert font-bold px-2">
				<span className="text-[#0e0e10] dark:text-white">Following</span>
			</h2>
			<div className="h-[40px] flex text-black dark:text-white  font-bold text-xl font-Roobert justify-start items-center shrink">
				<div className="flex items-center justify-center mx-2 hover:text-[#9147ff]">
					<h1 className=" border-b-4 border-[#9147ff]">
						Overview
					</h1>

				</div>
				<div className="hover:text-[#9147ff] mx-2">
					<h1>
						Live
					</h1>
				</div>
				<div className="hover:text-[#9147ff] flex items-center justify-center mx-4">
					<h1>
						Videos
					</h1>
				</div>
				<div className="hidden md:flexxl:flex hover:text-[#9147ff] items-center justify-center mx-4">
					<h1>
						Hosts
					</h1>
				</div>
				<div className="hidden xl:flex items-center justify-center hover:text-[#9147ff] mx-4">
					<h1>
						Categories
					</h1>
				</div>
				<div className="hidden hover:text-[#9147ff] xl:flex items-center justify-center mx-4">
					<h1>
						Channels
					</h1>
				</div>
			</div>
			{/* container */}
			<div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 3xl:grid-cols-5 gap-3 py-2">
				{UserData.slice(0, 17).map((userdata, index) => {
					return (
						<Thumbnails
							key={index}
							img={userdata.offline_image_url}
							profile_img={userdata.profile_image_url}
							title={userdata.title.substring(0, 20)}
							game={userdata.game_name}
							user={userdata.login}
						/>

					)
				}
				)}
			</div>
		</div>
	);
};

export default LiveChannels;
