import logo from "../public/assets/logo.png";
import Link from "next/link";
import React, { Fragment, forwardRef } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSession, signIn, signOut } from "next-auth/react";
import {
	Icon,
	LogOut,
	Notification,
	Inbox,
	LogoIcon,
	FollowingSm,
	Browse,
	Button,
	MyToggle,
	SearchBar,
	Followtext,
} from "./imports/items";
import { Modal } from "./imports/modal";
import { UserProfile } from "./imports/userprofilemodal";
import { LeftMenu, RightMenu } from "./imports/buttons";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
	const [showModal, setShowModal] = React.useState(false);
	const { data: session } = useSession();

	return (
		<>
			<div className=" transition-all duration-200 ease-in-out fixed h-[50px] w-full shadow-sm flex justify-between items-center bg-white dark:bg-[#18181b] mb-[2px]   ">
				{/* Left side */}
				<div className="flex justify-start items-center xl:w-[384px] md:w-auto sm:w-auto  h-[50px] shrink-[1] ">
					<div className="flex h-[50px] w-[50px] items-center justify-center shrink-0">
						<Link href="/">
							<a>
								<LogoIcon />
							</a>
						</Link>
					</div>
					<Followtext />
					<div className="px-[20px]  text-xl font-bold h-full tracking-wide  flex items-center">
						<p className="hidden md:flex text-black dark:text-white ">Browse</p>
						<Browse className="visible md:hidden" />
					</div>
					<div className="hidden xs:flex px-[10px] justify-center items-center h-[50px] ">
						<LeftMenu />
					</div>
				</div>
				{/* Middle side */}
				<div className=" hidden xs:flex  basis-auto items-center justify-end w-[470px] mx-[20px] h-[46px] shrink-[2] ">
					<SearchBar />
				</div>
				{/* Right side */}
				<div className=" xl:w-[384px] md:w-auto sm:w-auto xs:w-auto flex basis-auto  justify-end w-[384px] mr-[10px] items-center h-full space-x-3  ">
					<div className=" hover:bg-[#f2f2f2] dark:hover:bg-[#464649] h-[30px]  w-[30px] flex justify-center items-center rounded ">
						<Link href="/">
							<a className="flex">
								<svg
									width={20}
									height={20}
									version="1.1"
									viewBox="0 0 20 20"
									x="0px"
									y="0px"
									className="fill-black dark:fill-white">
									<g>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M13.798 10.456L10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"
										/>
									</g>
								</svg>
							</a>
						</Link>
					</div>

					<>
						{session ? (
							<div className="">
								<button className=" flex items-center justify-center  h-[30px] w-[30px] text-white fill-black dark:fill-white rounded  dark:hover:bg-[#464649]  hover:bg-[#e5e5e5] text-sm  font-Roobert">
									<Notification className=" text-white" aria-hidden="true" />
								</button>
							</div>
						) : (
							<div className="mr-2 h-[30px] w-[58.13px]  rounded bg-[#f2f2f2] hover:bg-[#e5e5e5] dark:bg-[#333336] dark:hover:bg-[#464649] text-sm  font-Roobert">
								<Modal showModal={showModal} setShowModal={setShowModal} />
							</div>
						)}
					</>
					<>
						{session ? (
							<div className="">
								<button className=" flex items-center justify-center  h-[30px] w-[30px] text-white dark:fill-white  rounded hover:bg-[#e5e5e5]  dark:hover:bg-[#464649]  text-sm  font-Roobert">
									<Inbox className=" text-black dark:text-white" aria-hidden="true" />
								</button>
							</div>
						) : (
							<div className="ml-2 h-[30px] hover:transition-colors hover:duration-500 transition-all duration-200 ease-in-out hover:ease-in-out  w-[65.5px] flex justify-center items-center rounded bg-[#9147ff] hover:bg-[#772ce8] mr-[5px]">
								<Button />
							</div>
						)}
					</>
					{/* Log in Icon/Profile Picture */}
					<div className=" mr-4   h-[30px] w-[30px] flex justify-center items-center rounded ">
						<RightMenu />
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
