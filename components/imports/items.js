import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Switch } from "@headlessui/react";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
function Icon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={20}
			height={20}
			viewBox="0 0 20 20"
			x="0px"
			y="0px"
			className=""
			{...props}>
			<path
				d="M4 10v.7c0 3 2.4 5.3 5.3 5.3h1.4a1.9 1.9 0 001.9-1.9v-.3a3 3 0 011-2.1l1.8-1.7c.4-.4.6-.9.6-1.4V8l1.6-1.6c.3.7.4 1.4.4 2.2a4 4 0 01-1.3 2.9L15 13.2a1 1 0 00-.3.6v.3a3.9 3.9 0 01-4 3.9H9.4c-4 0-7.3-3.3-7.3-7.3V10a8 8 0 018-8h1.4c2 0 3.7.8 5 2.2l-.4.3-2 2-2 1.6V9a3 3 0 01-3 3H6l.7-.7c.3-.3.5-.8.5-1.3a3 3 0 013-3h.7l1.6-2 .5-.5.2-.2c-.6-.2-1.1-.3-1.8-.3H10a6 6 0 00-6 6z"
				className="fill-black dark:fill-white"
			/>
		</svg>
	);
}
function LogOut(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={20}
			height={20}
			viewBox="0 0 20 20"
			x="0px"
			y="0px"
			className=""
			{...props}>
			<path
				className="fill-black dark:fill-white"
				d="M16 18h-4a2 2 0 01-2-2v-2h2v2h4V4h-4v2h-2V4a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2z"
			/>
			<path
				className="fill-black dark:fill-white"
				d="M7 5l1.5 1.5L6 9h8v2H6l2.5 2.5L7 15l-5-5 5-5z"
			/>
		</svg>
	);
}
function Notification(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={20}
			height={20}
			viewBox="0 0 20 20"
			x="0px"
			y="0px"
			className=""
			{...props}>
			<path
				d="M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 001 1h2a1 1 0 001-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0111 11H9a3.001 3.001 0 01-2.83-2H4v6h12V9z"
				clipRule="evenodd"
			/>
		</svg>
	);
}
function Inbox(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={20}
			height={20}
			viewBox="0 0 20 20"
			x="0px"
			y="0px"
			className=""
			{...props}>
			<path d="M7.828 13L10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2l-3 3z" />
		</svg>
	);
}
function LogoIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={40}
			height={40}
			overflow="visible"
			viewBox="0 0 40 40"
			x="0px"
			y="0px"
			className=""
			{...props}>
			<path
				className=""
				fill="#A970FF"
				d="M13 8L8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8z"></path>
			<path
				className="ScFace-sc-cdc1ai-4 dTDTur"
				fill="#FFF"
				d="M26 25L30 21 30 10 14 10 14 25 18 25 18 29 22 25z"></path>

			<path
				d="M20 14h2v6h-2v-6zm7 0v6h-2v-6h2z"
				className="ScBody-sc-cdc1ai-3 kswvAb"
				fill="#A970FF"></path>
		</svg>
	);
}
function Browse(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={20}
			height={20}
			overflow="visible"
			viewBox="0 0 20 20"
			x="0px"
			y="0px"
			className=""
			{...props}>
			<g>
				<path
					d="M5 2a2 2 0 00-2 2v8a2 2 0 002 2V4h8a2 2 0 00-2-2H5z"
					className="fill-black dark:fill-white"
				/>
				<path
					className="fill-black dark:fill-white"
					fillRule="evenodd"
					d="M7 8a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V8zm2 0h6v8H9V8z"
					clipRule="evenodd"
				/>
			</g>
		</svg>
	);
}
function FollowingSm(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={20}
			height={20}
			viewBox="0 0 20 20"
			x="0px"
			y="0px"
			className="ScSvg-sc-1j5mt50-1 jxWtmu"
			{...props}>
			<path
				fillRule="evenodd"
				d="M9.171 4.171A4 4 0 006.343 3H6a4 4 0 00-4 4v.343a4 4 0 001.172 2.829L10 17l6.828-6.828A4 4 0 0018 7.343V7a4 4 0 00-4-4h-.343a4 4 0 00-2.829 1.172L10 5l-.829-.829zm.829 10l5.414-5.414A2 2 0 0016 7.343V7a2 2 0 00-2-2h-.343a2 2 0 00-1.414.586L10 7.828 7.757 5.586A2 2 0 006.343 5H6a2 2 0 00-2 2v.343a2 2 0 00.586 1.414L10 14.172z"
				clipRule="evenodd"
				className="fill-black dark:fill-white"
			/>
		</svg>
	);
}

function Button() {
	const { theme, setTheme } = useTheme();
	return (
		<button
			// onClick={() => {
			// 	setTheme(theme === "dark" ? "light" : "dark");
			// }}
			className=" text-sm  font-Roobert">
			Sign Up
		</button>
	);
}
function MyToggle() {
	const { theme, setTheme } = useTheme();
	const [enabled, setEnabled] = useState(false);
	console.log(theme);
	useEffect(() => {
		setEnabled(JSON.parse(window.localStorage.getItem("enabled")));
	}, []);

	useEffect(() => {
		window.localStorage.setItem("enabled", enabled);
	}, [enabled]);

	return (
		<div className="flex flex-row items-center justify-center space-x-5">
			<div className="flex items-center justify-center">
				<Switch
					onClick={() => {
						setTheme(theme === "light" ? "dark" : "light");
					}}
					checked={enabled}
					onChange={setEnabled}
					className={`${
						enabled ? "bg-[#18181b]" : "bg-gray-200"
					} ring-2 ring-black dark:ring-[#a870fe] relative inline-flex h-[20px] w-[35px] items-center rounded-full transition-colors duration-200  ring-inset ease-in-out  border-transparent	 focus:outline-none `}>
					{({ checked }) => (
						<span
							className={`${
								checked ? "translate-x-[18px]" : "translate-x-1"
							} inline-block h-[12px] w-[12px] transform rounded-full dark:bg-[#a870fe] bg-black transition duration-200 ease-in-out`}
						/>
					)}
				</Switch>
			</div>
		</div>
	);
}
function MoonMode(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={20}
			height={20}
			viewBox="0 0 20 20"
			x="0px"
			y="0px"
			className=""
			{...props}>
			<path
				fillRule="evenodd"
				d="M8.614 2.134a8.001 8.001 0 001.388 15.879 8.003 8.003 0 007.884-6.635 6.947 6.947 0 01-2.884.62 7.004 7.004 0 01-6.388-9.864zM6.017 5.529a5.989 5.989 0 00-2.015 4.484c0 3.311 2.69 6 6 6a5.99 5.99 0 004.495-2.028 9.006 9.006 0 01-8.48-8.456z"
				clipRule="evenodd"
			/>
		</svg>
	);
}
function SearchBar() {
	return (
		<div className=" w-full grow-[2] shrink flex items-center justify-center ">
			<div className=" basis-[40rem] mx-[2rem] ">
				<div className=" max-w-[40rem] ">
					<div className="relative z-[1] ">
						<div className="p-[0.5rem]">
							<div className="flex w-full">
								<div className=" grow mr-[1px]">
									<div className="relative">
										<input
											type="search"
											placeholder="Search"
											className="w-full h-[36px] px-[10px] py-[5px] rounded-l-md text-sm placeholder-[#c5c5c6] text-black dark:text-white ring-2 ring-transparent  hover:ring-[#ccc] dark:hover:ring-[#464649]
				dark:focus:hover:ring-[#a870fe]
				bg-[#e5e5e5] dark:bg-[#333336] focus:hover:ring-[#a870fe]  focus:ring-[#a870fe] transition-all hover:transition-all duration-200 hover:duration-500
				hover:ease-in-out ease-in-out  border-transparent  focus:outline-none 
				focus:drop-shadow-lg
				"
										/>
									</div>
								</div>
								<button className=" hover:transition-colors hover:duration-200 transition-all  hover:ease-in-ou flex h-[36px]  w-[38px] justify-center items-center rounded-r-md bg-[#f2f2f2] dark:bg-[#333336] hover:bg-[#e5e5e5] dark:hover:bg-[#464649] duration-200  ease-in-out">
									<svg
										width={24}
										height={24}
										version="1.1"
										viewBox="0 0 20 20"
										x="0px"
										y="0px"
										className=" fill-[#0e0e10] px-auto dark:fill-white ">
										<g>
											<path
												fillRule="evenodd"
												d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z"
												clipRule="evenodd"></path>
										</g>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
function Followtext() {
	const { data: session } = useSession();
	return (
		<>
			{session ? (
				<div className="px-[20px] text-black dark:text-white text-[18px] h-full font-bold tracking-wide flex items-center">
					<p className="hidden md:flex  ">Following</p>
					<div className="visible md:hidden">
						<FollowingSm />
					</div>
				</div>
			) : (
				<div className=" hidden px-4 text-lg h-full  items-center">
					<p className=" ">Following</p>
				</div>
			)}
		</>
	);
}

function DarkTheme() {
	return (
		<div className="flex  items-center justify-center flex-row">
			<MoonMode
				className="mr-2 ml-1 dark:fill-white fill-black"
				aria-hidden="true"
			/>
			<p className="pr-2 text-black dark:text-white">Dark Theme</p>
			<MyToggle className=" dark:fill-white fill-black" aria-hidden="true" />
		</div>
	);
}

export {
	Notification,
	Icon,
	LogOut,
	Inbox,
	LogoIcon,
	FollowingSm,
	Browse,
	Button,
	MyToggle,
	SearchBar,
	Followtext,
	MoonMode,
	DarkTheme,
};
