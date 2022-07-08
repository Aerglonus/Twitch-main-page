/* eslint-disable react/no-unescaped-entities */
import { Redirect } from "next/dist/server/api-utils";
import { LogoIcon } from "./items";
import React, { useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { SiTwitch } from "react-icons/si";
import { useSession, signIn, signOut } from "next-auth/react";
export const UserProfile = () => {
	const [showModal, setShowModal] = React.useState(false);
	const modalRef = useRef();
	const CloseModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};
	const keypress = useCallback(
		(e) => {
			if (e.key === "Escape" && showModal) {
				setShowModal(false);
			}
		},
		[setShowModal, showModal],
	);

	useEffect(() => {
		document.addEventListener("keydown", keypress);
		return () => document.removeEventListener("keydown", keypress);
	}, [keypress]);

	return (
		<>
			<button
				className="hover:transition-colors hover:duration-500 transition-all duration-200 ease-in-out hover:ease-in-out h-[28px] w-[28px]  rounded bg-[#f2f2f2] hover:bg-[#e5e5e5] dark:bg-[#333336] dark:hover:bg-[#464649] text-black dark:text-white text-sm  font-Roobert"
				type="button"
				onClick={() => setShowModal(true)}>
				<svg
					width="28px"
					height="18px"
					version="1.1"
					viewBox="0 0 20 20"
					x="0px"
					y="0px"
					className="fill-dark dark:fill-white">
					<g>
						<path
							fillRule="evenodd"
							d="M5 7a5 5 0 116.192 4.857A2 2 0 0013 13h1a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-1a3.99 3.99 0 01-3-1.354A3.99 3.99 0 017 15H6a1 1 0 00-1 1v2H3v-2a3 3 0 013-3h1a2 2 0 001.808-1.143A5.002 5.002 0 015 7zm5 3a3 3 0 110-6 3 3 0 010 6z"
							clipRule="evenodd"></path>
					</g>
				</svg>
			</button>
			{showModal ? (
				<>
					<div
						ref={modalRef}
						onClick={CloseModal}
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
						<div className="relative w-[400px] my-6 mx-auto max-w-3xl flex flex-row">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#f2f2f2] text-[#18181b] dark:text-[#f2f2f2] dark:bg-[#18181b] outline-none focus:outline-none p-[12px] divide-y-[2px] divide-y-reverse divide-slate-400/[.24] ">
								{/*header*/}
								<div className="flex items-center justify-center p-5   rounded-t">
									<LogoIcon className="mr-2   fill-purple-600" size={30} />
									<h2 className="font-bold text-2xl"> Log in to Twitch</h2>
								</div>
								{/*body*/}
								<div className="flex  flex-row space-x-4 ">
									<div className="flex flex-col">
										<p>Log in</p>
										<div className=" bg-purple-600 h-[2px] z-10"></div>
									</div>
									<p>Sign Up</p>
								</div>
								<div className="relative  flex-col flex items-start justify-start    ">
									<p className="mt-4 text-black dark:text-white text-sm leading-relaxed">
										Username
									</p>
									<div className=" flex items-center shrink basis-auto w-[92%] h-[40px] ">
										<input
											type="search"
											placeholder="Username"
											className="w-[100%] h-[30px] px-4 text-sm placeholder-[#c5c5c6] ring-2 bg-[#e5e5e5] dark:bg-[#333336]  dark:focus:hover:ring-[#a870fe] rounded-md  
											focus:hover:ring-[#a870fe] focus:outline-none focus:ring-[#a970ff]
											dark:hover:ring-[#464649] 
											hover:transition-all
											hover:duration-500
											hover:ease-in-out
											ring-transparent
											focus:bg-[#f2f2f2] dark:focus:bg-[#000000]  hover:ring-[#ccc]"
										/>
									</div>
									<p className="mt-4 mb-2 text-black dark:text-white text-sm leading-relaxed">
										Password
									</p>
									<div className=" flex items-center shrink basis-auto w-[92%] h-[40px] pb-4 ">
										<input
											type="password"
											placeholder="Password"
											className="w-[100%] h-[30px] px-4 text-sm placeholder-[#c5c5c6] ring-2 bg-[#e5e5e5] dark:bg-[#333336]  dark:focus:hover:ring-[#a870fe] rounded-md  
											focus:hover:ring-[#a870fe] focus:outline-none focus:ring-[#a970ff]
											dark:hover:ring-[#464649] 
											hover:transition-all
											hover:duration-500
											hover:ease-in-out
											
											ring-transparent
											focus:bg-[#f2f2f2] dark:focus:bg-[#000000]  hover:ring-[#ccc]"
										/>
									</div>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-center p-6 border-none rounded-b">
									{/* <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button> */}
									<button
										className="hover:transition-colors hover:duration-500  hover:ease-in-out bg-[#9147ff] w-full hover:bg-[#772ce8] text-white active:bg-[#9147ff] font-bold uppercase text-sm  py-[5px] rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() =>
											signIn("twitch", {
												callbackUrl: "http://localhost:3005/",
											})
										}>
										Log In
									</button>
								</div>
							</div>
							<div className="pl-[5px] ">
								<button
									onClick={() => setShowModal(false)}
									className="bg-transparent hover:bg-[#464649] rounded">
									<IoClose size={25} />
								</button>
							</div>
						</div>
					</div>
					<div className="opacity-50 fixed inset-0  z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};
export default UserProfile;
