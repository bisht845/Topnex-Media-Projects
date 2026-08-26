import React from "react";
import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaCalendarAlt,
    FaInstagram,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa";

import blogHero1 from "../assets/blogHero.jpg";
import blogHero2 from "../assets/blogImg.jpg";
import blogHero3 from "../assets/Service-1.jpg";
import blogHero4 from "../assets/Service-2.jpg";

const Blogs = () => {

    const BlogData = [
        {
            id: 1,
            date: "December 12, 2024",
            category: "Our Story",
            image: blogHero1,
            title: "The Story Behind NACHO-G",
            description:
                "Every restaurant has a story. NACHO-G was created with a simple idea — bring bold flavours, good people and great moments together under one roof.",
        },

        {
            id: 2,
            date: "May 10, 2025",
            category: "Food & Flavours",
            image: blogHero2,
            title: "Good Food Starts With Good Ingredients",
            description:
                "Fresh ingredients, bold flavours and a little creativity are what make every NACHO-G dish special. Discover what goes behind the food you love.",
        },

        {
            id: 3,
            date: "June 10, 2025",
            category: "Experience",
            image: blogHero3,
            title: "More Than Just A Meal",
            description:
                "At NACHO-G, dining is about more than what's on your plate. It's about music, conversations, laughter and moments worth remembering.",
        },

        {
            id: 4,
            date: "April 12, 2025",
            category: "Behind The Scenes",
            image: blogHero4,
            title: "Behind The NACHO-G Kitchen",
            description:
                "Step behind the scenes and meet the energy, passion and creativity that goes into making your NACHO-G experience unforgettable.",
        },
    ];

    return (
        <main className="w-full overflow-hidden bg-[#F8F4EA] text-[#061714]">

            {/* =====================================================
                HERO
            ====================================================== */}
            <section className="relative">

                <div className="grid min-h-[650px] grid-cols-1 lg:grid-cols-2">

                    {/* Left Content */}
                    <div className="flex items-center bg-[#061714] px-6 py-20 sm:px-10 md:px-16 lg:px-20 xl:px-28">

                        <div className="max-w-xl">

                            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#E5A62A] sm:text-sm">
                                NACHO-G Journal
                            </p>

                            <h1 className="font-serif text-5xl font-bold leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
                                Stories
                                <br />
                                worth
                                <br />
                                sharing.
                            </h1>

                            <div className="mt-8 h-px w-24 bg-[#E5A62A]" />

                            <p className="mt-8 max-w-lg text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                                Discover the stories, flavours, people and
                                moments that make NACHO-G more than just a
                                restaurant.
                            </p>

                            <Link
                                to="/menu"
                                className="mt-8 inline-flex items-center gap-3 border-b border-[#E5A62A] pb-2 text-sm font-bold uppercase tracking-wider text-[#E5A62A] transition hover:text-white hover:border-white"
                            >
                                Explore Our Menu
                                <FaArrowRight />
                            </Link>

                        </div>

                    </div>


                    {/* Hero Image */}
                    <div className="relative h-[450px] lg:h-auto">

                        <img
                            src={blogHero1}
                            alt="NACHO-G restaurant experience"
                            className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-black/10" />

                        <div className="absolute bottom-6 left-6 rounded-full bg-[#E5A62A] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#061714] sm:bottom-10 sm:left-10">
                            NACHO-G Stories
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                INTRO
            ====================================================== */}
            <section className="px-5 py-20 sm:px-8 md:py-28">

                <div className="mx-auto max-w-4xl text-center">

                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B66A28]">
                        From Our Table
                    </p>

                    <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                        Food, people
                        <br />
                        & good stories.
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#555] sm:text-base sm:leading-8">
                        From what's happening behind the scenes to the food
                        landing on your table, this is where we share a little
                        more about the NACHO-G experience.
                    </p>

                </div>

            </section>


            {/* =====================================================
                FEATURED STORY
            ====================================================== */}
            <section className="px-4 pb-20 sm:px-8 md:pb-28">

                <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#E9E2D2] lg:grid-cols-2">

                    {/* Image */}
                    <div className="h-[400px] lg:h-[550px]">

                        <img
                            src={blogHero2}
                            alt="NACHO-G food"
                            className="h-full w-full object-cover transition duration-700 hover:scale-105"
                        />

                    </div>


                    {/* Content */}
                    <div className="flex flex-col justify-center px-7 py-12 sm:px-10 md:px-14 lg:px-16">

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B66A28]">
                            Featured Story
                        </p>

                        <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                            Good food.
                            <br />
                            Great stories.
                        </h2>

                        <p className="mt-6 text-sm leading-7 text-[#555] sm:text-base sm:leading-8">
                            At NACHO-G, every plate has a little story behind
                            it. From fresh ingredients to the people who bring
                            everything together, discover what makes our food
                            special.
                        </p>

                        <Link
                            to="/menu"
                            className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#061714] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition duration-300 hover:bg-[#E5A62A] hover:text-[#061714]"
                        >
                            Discover Our Food
                            <FaArrowRight />
                        </Link>

                    </div>

                </div>

            </section>


            {/* =====================================================
                BLOG LIST
            ====================================================== */}
            <section className="bg-[#061714] px-4 py-20 sm:px-8 md:py-28">

                <div className="mx-auto max-w-7xl">

                    {/* Heading */}
                    <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                        <div>

                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E5A62A]">
                                Latest Stories
                            </p>

                            <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                                What's happening
                                <br />
                                at NACHO-G?
                            </h2>

                        </div>

                        <Link
                            to="/gallery"
                            className="flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-wider text-white underline decoration-[#E5A62A] underline-offset-8 transition hover:text-[#E5A62A]"
                        >
                            Visit Our Gallery
                            <FaArrowRight />
                        </Link>

                    </div>


                    {/* Blog Cards */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                        {BlogData.map((blog) => (

                            <article
                                key={blog.id}
                                className="group overflow-hidden rounded-[1.5rem] bg-[#F8F4EA]"
                            >

                                {/* Image */}
                                <div className="relative h-[280px] overflow-hidden sm:h-[350px]">

                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    {/* Category */}
                                    <div className="absolute left-5 top-5 rounded-full bg-[#E5A62A] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#061714]">
                                        {blog.category}
                                    </div>

                                </div>


                                {/* Content */}
                                <div className="p-6 sm:p-8">

                                    {/* Date */}
                                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#888]">

                                        <FaCalendarAlt className="text-[#B66A28]" />

                                        {blog.date}

                                    </div>


                                    <h3 className="mt-5 font-serif text-2xl font-bold leading-tight text-[#061714] sm:text-3xl">
                                        {blog.title}
                                    </h3>


                                    <p className="mt-4 text-sm leading-7 text-[#666]">
                                        {blog.description}
                                    </p>


                                    <button
                                        type="button"
                                        className="mt-6 inline-flex items-center gap-3 border-b border-[#061714] pb-1 text-xs font-bold uppercase tracking-wider text-[#061714] transition hover:border-[#E5A62A] hover:text-[#B66A28]"
                                    >
                                        Read Story
                                        <FaArrowRight />
                                    </button>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                INSTAGRAM / SOCIAL
            ====================================================== */}
            <section className="bg-[#E9E2D2] px-5 py-20 text-center sm:px-8 md:py-24">

                <div className="mx-auto max-w-3xl">

                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B66A28]">
                        Follow The Vibe
                    </p>

                    <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
                        More NACHO-G.
                        <br />
                        More good times.
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#666] sm:text-base">
                        Follow us for new dishes, special moments, offers and
                        everything happening at NACHO-G.
                    </p>


                    <div className="mt-8 flex justify-center gap-4">

                        <a
                            href="#"
                            aria-label="Instagram"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#061714] text-white transition duration-300 hover:bg-[#E5A62A] hover:text-[#061714]"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            aria-label="Facebook"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#061714] text-white transition duration-300 hover:bg-[#E5A62A] hover:text-[#061714]"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            aria-label="YouTube"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#061714] text-white transition duration-300 hover:bg-[#E5A62A] hover:text-[#061714]"
                        >
                            <FaYoutube />
                        </a>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FINAL CTA
            ====================================================== */}
            <section className="bg-[#061714] px-5 py-20 text-center text-white sm:px-8 md:py-28">

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E5A62A]">
                    Come Hungry
                </p>

                <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                    The best stories
                    <br />
                    start around a table.
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                    Ready for your next NACHO-G experience?
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                    <Link
                        to="/menu"
                        className="rounded-full bg-[#E5A62A] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#061714] transition duration-300 hover:bg-white"
                    >
                        Explore Menu
                    </Link>

                    <Link
                        to="/contact"
                        className="rounded-full border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition duration-300 hover:bg-white hover:text-[#061714]"
                    >
                        Visit NACHO-G
                    </Link>

                </div>

            </section>

        </main>
    );
};

export default Blogs;