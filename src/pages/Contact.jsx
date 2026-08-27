import React from "react";
import { Link } from "react-router-dom";
import {
    FaPhone,
    FaEnvelope,
    FaLocationDot,
    FaClock,
    FaArrowRight,
    FaInstagram,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa6";

const Contact = () => {
    const contactImg =
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85";

    return (
        <main className="min-h-screen bg-[#071412] text-white">


            <section className="relative min-h-[600px] overflow-hidden sm:min-h-[650px]">

                <img
                    src={contactImg}
                    alt="NACHO G restaurant"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#071412]/70" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071412] via-black/20 to-black/40" />

                <div className="relative z-10 flex min-h-[600px] items-center justify-center px-5 text-center sm:min-h-[650px]">

                    <div className="max-w-4xl">

                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#D7AE4D] sm:text-sm">
                            Get In Touch
                        </p>

                        <h1 className="font-serif text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
                            Let's Talk.
                        </h1>

                        <div className="mx-auto my-7 h-px w-20 bg-[#D7AE4D] sm:w-28" />

                        <p className="mx-auto max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 md:text-lg">
                            Have a question, feedback or just want to say hello?
                            We'd love to hear from you.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <a
                                href="tel:+099181 40581+919876543210"
                                className="inline-flex items-center justify-center gap-3 bg-[#D7AE4D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black transition duration-300 hover:bg-white"
                            >
                                <FaPhone />
                                Call Us
                            </a>

                            <a
                                href="mailto:hello@nachog.com"
                                className="inline-flex items-center justify-center gap-3 border border-[#D7AE4D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#D7AE4D] transition duration-300 hover:bg-[#D7AE4D] hover:text-black"
                            >
                                <FaEnvelope />
                                Email Us
                            </a>

                        </div>

                    </div>

                </div>

            </section>

            <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

                <div className="mx-auto max-w-4xl text-center">

                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D7AE4D]">
                        NACHO G · THE DINING SPACE
                    </p>

                    <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                        We'd love to hear from you.
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                        Whether you're planning your next visit, have feedback
                        about your experience or simply want to know more about
                        NACHO G, our team is always happy to help.
                    </p>

                </div>

            </section>


            <section className="bg-[#0B1C19] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

                    <a className="group border border-[#D7AE4D]/20 bg-[#071412] p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-[#D7AE4D]" href="tel:+099181 40581">

                        <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#D7AE4D]/40 text-[#D7AE4D] transition group-hover:bg-[#D7AE4D] group-hover:text-black">

                            <FaPhone className="text-lg" />

                        </div>

                        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#D7AE4D]">
                            Call Us
                        </p>

                        <h3 className="mt-3 font-serif text-2xl">
                            Give Us A Call
                        </h3>

                        <a
                            href="tel:+099181 40581+919876543210"
                            className="mt-4 block text-sm text-white/50 transition hover:text-[#D7AE4D]"
                        >
                            +91 98765 43210
                        </a>

                    </a>

                    <a className="group border border-[#D7AE4D]/20 bg-[#071412] p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-[#D7AE4D]" href="mailto:info@nachoggkp.com">

                        <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#D7AE4D]/40 text-[#D7AE4D] transition group-hover:bg-[#D7AE4D] group-hover:text-black">

                            <FaEnvelope className="text-lg" />

                        </div>

                        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#D7AE4D]">
                            Email
                        </p>

                        <h3 className="mt-3 font-serif text-2xl">
                            Send A Message
                        </h3>

                        <a
                            href="mailto:hello@nachog.com"
                            className="mt-4 block break-all text-sm text-white/50 transition hover:text-[#D7AE4D]"
                        >
                            info@nachoggkp.com
                        </a>

                    </a>

                    <a href="https://www.google.com/maps/place/Nacho+G+-+The+Dinning+Space/@26.8367837,83.4272797,17z/data=!3m1!4b1!4m6!3m5!1s0x39915194aab0fcc7:0x451797ae1b17b95d!8m2!3d26.8367837!4d83.4272797!16s%2Fg%2F11x6dsmjdh?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D" className="group border border-[#D7AE4D]/20 bg-[#071412] p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-[#D7AE4D]" target='_blank'>

                        <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#D7AE4D]/40 text-[#D7AE4D] transition group-hover:bg-[#D7AE4D] group-hover:text-black">

                            <FaLocationDot className="text-lg" />

                        </div>

                        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#D7AE4D]">
                            Find Us
                        </p>

                        <h3 className="mt-3 font-serif text-2xl">
                            Visit NACHO G
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-white/50">
                            Saraiya Bazar, Sarai Gulharia,
                            <br />
                            Gorakhpur, Uttar Pradesh 273013
                        </p>

                    </a>

                    <div className="group border border-[#D7AE4D]/20 bg-[#071412] p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-[#D7AE4D]">

                        <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#D7AE4D]/40 text-[#D7AE4D] transition group-hover:bg-[#D7AE4D] group-hover:text-black">

                            <FaClock className="text-lg" />

                        </div>

                        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#D7AE4D]">
                            Opening Hours
                        </p>

                        <h3 className="mt-3 font-serif text-2xl">
                            We're Open
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-white/50">
                            Mon - Thu: 12 PM - 11 PM
                            <br />
                            Fri - Sat: 12 PM - 12 AM
                            <br />
                            Sun: 12 PM - 10:30 PM
                        </p>

                    </div>

                </div>

            </section>

            <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">

                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
                    <div className="relative">

                        <img
                            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=85"
                            alt="NACHO G restaurant interior"
                            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[600px]"
                        />

                        <div className="absolute -bottom-5 -right-4 hidden border border-[#D7AE4D]/40 bg-[#0B1C19] px-6 py-5 sm:block">

                            <p className="text-xs uppercase tracking-[0.25em] text-[#D7AE4D]">
                                NACHO G
                            </p>

                            <p className="mt-1 font-serif text-xl">
                                Your Table Is Waiting
                            </p>

                        </div>

                    </div>

                    <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D7AE4D]">
                            Come Visit Us
                        </p>

                        <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                            Good food is
                            <br />
                            better together.
                        </h2>

                        <div className="my-6 h-px w-20 bg-[#D7AE4D]" />

                        <p className="text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                            Bring your favourite people and make your next
                            meal a NACHO-G moment. Whether it's lunch with
                            friends, a family dinner or a late-night craving,
                            we've got a seat waiting for you.
                        </p>

                        <div className="mt-8 space-y-4">

                            <div className="flex items-start gap-4">

                                <FaLocationDot className="mt-1 text-[#D7AE4D]" />

                                <div>
                                    <p className="text-sm font-semibold">
                                        Location
                                    </p>

                                    <p className="mt-1 text-sm text-white/50">
                                        Gorakhpur, Uttar Pradesh 273013
                                    </p>
                                </div>

                            </div>


                            <div className="flex items-start gap-4">

                                <FaClock className="mt-1 text-[#D7AE4D]" />

                                <div>
                                    <p className="text-sm font-semibold">
                                        Opening Hours
                                    </p>

                                    <p className="mt-1 text-sm text-white/50">
                                        Daily from 12 PM
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                            <Link
                                to="/menu"
                                className="inline-flex items-center justify-center gap-3 bg-[#D7AE4D] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-white"
                            >
                                Explore Menu
                                <FaArrowRight />
                            </Link>

                            <a
                                href="tel:+099181 40581+919876543210"
                                className="inline-flex items-center justify-center gap-3 border border-[#D7AE4D] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-[#D7AE4D] transition hover:bg-[#D7AE4D] hover:text-black"
                            >
                                Call Now
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            <section className="border-y border-[#D7AE4D]/20 bg-[#0B1C19] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">

                <div className="mx-auto max-w-3xl">

                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D7AE4D]">
                        Your Experience Matters
                    </p>

                    <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
                        Tell us what you think.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                        Had a great experience? Have an idea that could make
                        your next visit even better? We'd love to hear from
                        you.
                    </p>

                    <a
                        href="mailto:feedback@nachog.com"
                        className="mt-8 inline-flex items-center gap-3 border border-[#D7AE4D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#D7AE4D] transition duration-300 hover:bg-[#D7AE4D] hover:text-black"
                    >
                        Send Feedback
                        <FaArrowRight />
                    </a>

                </div>

            </section>

        </main>
    );
};

export default Contact;