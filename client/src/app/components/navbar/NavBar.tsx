"use client";
import { Button } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import profile_icon from "@/app/assets/icons/profile_icon.svg";
// import search_icon from '../../assets/icons/search_icon.svg'
import search_icon from "@/app/assets/icons/search_icon.svg";
import logo from "../../assets/icons/logo.svg";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const handleToggle = () => setOpen(!open);

	return (
		<>
			{/* Overlay when menu is open */}
			{open && (
				<div
					className="fixed inset-0 z-40 bg-black/40"
					onClick={handleToggle}
				/>
			)}

			<nav className="relative flex justify-center bg-white p-4">
				{/* Desktop Navbar */}
				<div className="hidden w-full min-w-[915px] items-center justify-between gap-2 rounded-md border-2 border-gray-300 p-2 md:flex">
					{/* <NavButton href="google.com" label="STUDENT EXPERIENCE" />
                    <NavButton href="google.com" label="STUDENT VOICE" /> */}
					<Image src={logo} width={120} height={120} alt="logo" />{" "}
					<Button className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-700 p-2 text-xs font-semibold text-nowrap text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[hover]:bg-gray-600 data-[open]:bg-gray-700 md:w-[160px] lg:w-[310px] lg:text-base">
						STUDENT EXPERIENCE
					</Button>
					<Button className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-700 p-2 text-xs font-semibold text-nowrap text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[hover]:bg-gray-600 data-[open]:bg-gray-700 md:w-[160px] lg:w-[310px] lg:text-base">
						STUDENT VOICE
					</Button>
					<Button className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-700 p-2 text-xs font-semibold text-nowrap text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[hover]:bg-gray-600 data-[open]:bg-gray-700 md:w-[160px] lg:w-[310px] lg:text-base">
						YOUR AUSA
					</Button>
					<Button className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-700 p-2 text-xs font-semibold text-nowrap text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[hover]:bg-gray-600 data-[open]:bg-gray-700 md:w-[160px] lg:w-[310px] lg:text-base">
						STUDENT SUPPORT
					</Button>
					{/* <NavButton href="google.com" label="YOUR AUSA" />
                    <NavButton href="google.com" label="STUDENT SUPPORT" /> */}
					<div className="flex justify-center gap-4 sm:flex-shrink-0 md:ml-4 lg:gap-8">
						<Link href="/">
							<Image
								className=""
								src={search_icon}
								width={25}
								height={25}
								alt="search icon"
							/>
						</Link>
						<Link href="/">
							<Image
								className=""
								src={profile_icon}
								width={25}
								height={25}
								alt="person icon"
							/>
						</Link>
					</div>
				</div>

				{/* Mobile Navbar */}
				<div className="flex w-full items-center justify-between md:hidden">
					<button
						type="button"
						className="cursor-pointer"
						onClick={handleToggle}
					>
						{open ? <X /> : <Menu />}
					</button>
					<Image
						src={logo}
						width={100}
						height={100}
						alt="logo"
						className="mx-auto"
					/>
					<Image src={search_icon} width={30} height={30} alt="search icon" />
				</div>
			</nav>

			{/* Slide-in Drawer Menu */}
			<div
				className={`fixed top-0 left-0 z-50 h-full w-3/4 max-w-xs transform bg-white p-6 transition-transform duration-300 ease-in-out ${
					open ? "translate-x-0" : "-translate-x-full"
				} flex flex-col`}
			>
				{/* Header with Logo and Close Button */}
				<div className="mb-8 flex items-center justify-between">
					<Image src={logo} width={100} height={100} alt="logo" />
					<button
						type="button"
						className="cursor-pointer"
						onClick={handleToggle}
					>
						<X className="h-6 w-6" />
					</button>
				</div>

				{/* Nav Links */}
				<nav className="font-size: 0.75rem; flex flex-col gap-4">
					<Link
						href="/"
						className="transition duration-300 hover:translate-x-2"
					>
						STUDENT EXPERIENCE
					</Link>
					<Link
						href="/"
						className="transition duration-300 hover:translate-x-2"
					>
						STUDENT VOICE
					</Link>
					<Link
						href="/"
						className="transition duration-300 hover:translate-x-2"
					>
						YOUR AUSA
					</Link>
					<Link
						href="/"
						className="transition duration-300 hover:translate-x-2"
					>
						STUDENT SUPPORT
					</Link>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
