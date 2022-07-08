/* eslint-disable @next/next/no-img-element */
import React from "react";
const color = ['#9147ff', '#FFD44D', '#FFc7c7', '#bed7f3', '#Fcc4cb', '#bdcfff', '#ffc65c', '#fab3ff', '#f9aaff', '#fc9cd9', '#dca8e0', '#c8a5ff', '#69bdf5', '#89bbd4', '#00c7ac', '#dc8888', '#b18ede']

const colors = color.map(colours => colours)
console.log(colors)


const Thumbnails = ({ img, profile_img, title, user, game }) => {
	return (
		<div className=" flex flex-col">
			<div className="stream " style={{ background: colors[3], }}>
				<div className="stream__thumbnail h-full">
					<img src={img} alt="" height="187px" width="320px" />
				</div>
			</div>
			<div className="flex pt-2">
				<div className="pr-2 pt-2">
					<img src={profile_img} alt="" className="rounded-full" height="40px" width="40px" />
				</div>
				<div className=" dark:text-white text-black">
					<p className="font-bold">{title}..</p>
					<p className="text-[#53535f] dark:text-white text-sm">{user}</p>
					<p className="text-[#53535f] dark:text-white text-sm">{game}</p>
				</div>
			</div>
		</div>
	);
};

export default Thumbnails;
