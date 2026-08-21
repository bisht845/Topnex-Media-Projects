import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#002D40] px-5 py-10 text-white sm:px-8 md:px-12 lg:px-20">

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    {/* Logo */}
                    <div>
                        <h1 className="text-3xl font-medium">
                            Earls
                        </h1>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">

                        <span>Keep updated</span>

                        <div className="flex gap-5">
                            <a href="#" aria-label="Instagram">
                                <FaInstagram className="text-xl hover:text-gray-300" />
                            </a>

                            <a href="#" aria-label="Facebook">
                                <FaFacebook className="text-xl hover:text-gray-300" />
                            </a>

                            <a href="#" aria-label="YouTube">
                                <FaYoutube className="text-xl hover:text-gray-300" />
                            </a>

                            <a href="#" aria-label="LinkedIn">
                                <FaLinkedin className="text-xl hover:text-gray-300" />
                            </a>
                        </div>

                    </div>

                </div>

                <hr className="mt-8 mb-6 border-white/30" />
                <div className="flex flex-col gap-8 md:flex-row md:justify-between">

                    {/* Left Links */}
                    <div>
                        <ul className="flex flex-wrap gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-20">

                            <li className="cursor-pointer hover:text-gray-300">
                                Blogs
                            </li>

                            <li className="cursor-pointer hover:text-gray-300">
                                About
                            </li>

                            <li className="cursor-pointer hover:text-gray-300">
                                Careers
                            </li>

                            <li className="cursor-pointer hover:text-gray-300">
                                Contact
                            </li>

                        </ul>
                    </div>


                    {/* Right Links */}
                    <div>
                        <ul className="flex flex-wrap gap-x-8 gap-y-4 md:gap-x-10">

                            <li className="cursor-pointer hover:text-gray-300">
                                Facebook
                            </li>

                            <li className="cursor-pointer hover:text-gray-300">
                                Contact
                            </li>

                            <li className="cursor-pointer hover:text-gray-300">
                                Suppliers
                            </li>

                        </ul>
                    </div>

                </div>
                <hr className="mt-8 border-white/30" />

                <div className="mt-8">

                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-center text-sm text-[#6c8798]">

                        <li className="cursor-pointer hover:text-white">
                            Terms
                        </li>

                        <li className="cursor-pointer hover:text-white">
                            Privacy
                        </li>

                        <li className="cursor-pointer hover:text-white">
                            Accessibility
                        </li>

                        <li>
                            Copyright Earls Restaurants Ltd
                        </li>

                    </ul>

                </div>

            </footer>
        </>
    )
}
export default Footer;