import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaArrowRight,
    FaPhone,
    FaEnvelope,
    FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050B09] text-white">
            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                    <div className="sm:col-span-2 lg:col-span-1">

                        <Link
                            to="/"
                            className="inline-block"
                        >
                            <h2 className="font-serif text-4xl tracking-widest text-[#D7AE4D]">
                                NACHO G
                            </h2>

                            <p className="mt-1 text-xs uppercase tracking-[0.35em] text-white/50">
                                The Dining Space
                            </p>
                        </Link>

                        <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
                            Good food, great people and unforgettable moments.
                            Welcome to the NACHO-G experience.
                        </p>

                        {/* Social Media */}

                        <div className="mt-7">

                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D7AE4D]">
                                Follow The Vibe
                            </p>

                            <div className="flex gap-3">

                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition duration-300 hover:border-[#D7AE4D] hover:bg-[#D7AE4D] hover:text-black"
                                >
                                    <FaInstagram />
                                </a>

                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition duration-300 hover:border-[#D7AE4D] hover:bg-[#D7AE4D] hover:text-black"
                                >
                                    <FaFacebookF />
                                </a>

                                <a
                                    href="#"
                                    aria-label="YouTube"
                                    className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition duration-300 hover:border-[#D7AE4D] hover:bg-[#D7AE4D] hover:text-black"
                                >
                                    <FaYoutube />
                                </a>

                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition duration-300 hover:border-[#D7AE4D] hover:bg-[#D7AE4D] hover:text-black"
                                >
                                    <FaLinkedinIn />
                                </a>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        QUICK LINKS
                    ================================================= */}

                    <div>

                        <h3 className="font-serif text-xl text-[#D7AE4D]">
                            Explore
                        </h3>

                        <div className="mt-5 flex flex-col gap-3">

                            <Link
                                to="/"
                                className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-[#D7AE4D]"
                            >
                                <FaArrowRight className="text-[10px] opacity-0 transition group-hover:opacity-100" />
                                Home
                            </Link>

                            <Link
                                to="/about"
                                className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-[#D7AE4D]"
                            >
                                <FaArrowRight className="text-[10px] opacity-0 transition group-hover:opacity-100" />
                                About Us
                            </Link>

                            <Link
                                to="/menu"
                                className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-[#D7AE4D]"
                            >
                                <FaArrowRight className="text-[10px] opacity-0 transition group-hover:opacity-100" />
                                Our Menu
                            </Link>

                            <Link
                                to="/contact"
                                className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-[#D7AE4D]"
                            >
                                <FaArrowRight className="text-[10px] opacity-0 transition group-hover:opacity-100" />
                                Contact
                            </Link>

                            <Link
                                to="/blogs"
                                className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-[#D7AE4D]"
                            >
                                <FaArrowRight className="text-[10px] opacity-0 transition group-hover:opacity-100" />
                                Blog
                            </Link>

                        </div>

                    </div>


                    {/* =================================================
                        OPENING HOURS
                    ================================================= */}

                    {/* <div>

                        <h3 className="font-serif text-xl text-[#D7AE4D]">
                            Opening Hours
                        </h3>

                        <div className="mt-5 space-y-4 text-sm">

                            <div className="flex justify-between gap-5 border-b border-white/10 pb-3">
                                <span className="text-white/50">
                                    Monday - Thursday
                                </span>

                                <span className="text-white/80">
                                    12 PM - 11 PM
                                </span>
                            </div>

                            <div className="flex justify-between gap-5 border-b border-white/10 pb-3">
                                <span className="text-white/50">
                                    Friday - Saturday
                                </span>

                                <span className="text-white/80">
                                    12 PM - 12 AM
                                </span>
                            </div>

                            <div className="flex justify-between gap-5 border-b border-white/10 pb-3">
                                <span className="text-white/50">
                                    Sunday
                                </span>

                                <span className="text-white/80">
                                    12 PM - 10:30 PM
                                </span>
                            </div>

                        </div>

                        <p className="mt-5 text-xs leading-5 text-[#D7AE4D]">
                            Kitchen closes 30 minutes before closing time.
                        </p>

                    </div> */}


                    {/* =================================================
                        CONTACT
                    ================================================= */}

                    <div>

                        <h3 className="font-serif text-xl text-[#D7AE4D]">
                            Get In Touch
                        </h3>

                        <div className="mt-5 space-y-5">
                            <a
                                href="tel:+099181 40581+919876543210"
                                className="group flex items-start gap-3"
                            >
                                <FaPhone className="mt-1 text-sm text-[#D7AE4D]" />

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/40">
                                        Call Us
                                    </p>

                                    <p className="mt-1 text-sm text-white/70 transition group-hover:text-[#D7AE4D]">
                                        +91 98765 43210
                                    </p>
                                </div>
                            </a>
                            <a
                                href="mailto:hello@nachog.com"
                                className="group flex items-start gap-3"
                            >
                                <FaEnvelope className="mt-1 text-sm text-[#D7AE4D]" />

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/40">
                                        Email
                                    </p>

                                    <p className="mt-1 text-sm text-white/70 transition group-hover:text-[#D7AE4D]">
                                        info@nachog.com
                                    </p>
                                </div>
                            </a>
                            <div className="flex items-start gap-3">

                                <FaLocationDot className="mt-1 text-sm text-[#D7AE4D]" />

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/40">
                                        Find Us
                                    </p>

                                    <p className="mt-1 text-sm leading-6 text-white/70">
                                        Gorakhpur, Uttar Pradesh 273013
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <div className="border-y border-[#D7AE4D]/20 bg-[#0B1C19]">

                <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

                    <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D7AE4D]">
                            Stay In The Loop
                        </p>

                        <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
                            Good food. Great updates.
                        </h3>

                    </div>


                    <Link
                        to="/contact"
                        className="inline-flex w-fit items-center gap-3 border border-[#D7AE4D] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#D7AE4D] transition duration-300 hover:bg-[#D7AE4D] hover:text-black"
                    >
                        Get In Touch
                        <FaArrowRight />
                    </Link>

                </div>

            </div>
            <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">

                <div className="flex flex-col gap-4 text-center text-xs sm:flex-row sm:items-center sm:justify-between sm:text-left">

                    <p className="text-sm">
                        © 2026 NACHO G — The Dining Space.  All Rights Reserved.
                        <span className="mx-2">|</span>
                        Designed & Developed by{" "}
                        <a
                            href="https://topnexmedia.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:underline"
                        >
                            Topnex Media
                        </a>
                    </p>

                    <div className="flex flex-wrap justify-center gap-5 sm:justify-end">

                        <a
                            href="#"
                            className="text-white/30 transition hover:text-[#D7AE4D]"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="text-white/30 transition hover:text-[#D7AE4D]"
                        >
                            Terms
                        </a>

                        <a
                            href="#"
                            className="text-white/30 transition hover:text-[#D7AE4D]"
                        >
                            Accessibility
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;