import React from "react";
import UserData from "../../data/JSON/users_images.json";
import Games from "../../data/JSON/streamersdata.json";
import Image from "next/image";
const StreamerAvatar = () => {
	return (
		<div>
			{UserData.map((avatars) => {
				return (
					<div key={avatars} className="inline-flex items-center w-full py-[2px]">
						<div>
							<Image
								src={avatars.profile_image_url}
								width="40"
								height="40"
								alt={avatars.login}
								className="rounded-full"
							/>
						</div>
						<div></div>
					</div>
				);
			})}
		</div>
	);
};
const StreamerGame = () => {
	return (
		<div className="inline-flex items-center w-full py-[2px]">
			{Games.map((avatars) => {
				return (
					<div key={avatars}>
						<p>{Games.game_name}</p>
					</div>
				);
			})}
		</div>
	);
};

export { StreamerAvatar, StreamerGame };
