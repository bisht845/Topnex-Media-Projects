import React from "react";
import aboutImg from '../assets/about-image.jpg'
import peopleImg1 from '../assets/peopleImg1.jpg'
import peopleImg2 from '../assets/peopleImg2.jpg'
import foodImage from '../assets/foodImage.jpg'
import blogImage from '../assets/blogimg.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const About = () => {
    return (
        <>
 {/* Hero Section */}
<section
    className="about flex h-[500px] w-full items-center justify-center bg-cover bg-center bg-black/50 bg-blend-multiply sm:h-[550px] md:h-[600px]"
    style={{ backgroundImage: `url(${aboutImg})` }}
>
    <div className="about-txt px-5 text-center text-white sm:px-8 md:px-10">

        <h1 className="text-xl font-semibold uppercase sm:text-2xl">
            our story
        </h1>

        <p className="pt-5 text-3xl leading-tight sm:text-4xl md:text-5xl">
            A collection of <b>independently compelling</b> restaurants.
        </p>

        <p className="pt-8 text-sm font-semibold leading-6 sm:pt-10 sm:text-base sm:leading-7">
            From the food and drinks to the art on the walls and design of our spaces,
            every location is a{" "}
            <br className="hidden md:block" />
            reflection of the community it's in.
        </p>

    </div>
</section>


{/* History Section */}
<section className="mt-6 mb-6 grid grid-cols-1 bg-[#FAF9F6] md:mt-10 md:mb-10 lg:grid-cols-2">

    {/* Text */}
    <div className="earls-his-txt flex flex-col items-center justify-center px-5 py-12 text-center sm:px-8 md:px-12 lg:px-16">

        <span className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-700">
            Earls History
        </span>

        <h2 className="mb-5 text-3xl font-serif font-normal text-[#0C2340] sm:text-4xl">
            Our Family Run Business
        </h2>

        <p className="mb-8 max-w-md text-sm leading-relaxed text-slate-600">
            Founded in 1982 by father-son duo Bus and Stan Fuller, Earls has been built on the foundation of family since day one. While we've now grown to more locations across North America, that close-knit feeling is still rooted in our company today.
        </p>

        <button className="border border-[#0C2340] px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#0C2340] transition-colors duration-200 hover:bg-[#0C2340] hover:text-white">
            Read More
        </button>

    </div>


    {/* Image */}
    <div className="history-img w-full">

        <img
            src={aboutImg}
            alt="Earls History"
            className="h-[350px] w-full object-cover sm:h-[450px] md:h-[500px] lg:h-full lg:min-h-[550px]"
        />

    </div>

</section>


{/* Mission */}
<section className="flex justify-center bg-[#E4E5E0] px-5 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20">

    <div className="our-mission mt-8 max-w-4xl text-center sm:mt-12 md:mt-20">

        <h1 className="mb-8 text-[16px] font-medium uppercase tracking-[0.2em] text-slate-600 sm:mb-10">
            Our mission
        </h1>

        <p className="mb-8 text-center font-serif-display text-2xl text-[#0c2340] sm:mb-10 sm:text-3xl md:text-4xl">
            To deliver{" "}
            <span className="font-semibold">
                irresistible food and drink and an engaging experience
            </span>{" "}
            to every one of our guests.
        </p>

        <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            At our core, we believe that great hospitality starts with building authentic relationships. Whether that’s you catching up with your favourite people over a great meal at Earls or the connections made over the years between our teams and our loyal guests. It also speaks to the collaborations we’ve created with esteemed chefs and world-renowned bartenders, the longstanding partnerships we have with our vendors and suppliers, or the lifelong friendships that are made while people work at our company. The genuine connections that are built here give life to our restaurants. Above all else, we’re inspired by the relationships we get to build with you, and our purpose is to work hard everyday to offer the best dining experiences we can. That’s our ongoing commitment.
        </p>

    </div>

</section>


{/* Culture / People */}
<section className="flex flex-col items-center justify-center px-5 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20">

    <div className="our-mission mt-8 max-w-4xl text-center sm:mt-12 md:mt-20">

        <h1 className="mb-2 text-[16px] font-medium uppercase tracking-[0.2em] text-slate-600">
            Earls culture
        </h1>

        <p className="mb-5 font-serif-display text-2xl font-semibold text-[#0c2340] sm:text-3xl">
            Our People
        </p>

        <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            As a family-owned business, our people are at the heart of everything we do, and we’re driven to create purpose within our leaders. When we talk about the Earls Experience, we’re talking about the culture that’s built on the declaration of living large, purposeful lives full of fun.
        </p>

    </div>


    {/* People Images */}
    <div className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 md:mt-20 md:gap-10">

        <div className="peoples-img">
            <img
                src={peopleImg1}
                alt="peopleImg1"
                className="h-[350px] w-full object-cover sm:h-[400px] md:h-[450px]"
            />
        </div>

        <div className="peoples-img">
            <img
                src={peopleImg2}
                alt="peopleImg2"
                className="h-[350px] w-full object-cover sm:h-[400px] md:h-[450px]"
            />
        </div>

    </div>

</section>


{/* Career */}
<section className="m-3 mb-12 flex justify-center bg-[#E4E5E0] text-center sm:m-5 sm:mb-16 md:mb-20">

    <div className="flex max-w-2xl flex-col items-center justify-center p-8 sm:p-10 md:p-12">

        <h1 className="mb-5 text-[16px] font-medium uppercase tracking-[0.2em] text-slate-600">
            carrer
        </h1>

        <p className="mb-5 text-2xl font-serif-display font-semibold text-[#0c2340] sm:text-3xl">
            The Earls Experience
        </p>

        <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            At Earls, 'People Grow Here' isn't just a slogan; it's our guiding principle. Join us for continual evolution, empowerment, and career growth. Your journey to cultivate potential starts here.
        </p>

        <button className="mt-8 w-full max-w-[200px] border border-[#0C2340] px-4 py-3 text-xs font-medium tracking-widest text-[#0C2340] transition-colors duration-200 hover:bg-[#0C2340] hover:text-white sm:mt-10">
            Start Your Journey
        </button>

    </div>

</section>


{/* Culinary Innovation */}
<section className="bg-[#3D5B58] p-5 sm:p-8 md:p-10">

    <div className="grid grid-cols-1 gap-10 text-white lg:grid-cols-2 lg:gap-10">

        {/* Food Image */}
        <div>
            <img
                src={foodImage}
                alt="foodImage"
                className="h-[350px] w-full object-cover sm:h-[450px] md:h-[500px]"
            />
        </div>


        {/* Content */}
        <div className="flex flex-col items-center justify-center text-center">

            <h1 className="pb-5 text-base uppercase sm:text-[18px]">
                Culinary innovation
            </h1>

            <p className="mb-8 text-2xl font-serif-display sm:mb-10 sm:text-3xl">
                Our passion:{" "}
                <span className="font-bold font-mono">
                    Food + Drink
                </span>
            </p>

            <p className="max-w-2xl px-2 text-sm leading-7 sm:px-6 sm:text-base sm:leading-8 md:px-10">
                Our Test Kitchen is in the heart of downtown Vancouver, where our Chefs innovate new recipes and shape the future of our menus. Our passionate Culinary Development Team develops our dishes from creative conception through rigorous tastings and onto our menus, using guest feedback to ensure every plate delivers an exceptional dining experience.
            </p>

            <button className="mt-8 bg-white px-8 py-3 font-medium text-[#0c2340] transition-colors duration-200 hover:bg-[#0c2340] hover:text-white sm:mt-10">
                See Our Menu
            </button>

        </div>

    </div>

</section>


{/* Blog Section */}
<section className="px-5 py-12 sm:px-8 sm:py-16 md:px-10 lg:px-12 lg:py-20">

    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">

        {/* Blog Intro */}
        <div>

            <p className="mb-4 uppercase text-slate-600">
                From the Blog
            </p>

            <h1 className="mb-5 text-3xl font-semibold uppercase tracking-widest text-[#0C2340] sm:text-4xl">
                Earls <br />
                Update
            </h1>

            <p className="mb-5 uppercase text-slate-600">
                keep updated
            </p>

            <div className="flex gap-5">

                <a href="#">
                    <FaInstagram className="rounded-full bg-[#0C2340] p-1 text-xl text-white" />
                </a>

                <a href="#">
                    <FaFacebook className="rounded-full bg-[#0C2340] p-1 text-xl text-white" />
                </a>

                <a href="#">
                    <FaLinkedin className="rounded-full bg-[#0C2340] p-1 text-xl text-white" />
                </a>

                <a href="#">
                    <FaYoutube className="rounded-full bg-[#0C2340] p-1 text-xl text-white" />
                </a>

            </div>

        </div>


        {/* Blog 1 */}
        <div>

            <img
                src={foodImage}
                alt="#"
                className="mb-5 h-[250px] w-full object-cover sm:h-[300px]"
            />

            <h1 className="text-[18px] font-semibold text-[#0C2340]">
                Upgrade your Matchday with Don Julio at Earls
            </h1>

            <button className="mt-8 border bg-[#0c2340] px-10 py-3 font-medium text-white transition-colors duration-200 hover:bg-white hover:text-[#0c2340] sm:mt-10 sm:px-12">
                See More
            </button>

        </div>


        {/* Blog 2 */}
        <div>

            <img
                src={blogImage}
                alt="#"
                className="mb-5 h-[250px] w-full object-cover sm:h-[300px]"
            />

            <h1 className="text-[18px] font-semibold text-[#0C2340]">
                Weekend plan start here
            </h1>

        </div>

    </div>

</section>
        </>
    )
}
export default About;