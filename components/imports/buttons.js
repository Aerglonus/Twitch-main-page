import Link from "next/link";
import React, { Fragment, forwardRef } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSession, signIn, signOut } from "next-auth/react";
import { CgUserAdd } from "react-icons/cg";
import { VscSettings } from "react-icons/vsc";
import { dynamic } from "next/dynamic";
import { BiBarChartSquare } from "react-icons/bi";
import { FiShield } from "react-icons/fi";
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
	MoonMode,
	DarkTheme,
} from "./items";
import { Modal } from "./modal";
import { UserProfile } from "./userprofilemodal";
function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
// eslint-disable-next-line react/display-name
const MyLink = React.forwardRef((props, ref) => {
	let { href, children, ...rest } = props;
	return (
		<Link href={href}>
			<a ref={ref} {...rest}>
				{children}
			</a>
		</Link>
	);
});

function LeftMenu() {
	return (
		<div>
			<Menu as="div" className="relative flex">
				<Menu.Button className=" hover:transition-colors hover:duration-200 transition-all duration-500 ease-in-out hover:ease-in-out rounded-md  flex items-center justify-center  h-[30px] w-[30px] bg-white dark:bg-[#18181b] text-sm font-medium hover:text-white-700 text-black dark:text-white hover:bg-[#e5e5e5] dark:hover:bg-[#464649]">
					<BsThreeDotsVertical size={20} className="" />
				</Menu.Button>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95">
					<Menu.Items className="origin-top-left absolute drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)]  left-[10px] top-[35px] w-[200px] rounded-md dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] bg-white dark:bg-[#18181b] divide-y p-[10px] divide-[#303032] focus:outline-none ">
						<div className="py-1 ">
							<Menu.Item className="block my-[0.5rem] px-1 items-center text-sm leading-[1.5] text-black dark:text-[#adadb8] uppercase font-Roobert ">
								<div className="flex  items-center justify-start w-full  ">
									<p className="ml-[5px]">General</p>
								</div>
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<a
										href="#"
										className={classNames(
											active
												? "bg-[#e5e5e5] text-black  my-1 dark:bg-[#464649] dark:text-white"
												: "text-black dark:text-white my-1 ",
											"rounded",
											"flex  px-[4px] items-center font-Roobert text-justify h-[29.5px] ",
										)}>
										<div className="flex  items-center justify-start w-full  ">
											<p className="ml-[5px]">About</p>
										</div>
									</a>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<a
										href="#"
										className={classNames(
											active
												? "bg-[#e5e5e5] text-black my-1 dark:bg-[#464649] dark:text-white"
												: "text-black dark:text-white",
											"rounded",
											"flex items-center px-[4px] my-1 font-Roobert text-justify h-[29.5px] ",
										)}>
										<div className="flex  items-center justify-start w-full  ">
											<p className="ml-[5px]">Advertisers</p>
										</div>
									</a>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<a
										href="#"
										className={classNames(
											active
												? "bg-[#e5e5e5] text-black my-1 dark:bg-[#464649] dark:text-white"
												: "text-black dark:text-white ",
											"rounded",
											"flex items-center px-[4px] font-Roobert my-1 text-justify h-[29.5px] ",
										)}>
										<div className="flex  items-center justify-start w-full  ">
											<p className="ml-[5px]">Blog</p>
										</div>
									</a>
								)}
							</Menu.Item>
							<form method="POST" action="#">
								<Menu.Item>
									{({ active }) => (
										<button
											type="submit"
											className={classNames(
												active
													? "bg-[#e5e5e5] text-black my-1 dark:bg-[#464649] dark:text-white "
													: "text-black dark:text-white ",
												"rounded",
												"flex items-center w-full px-[4px] my-1  font-Roobert text-justify h-[29.5px] ",
											)}>
											<div className="flex  items-center justify-start w-full  ">
												<p className="ml-[5px]">Developers</p>
											</div>
										</button>
									)}
								</Menu.Item>
							</form>
							<Menu.Item>
								{({ active }) => (
									<a
										href="#"
										className={classNames(
											active
												? "bg-[#e5e5e5] text-black mt-1 dark:bg-[#464649] dark:text-white"
												: "text-black dark:text-white mt-1 ",
											"rounded",
											"flex items-center px-[4px] font-Roobert text-justify h-[29.5px] ",
										)}>
										<div className="flex  items-center justify-start w-full  ">
											<p className="ml-[5px]">Gift Card</p>
										</div>
									</a>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}
function RightMenu() {
	const { data: session } = useSession();
	const [showModal, setShowModal] = React.useState(false);
	return (
		<>
			{session ? (
				<Menu as="div" className="relative flex   text-left">
					{({ open }) => (
						<>
							<div className="flex items-center justify-center">
								<Menu.Button>
									<div className="flex items-center justify-center">
										<Image
											src={session.user.image}
											alt="/"
											width={100}
											height={100}
											className="rounded-full flex items-center justify-center cursor-pointer"
										/>
									</div>
								</Menu.Button>
							</div>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95">
								<Menu.Items className="absolute bg-white p-[10px] drop-shadow-md top-[30px] right-[2px] mt-2 w-[200px] origin-top-right divide-y dark:divide-[#30303294] dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.5) rounded-md dark:bg-[#18181b] ring-1  ring-black ring-opacity-5 focus:outline-none">
									<div className="pb-2 ">
										<Menu.Item>
											{({ active }) => (
												<div
													className={`${
														active
															? " text-black dark:text-white text-[18px]"
															: " text-black dark:text-white text-[18px]"
													} group flex w-full items-center rounded-md pl-[5px] pt-[5px] pb-2 text-sm`}>
													{active ? (
														<div className="flex mr-3  items-center justify-center">
															<MyLink href="/account">
																<Image
																	src={session.user.image}
																	alt="/"
																	width={40}
																	height={40}
																	className="rounded-full  flex items-center justify-center cursor-pointer"
																/>
															</MyLink>
														</div>
													) : (
														<div className="flex mr-3  items-center justify-center">
															<MyLink href="/account">
																<Image
																	src={session.user.image}
																	alt="/"
																	width={40}
																	height={40}
																	className="rounded-full flex items-center justify-center cursor-pointer"
																/>
															</MyLink>
														</div>
													)}
													{session.user.name}
												</div>
											)}
										</Menu.Item>
									</div>
									<div className="">
										<MyLink href="/account">
											<Menu.Item>
												{({ active }) => (
													<button
														className={`${
															active
																? "bg-[#e5e5e5] text-black mt-2 dark:bg-[#464649] dark:text-white"
																: "text-black dark:text-white"
														} group flex w-full items-center rounded-md mt-2 px-2 py-2 text-sm`}>
														{active ? (
															<CgUserAdd
																className="mr-2 h-5 w-5 dark:text-white"
																aria-hidden="true"
															/>
														) : (
															<CgUserAdd
																className="mr-2 h-5 w-5 dark:text-white"
																aria-hidden="true"
															/>
														)}
														Channel
													</button>
												)}
											</Menu.Item>
										</MyLink>
										<Menu.Item>
											{({ active }) => (
												<button
													className={`${
														active
															? "bg-[#e5e5e5] text-black  dark:bg-[#464649] dark:text-white"
															: "text-black dark:text-white"
													} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
													{active ? (
														<VscSettings
															className="mr-2 h-5 w-5 dark:text-white"
															aria-hidden="true"
														/>
													) : (
														<VscSettings
															className="mr-2 h-5 w-5 dark:text-white"
															aria-hidden="true"
														/>
													)}
													Video Producer
												</button>
											)}
										</Menu.Item>
									</div>
									<div className="my-2">
										<Menu.Item>
											{({ active }) => (
												<button
													className={`${
														active
															? "bg-[#e5e5e5] text-black mt-2 dark:bg-[#464649] dark:text-white"
															: "text-black dark:text-white"
													} group flex w-full items-center rounded-md mt-2 px-2 py-2 text-sm`}>
													{active ? (
														<BiBarChartSquare className="mr-2 h-5 w-5" aria-hidden="true" />
													) : (
														<BiBarChartSquare className="mr-2 h-5 w-5" aria-hidden="true" />
													)}
													Creator Dashboard
												</button>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<button
													className={`${
														active
															? "bg-[#e5e5e5] text-black  dark:bg-[#464649] dark:text-white"
															: "text-black dark:text-white"
													} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
													{active ? (
														<FiShield className="mr-2 h-5 w-5" aria-hidden="true" />
													) : (
														<FiShield className="mr-2 h-5 w-5" aria-hidden="true" />
													)}
													Safety
												</button>
											)}
										</Menu.Item>
									</div>
									<div className="">
										<Menu.Item>
											{({ active }) => (
												<button
													className={`${
														active
															? "bg-[#e5e5e5] text-black my-2 dark:bg-[#464649] dark:text-white"
															: "text-black dark:text-white"
													} group flex w-full items-center   rounded-md my-2 px-2 py-2 text-sm`}>
													{active ? (
														<Icon className="mr-2 h-5 w-5 " aria-hidden="true" />
													) : (
														<Icon className="mr-2 h-5 w-5" aria-hidden="true" />
													)}
													Emote Attribution
												</button>
											)}
										</Menu.Item>
									</div>
									<div className="">
										<Menu.Item>
											{({ active }) => (
												<button
													onClick={() =>
														signOut({
															callbackUrl: `http://locahost:3005`,
														})
													}
													className={`${
														active
															? "bg-[#e5e5e5] text-black my-2 dark:bg-[#464649] dark:text-white"
															: "text-black dark:text-white"
													} group flex w-full my-2 items-center rounded-md px-2 py-2 text-sm`}>
													{active ? (
														<LogOut className="mr-2 h-5 w-5 " aria-hidden="true" />
													) : (
														<LogOut className="mr-2 h-5 w-5" aria-hidden="true" />
													)}
													Log Out
												</button>
											)}
										</Menu.Item>
									</div>
									<div className="flex items-center justify-center">
										<Menu.Item>
											{({ active }) => (
												<button
													className={`${
														active
															? "bg-[#e5e5e5] text-black mt-2 dark:bg-[#464649] dark:text-white"
															: "text-black dark:text-white"
													} group flex w-full items-center mt-2 rounded-md px-2 py-2  text-sm`}>
													{active ? <DarkTheme /> : <DarkTheme />}
												</button>
											)}
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</>
					)}
				</Menu>
			) : (
				<div className="hover:transition-colors hover:duration-500 transition-all duration-500 ease-in-out hover:ease-in-out h-[30px] w-[58.13px]  rounded bg-[#f2f2f2] hover:bg-[#e5e5e5] dark:bg-[#333336] dark:hover:bg-[#464649] text-sm  font-Roobert">
					<UserProfile showModal={showModal} setShowModal={setShowModal} />
				</div>
			)}
		</>
	);
}
export { LeftMenu, RightMenu };
