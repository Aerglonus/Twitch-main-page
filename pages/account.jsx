import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { SiTwitch } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
const account = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { data: session } = useSession();
	if (session) {
		return (
			<div className="pt-[100px] flex items-center justify-center flex-col max-w-[400px] w-full mx-auto p-4">
				<div className="flex flex-col items-center justify-center">
					<div className="pb-4 m-auto ">
						<Image
							src={session.user.image}
							alt="/"
							width={100}
							height={100}
							className="rounded-full"
						/>
					</div>
					<h2 className="text-2xl font-bold text-black dark:text-white">
						{" "}
						Welcome, {session.user.name}
					</h2>
				</div>
				<p className="py-4 text-black dark:text-white">
					{" "}
					Signed in as {session.user.email}
				</p>
				<button
					className=" flex items-center justify-center rounded h-[30px] w-[90px] bg-[#9147ff] hover:bg-[#772ce8]"
					onClick={() =>
						signOut({
							callbackUrl: `${window.location.origin}`,
						})
					}>
					Sign out
				</button>
			</div>
		);
	}
	return (
		<div className=" items-center justify-center flex flex-col max-w-[480px] h-screen w-full m-auto p-4 ">
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
				<div className="relative w-[400px] my-6 mx-auto max-w-3xl flex flex-row">
					{/*content*/}
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#18181b] outline-none focus:outline-none p-[12px] divide-y-[2px] divide-y-reverse divide-slate-400/[.24] ">
						{/*header*/}
						<div className="flex items-center justify-center p-5   rounded-t">
							<SiTwitch className="mr-2   fill-purple-600" size={30} />
							<h2 className="font-bold text-2xl"> Log in to Twitch</h2>
						</div>
						{/*body*/}
						<div className="flex flex-row space-x-4 ">
							<div className="flex flex-col">
								<p>Log in</p>
								<div className=" bg-purple-600 h-[2px] z-10"></div>
							</div>
							<p>Sign Up</p>
						</div>
						<div className="relative  flex-col flex items-start justify-start    ">
							<p className="mt-4 text-white text-sm leading-relaxed">
								Username
							</p>
							<div className=" flex items-center shrink basis-auto w-[92%] h-[40px] ">
								<input
									type="search"
									placeholder="Username"
									className="w-[100%] h-[30px] px-4 text-sm placeholder-[#c5c5c6]border bg-[#464649]  rounded-md  focus:outline-none focus:border-[#a970ff] focus:border-2 focus:bg-[#000000] hover:border-[#838386] hover:border-2"
								/>
							</div>
							<p className="mt-4 mb-2 text-white text-sm leading-relaxed">
								Password
							</p>
							<div className=" flex items-center shrink basis-auto w-[92%] h-[40px] pb-4 ">
								<input
									type="password"
									placeholder="Password"
									className="w-[100%] h-[30px] px-4 text-sm placeholder-[#c5c5c6]border bg-[#464649]  rounded-md  focus:outline-none focus:border-[#a970ff] focus:border-2 focus:bg-[#000000] hover:border-[#838386] hover:border-2"
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
								className="bg-[#9147ff] w-full hover:bg-[#772ce8] text-white active:bg-[#9147ff] font-bold uppercase text-sm  py-[5px] rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
						<Link href="/">
							<button className="bg-transparent hover:bg-[#464649] rounded">
								<IoClose size={25} />
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="opacity-50 fixed inset-0  z-40 bg-black"></div>
		</div>
	);
};

export default account;
