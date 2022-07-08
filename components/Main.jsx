import React from "react";
import LiveChannels from "./LiveChannels";

const Main = () => {
	return (
		<div className="inherit max-h-fit">
			<div className="flex pb-[20px] min-h-full overflow-x-hidden overflow-y-scroll">
				<div className="relative w-full">
					<div className="xl:mx-[1rem] md:mx-[1rem] mx-[2rem] align-baseline ">
						<div className="my-0 mx-auto max-w-[200rem] align-baseline">
							<div className="xl:mx-[1rem] mx-1">
								<LiveChannels />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
