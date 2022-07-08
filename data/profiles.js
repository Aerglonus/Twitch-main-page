import React from "react";
import { UserData } from "../data/streamdata";
import Image from "next/image";
const UserProfiles = () => {
	return (
		<div className="fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-[#efeff1]">
			{UserData.slice(0, 17).map((avatars, index) => {
				return (
					<div
						key={index}
						className="inline-flex items-center justify-center w-full py-[5px] px-auto ">
						<div>
							<Image
								src={avatars.profile_image_url}
								width="50"
								height="50"
								alt={avatars.login}
								className="rounded-full"
							/>
						</div>
						<div className="hidden leading-5 xl:flex justify-between w-full ml-[10px]">
							<div>
								<p className="text-[#0e0e10] font-Roobert font-medium">
									{avatars.display_name}
								</p>
								<p className="text-[#53535f] tracking-wide font-RoobertThi font-medium">
									{avatars.game_name}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default UserProfiles;
