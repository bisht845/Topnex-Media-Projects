import React, { useState } from "react";
import "../../src/index.css"
import HeroImg from "../../src/assets/Hero_img.jpg"
import catImg1 from "../assets/cat-img1.jpeg"
import catImg2 from "../assets/cat-img2.jpeg"
import Kitchen_Garnish from "../assets/Kitchen_Garnish_.jpg"
import Service_1 from "../assets/Service-1.jpg"
import Service_2 from "../assets/Service-2.jpg"
import HeadOfficeImg from "../assets/edit_Earls_.jpg"
const Home = () => {
    const serviceRoles = [
        {
            title: "Host",
            description:
                "You champion and set the tone for the Earls experience by being the first person to welcome our guests. You play an important role by ensuring a steady flow into the restaurant so the service and culinary teams can deliver the best guest experience.",
        },
        {
            title: "Setter",
            description:
                "Setters help create an exceptional guest experience by preparing the restaurant and ensuring everything is ready for service.",
        },
        {
            title: "Server",
            description:
                "Servers create memorable experiences for guests by providing excellent service, understanding their needs, and making every visit special.",
        },
        {
            title: "Bartender",
            description:
                "Bartenders create great guest experiences through excellent drinks, service, and knowledge of the restaurant.",
        },
        {
            title: "Service Management",
            description:
                "Service managers lead and support the service team while creating an environment where both guests and team members can thrive.",
        },
    ];

    const culinaryRoles = [
        {
            title: "Recruit",
            description:
                "Recruit team members who bring passion, energy, and a commitment to creating an exceptional guest experience.",
        },
        {
            title: "Line Team",
            description:
                "The line team works together to prepare high-quality food while maintaining consistency, speed, and excellent kitchen standards.",
        },
        {
            title: "Prep Team",
            description:
                "The prep team ensures ingredients are prepared properly and efficiently so the kitchen is ready for service.",
        },
        {
            title: "Culinary Management",
            description:
                "Culinary management leads the kitchen team, maintains high standards, and helps develop future culinary leaders.",
        },
    ];


    const [openRole, setOpenRole] = useState(null)
    const toggleRole = (role) => {
        setOpenRole(openRole === role ? null : role)
    }

    return (
        <>
            <section className="hero-section w-full h-[600px] h-screen bg-cover bg-center flex justify-center items-center mb-[10px]"
                style={{ backgroundImage: `url(${HeroImg})` }}>
                <div className="text">
                    <p className="first">THE EARLS EXPERIENCE</p>
                    <strong>Love What you do.</strong>
                    <p>Grow into your best self</p>
                </div>
            </section>
            <section className="p-[20px]">
                <div className="text-sec flex justify-center flex-col items-center">
                    <p className="text-center">JOIN THE TEAM</p>
                    <strong>Why Choose Earls?</strong>
                </div>
                <div className="category">
                    <div>
                        <img src={catImg1} alt="Make Life Awesome" />
                        <div className="text-div">
                            <strong>Make Life Awesome</strong>
                            <p>We believe in people living large, purposeful lives filled with fun. That means leading with purpose, creating connections, and growing into the best version of yourself.</p>
                        </div>
                    </div>
                    <div>
                        <img src={catImg2} alt="Make Life Awesome" />
                        <div className="text-div">
                            <strong>Empowerment</strong>
                            <p> Every Earls partner is empowered to make decisions that positively impact the guest and partner experiences. We encourage bold moves that let you live into your purpose.</p>
                        </div>
                    </div>
                    <div>
                        <img src={catImg2} alt="Make Life Awesome" />
                        <div className="text-div">
                            <strong>People Grow Here</strong>
                            <p>Your growth and development is our priority. From line cook to floor manager to marketing specialist, we're committed to helping everyone live into their full potential.</p>
                        </div>
                    </div>
                    <div>
                        <img src={catImg1} alt="Make Life Awesome" />
                        <div className="text-div">
                            <strong>Connection</strong>
                            <p>There's more to life than work! Our various programs within our Employee Resource Groups help provide connection and guidance to lead a life you love.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#3D5B58] py-24 mb-24">

                <div className="max-w-[700px] mx-auto text-center">

                    <p className="uppercase tracking-wide text-sm text-gray-300">
                        THE EARLS WAY
                    </p>

                    <h2 className="mt-5 text-3xl font-serif font-normal leading-tight text-white">
                        We believe in people living large
                        <br />
                        purposeful lives, filled with fun.
                    </h2>

                </div>

                <div className="max-w-[1200px] mx-auto mt-20 px-8">
                    <img
                        src={Kitchen_Garnish}
                        alt="Kitchen_Garnish"
                        className="w-full h-[600px] object-cover"
                    />
                    <div className="inside-earls mt-20 flex justify-between items-start gap-20">

                        <div className="max-w-[450px]">
                            <p className="uppercase tracking-wide text-xl font-medium text-gray-300">
                                Inside Earls
                            </p>

                            <h2 className="mt-3 text-4xl font-serif font-normal leading-tight text-white">
                                What it's like to work at Earls <br />

                            </h2>
                        </div>

                        <div className="max-w-[500px]">
                            <p className="text-lg leading-9 text-white">
                                We believe in the gifts of being present, providing non-judgmental
                                feedback, catching people doing the right thing and creating
                                empowerment by asking questions to build trust, cohesiveness and
                                commitment.
                            </p>
                        </div>

                    </div>
                </div>

            </section>
            <section className="roles-section mb-15">
                <div className="roles-heading flex justify-center flex-col items-center">
                    <p className="uppercase text-[16px] font-medium tracking-wide">Explore opportunities</p>
                    <h2 className="mt-4 text-4xl font-serif font-normal">Roles + Department</h2>
                </div>
                <div className="roles-container mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-6">
                    <div className="roles-card bg-[#EAE8DE]">
                        <div className="role-image">
                            <img src={Service_1} alt="Service card" className="w-full h-[300] sm:h-[400px] lg:h[430px] object-cover " />
                        </div>
                        <div className="role-content px-6 px-8 sm:px-10 sm:py-10 text-center">
                            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#003b52]">Service</h2>
                            <p className="mt-5 text-base  leading-7 text-[#003b52]">Start a successful hospitality career here, where our intensive in-house training teaches you how to lead your teams and deliver exceptional service to our guests.</p>
                        </div>
                        <div className="roles-list px-6 px-8 pb-16">
                            {serviceRoles.map((role) => (
                                <div key={role.title} className="border-t border-[#28566a]">
                                    <button className="w-full py-4 flex items-center justify-between" onClick={() => toggleRole(role.title)}>
                                        <span className="text-xl  font-semibold text-[#003b52]">{role.title}</span>
                                        <span className="text-2xl  font-light text-[#003b4d]">{openRole === role.title ? "-" : "+"}</span>
                                    </button>
                                    {openRole === role.title && (
                                        <div className="pb-7 pr-10">
                                            <p className="text-[16px] leading-relaxed text-[#28566a]">
                                                {role.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="roles-card bg-[#EAE8DE]">
                        <div className="role-image">
                            <img src={Service_2} alt="Service card" className="w-full h-[300] sm:h-[400px] lg:h[430px] object-cover " />
                        </div>
                        <div className="role-content px-6 px-8 sm:px-10 sm:py-10 text-center">
                            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#003b52]">Culinary</h2>
                            <p className="mt-5 text-base  leading-7 text-[#003b52]">Our kitchen is the best place to grow your career as a chef. Our partners go through rigorous in-house training that sets them up to excel as a chef and a leader.</p>
                        </div>
                        <div className="roles-list px-6 px-8">
                            {culinaryRoles.map((role) => (
                                <div key={role.title} className="border-t border-[#28566a]">
                                    <button className="w-full py-4 flex items-center justify-between" onClick={() => toggleRole(role.title)}>
                                        <span className="text-xl  font-semibold text-[#003b52]">{role.title}</span>
                                        <span className="text-2xl  font-light text-[#003b4d]">{openRole === role.title ? "-" : "+"}</span>
                                    </button>
                                    {openRole === role.title && (
                                        <div className="pb-7 pr-10">
                                            <p className="text-[16px] leading-relaxed text-[#28566a]">
                                                {role.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="head-ofc-sec m-5 bg-[#EAE8DE]">
                <div className="head-ofc-img ">
                    <img src={HeadOfficeImg} alt="" className="h-[400px] w-full object-cover" />
                </div>
                <div className="head-ofc-content flex flex-col items-center text-center py-8">
                    <h2 className="text-3xl text-[#003b52]">Head Office</h2>
                    <p className="mt-4  text-base leading-7 text-[#003b52]">Earls Head Office in Vancouver, BC provides the roadmap for all of our restaurants across North <br /> America. Everything you experience at your favourite Earls starts here.</p>
                </div>
                <div className="flex grid grid-cols-1 lg:grid-cols-2 mt-8">
                 <div className="roles-list px-6 px-8 pb-16">
                            {serviceRoles.map((role) => (
                                <div key={role.title} className="border-t border-[#28566a]">
                                    <button className="w-full py-4 flex items-center justify-between" onClick={() => toggleRole(role.title)}>
                                        <span className="text-xl  font-semibold text-[#003b52]">{role.title}</span>
                                        <span className="text-2xl  font-light text-[#003b4d]">{openRole === role.title ? "-" : "+"}</span>
                                    </button>
                                    {openRole === role.title && (
                                        <div className="pb-7 pr-10">
                                            <p className="text-[16px] leading-relaxed text-[#28566a]">
                                                {role.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                 </div>
                 <div className="roles-list px-6 px-8 pb-16">
                            {culinaryRoles.map((role) => (
                                <div key={role.title} className="border-t border-[#28566a]">
                                    <button className="w-full py-4 flex items-center justify-between" onClick={() => toggleRole(role.title)}>
                                        <span className="text-xl  font-semibold text-[#003b52]">{role.title}</span>
                                        <span className="text-2xl  font-light text-[#003b4d]">{openRole === role.title ? "-" : "+"}</span>
                                    </button>
                                    {openRole === role.title && (
                                        <div className="pb-7 pr-10">
                                            <p className="text-[16px] leading-relaxed text-[#28566a]">
                                                {role.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                 </div>
                 </div>
            </section>
        </>
    )
}
export default Home;    