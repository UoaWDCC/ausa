"use client";
import NavButton from "./NavButton";
import { useState } from "react";
import search_icon from "../../assets/icons/search_icon.svg";
import profile_icon from "../../assets/icons/profile_icon.svg";
import logo from "../../assets/icons/logo.svg";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from '@headlessui/react'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen(!open);

    return (
        <>
            {/* Overlay when menu is open */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={handleToggle}
                />
            )}

            <nav className="p-4 bg-white justify-center flex relative">
                {/* Desktop Navbar*/}
                <div className="hidden min-w-[915px] md:flex items-center gap-2 justify-between w-full border-2 border-gray-300 rounded-md p-2">
                    {/* <NavButton href="google.com" label="STUDENT EXPERIENCE" />
                    <NavButton href="google.com" label="STUDENT VOICE" /> */}
                    <Image src={logo} width={120} height={120} alt="logo" />{" "}
                    <Button className="inline-flex justify-center items-center gap-2 rounded-md bg-gray-700 text-nowrap text-xs lg:text-base md:w-[160px] lg:w-[310px] p-2 duration-75 hover:translate-x-4 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                        STUDENT EXPERIENCE
                    </Button>
                    <Button className="inline-flex justify-center items-center gap-2 rounded-md bg-gray-700 text-nowrap text-xs lg:text-base md:w-[160px] lg:w-[310px] p-2 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                        STUDENT VOICE
                    </Button>
                    <Button className="inline-flex justify-center items-center gap-2 rounded-md bg-gray-700 text-nowrap text-xs lg:text-base md:w-[160px] lg:w-[310px] p-2 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                        YOUR AUSA
                    </Button>
                    <Button className="inline-flex justify-center items-center gap-2 rounded-md bg-gray-700 text-nowrap text-xs lg:text-base md:w-[160px] lg:w-[310px] p-2 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                        STUDENT SUPPORT
                    </Button>
                    {/* <NavButton href="google.com" label="YOUR AUSA" />
                    <NavButton href="google.com" label="STUDENT SUPPORT" /> */}
                    <div className="flex lg:gap-8 gap-4 sm:flex-shrink-0 justify-center md:ml-4">
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
                            <Image className="" src={profile_icon} width={25} height={25} alt="person icon" />
                        </Link>
                    </div>
                </div>


                {/* Mobile Navbar*/}
                <div className="flex md:hidden w-full items-center justify-between">
                    <button className="cursor-pointer" onClick={handleToggle}>
                        {open ? <X /> : <Menu />}
                    </button>
                    <Image src={logo} width={100} height={100} alt="logo" className="mx-auto" />
                    <Image src={search_icon} width={30} height={30} alt="search icon" />
                </div>
            </nav>

            {/* Slide-in Drawer Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white z-50 p-6 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"
                    } flex flex-col`}
            >
                {/* Header with Logo and Close Button */}
                <div className="flex justify-between items-center mb-8">
                    <Image src={logo} width={100} height={100} alt="logo" />
                    <button className="cursor-pointer" onClick={handleToggle}>
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-4 font-size: 0.75rem;">
                    <Link href="/" className="transition hover:translate-x-2 duration-300">STUDENT EXPERIENCE</Link>
                    <Link href="/" className="transition hover:translate-x-2 duration-300">STUDENT VOICE</Link>
                    <Link href="/" className="transition hover:translate-x-2 duration-300">YOUR AUSA</Link>
                    <Link href="/" className="transition hover:translate-x-2 duration-300">STUDENT SUPPORT</Link>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
