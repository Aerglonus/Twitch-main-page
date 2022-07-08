import React from "react";
import ProfilesData from "../data/JSON/users_images.json";
import { UserData } from "../data/streamdata";
import { HiLogout, HiLogin } from "react-icons/hi";
import Image from "next/image";
// console.log(ProfilesData);
const SideMenu = () => {
	// const array = Object.keys(StreamerData);
	// console.log(array);
	return (
		<div className="transition-all duration-500 ease-in-out  w-14 sm:w-16 xl:w-[14rem] h-full shrink-0 p-2 fixed bg-[#efeff1] dark:bg-[#1f1f23] ">
			<div className="h-[40px] flex xl:justify-start items-center justify-center">
				<p className="hidden xl:flex uppercase  text-[#0e0e10] dark:text-white font-bold font-RoobertThin text-sm tracking-tight py-[10px]">
					Followed Channels
				</p>
				<p>
					<HiLogout
						size={20}
						className="xl:hidden justify-center w-full text-[#0e0e10] dark:text-white"
					/>
				</p>
			</div>
			{UserData.slice(0, 17).map((avatars, index) => {
				return (
					<div
						key={index}
						className="inline-flex items-center justify-center w-full  px-auto hover:bg-[#e6e6ea] dark:hover:bg-[#464649] hover:transition-all hover:duration-200 hover:ease-in-out cursor-pointer rounded-md">
						<div className="flex justify-center items-center">
							<Image
								src={avatars.profile_image_url}
								width="40"
								height="40"
								alt={avatars.login}
								className="rounded-full "
							/>
						</div>
						<div className="hidden py-[4px] xl:flex flex-nowrap justify-between w-full ml-[10px] mr-[4px] ">
							<div className="flex flex-col leading-5">
								<p className="text-[#0e0e10] dark:text-white  font-bold ">{avatars.display_name}</p>
								<p className="text-[#53535f] dark:text-[#ccc] text-sm  font-RoobertThin">{avatars.game_name} </p>
							</div>
							<div className="flex items-start justify-center">
								<div className="flex mt-[4px] mr-[3px] w-[8px] h-[8px] rounded-full bg-red-400"></div>
								<p className="text-[#53535f] dark:text-[#ccc] text-xs font-RoobertThin">
									{avatars.viewer_count}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default SideMenu;
