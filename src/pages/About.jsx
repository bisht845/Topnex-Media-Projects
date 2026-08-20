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
            <section className="about w-full h-[600px] bg-cover bg-center flex justify-center items-center bg-black/50 bg-blend-multiply" style={{ backgroundImage: `url(${aboutImg})` }}>
                <div className="about-txt text-white text-center ">
                    <h1 className="text-xl uppercase font-semibold">our strory</h1>
                    <p className="text-4xl pt-5">A collection of <b>independently compelling</b> restaurants.</p>
                    <p className="text-base  font-semibold pt-10">From the food and drinks to the art on the walls and design of our spaces, every location is a <br />reflection of the community it's in.</p>
                </div>
            </section>

            <section className="bg-[#FAF9F6] grid grid-cols-1 lg:grid-cols-2 mt-10 mb-10">

                <div className="earls-his-txt flex flex-col justify-center items-center px-8 py-12 lg:px-16 text-center">
                    <span className="uppercase text-xs tracking-[0.2em] font-medium text-slate-700 mb-3">
                        Earls History
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-serif text-[#0C2340] mb-5 font-normal">
                        Our Family Run Business
                    </h2>

                    <p className="text-slate-600 text-sm leading-relaxed max-w-md mb-8">
                        Founded in 1982 by father-son duo Bus and Stan Fuller, Earls has been built on the foundation of family since day one. While we've now grown to more locations across North America, that close-knit feeling is still rooted in our company today.
                    </p>

                    <button className="border border-[#0C2340] text-[#0C2340] px-8 py-3 text-xs tracking-widest font-medium uppercase hover:bg-[#0C2340] hover:text-white transition-colors duration-200">
                        Read More
                    </button>
                </div>

                {/* Image Column */}
                <div className="history-img w-full h-full">
                    <img
                        src={aboutImg}
                        alt="Earls History"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            <section className="flex justify-center px-8 py-10 bg-[#E4E5E0]">
                <div className=" max-w-4xl our-mission text-center mt-20">
                    <h1 className="uppercase  text-[16px] text-slate-600 font-medium tracking-[0.2em] mb-10">Our mission</h1>
                    <p className="font-serif-display text-3xl  text-center text-[#0c2340] max-w-4xl mb-10">To deliver <span className="font-semibold">irresistible food and drink and an engaging experience </span> to every  one of our guests.</p>
                    <p className="text-slate-600">At our core, we believe that great hospitality starts with building authentic relationships. Whether that’s you catching up with your favourite people over a great meal at Earls or the connections made over the years between our teams and our loyal guests. It also speaks to the collaborations we’ve created with esteemed chefs and world-renowned bartenders, the longstanding partnerships we have with our vendors and suppliers, or the lifelong friendships that are made while people work at our company. The genuine connections that are built here give life to our restaurants. Above all else, we’re inspired by the relationships we get to build with you, and our purpose is to work hard everyday to offer the best dining experiences we can. That’s our ongoing commitment.</p>
                </div>

            </section>

            <section className="flex justify-center px-8 py-10 flex-col items-center">
                <div className="flex-col max-w-4xl our-mission text-center mt-20">
                    <h1 className="uppercase  text-[16px] text-slate-600 font-medium tracking-[0.2em] mb-2">Earls culture</h1>
                    <p className="font-serif-display text-3xl font-semibold text-center text-[#0c2340] mb-5">Our People</p>
                    <p className="text-slate-600">As a family-owned business, our people are at the heart of everything we do, and we’re driven to create purpose within our leaders. When we talk about the Earls Experience, we’re talking about the culture that’s built on the declaration of living large, purposeful lives full of fun.</p>
                </div>
                <div className="grid grid-cols-2 gap-10 mt-20">
                    <div className="peoples-img">
                        <img src={peopleImg1} alt="peopleImg1" className="h-[400px] object-cover" />
                    </div>
                    <div className="peoples-img">
                        <img src={peopleImg2} alt="peopleImg2" className="h-[400px] object-cover" />
                    </div>
                </div>
            </section>

            <section className="flex justify-center text-center bg-[#E4E5E0] m-5 mb-20">
                <div className="flex justify-center items-center flex-col p-10">
                    <h1 className="uppercase text-[16px] text-slate-600 font-medium tracking-[0.2em] mb-5">carrer</h1>
                    <p className="text-3xl font-serif-display font-semibold text-[#0c2340] mb-5">The Earls Experience</p>
                    <p className="max-w-md text-slate-600">At Earls, 'People Grow Here' isn't just a slogan; it's our guiding principle. Join us for continual evolution, empowerment, and career growth. Your journey to cultivate potential starts here.</p>
                    <button className="w-[200px] border border-[#0C2340] text-[#0C2340] px-4 py-3 mt-10 text-xs tracking-widest font-medium  hover:bg-[#0C2340] hover:text-white transition-colors duration-200">
                        Start Your Journey
                    </button>
                </div>
            </section>

            <section className="bg-[#3D5B58] p-10">
                <div className="grid grid-cols-2 gap-10 text-white">
                    <div className="">
                        <img src={foodImage} alt="foodImage" className="h-[500px] object-cover w-full" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="uppercase text-[18px] pb-5">Culinary innovation</h1>
                        <p className="text-3xl font-serif-display mb-10">Our passion: <span className="font-bold font-mono">Food + Drink</span></p>
                        <p className="max-w-2xl px-10 text-center">Our Test Kitchen is in the heart of downtown Vancouver, where our Chefs innovate new recipes and shape the future of our menus. Our passionate Culinary Development Team develops our dishes from creative conception through rigorous tastings and onto our menus, using guest feedback to ensure every plate delivers an exceptional dining experience.</p>

                        <button className="font-medium px-8 py-3 mt-10 bg-white text-[#0c2340] hover:bg-[#0c2340] hover:text-white transition-colors duration-200">See Our Menu</button>
                    </div>
                </div>
            </section>

            <section className="px-12 py-18">
                <div className="grid grid-cols-3 gap-10">
                    <div>
                        <p className="uppercase mb-4 text-slate-600">From the Blog</p>
                        <h1 className="text-[#0C2340] text-3xl  font-semibold mb-5 tracking-widest uppercase">Earls <br /> Update</h1>
                        <p className="uppercase mb-5 text-slate-600">keep updated</p>
                        <div className="flex gap-5 ">
                            <a href="#"><FaInstagram className="bg-[#0C2340] text-white rounded-full text-xl p-1"></FaInstagram></a>
                            <a href="#"><FaFacebook className="bg-[#0C2340] text-white rounded-full text-xl p-1"></FaFacebook></a>
                            <a href="#"><FaLinkedin className="bg-[#0C2340] text-white rounded-full text-xl p-1"></FaLinkedin></a>
                            <a href="#"><FaYoutube className="bg-[#0C2340] text-white rounded-full text-xl p-1"></FaYoutube></a>
                        </div>
                    </div>
                    <div className="" >
                        <img src={foodImage} alt="#" className="h-[300px] w-full object-cover mb-5"/>
                        <h1 className="font-semibold text-[#0C2340] text-[18px]">Upgrade your Matchday with Don Julio at Earls</h1>
                        <button className="font-medium px-12 py-3 mt-10 bg-[#0c2340] text-white border hover:bg-white hover:text-[#0c2340]  transition-colors duration-200">See More</button>
                    </div>
                    <div>
                        <img src={blogImage} alt="#" className="h-[300px] w-full object-cover mb-5"/>
                        <h1 className="font-semibold text-[#0C2340] text-[18px]">Weekend plan start here</h1>
                    </div>
                </div>
                    
            </section>
        </>
    )
}
export default About;