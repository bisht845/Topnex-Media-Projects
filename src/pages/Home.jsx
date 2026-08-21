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
<section
    className="hero-section flex h-[500px] w-full items-center justify-center bg-cover bg-center mb-[10px] sm:h-[550px] md:h-[600px] lg:h-screen"
    style={{ backgroundImage: `url(${HeroImg})` }}
>
    <div className="text px-5 text-center sm:px-8">
        <p className="first">THE EARLS EXPERIENCE</p>
        <strong>Love What you do.</strong>
        <p>Grow into your best self</p>
    </div>
</section>


<section className="px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-5 lg:py-16">

    {/* Heading */}
    <div className="text-sec flex flex-col items-center justify-center text-center">

        <p className="text-base sm:text-lg">
            JOIN THE TEAM
        </p>

        <strong className="mt-3 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Why Choose Earls?
        </strong>

    </div>


    {/* Category Cards */}
    <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-6">

        {/* Card 1 */}
        <div className="min-w-0">

            <img
                src={catImg1}
                alt="Make Life Awesome"
                className="block h-[400px] w-full object-cover sm:h-[350px] md:h-[400px] lg:h-[450px]"
            />

            <div className="text-div mt-6">

                <strong className="block text-3xl leading-tight sm:text-3xl lg:text-2xl">
                    Make Life Awesome
                </strong>

                <p className="mt-3 text-base leading-7">
                    We believe in people living large, purposeful lives filled with fun. That means leading with purpose, creating connections, and growing into the best version of yourself.
                </p>

            </div>

        </div>


        {/* Card 2 */}
        <div className="min-w-0">

            <img
                src={catImg2}
                alt="Empowerment"
                className="block h-[400px] w-full object-cover sm:h-[350px] md:h-[400px] lg:h-[450px]"
            />

            <div className="text-div mt-6">

                <strong className="block text-3xl leading-tight sm:text-3xl lg:text-2xl">
                    Empowerment
                </strong>

                <p className="mt-3 text-base leading-7">
                    Every Earls partner is empowered to make decisions that positively impact the guest and partner experiences. We encourage bold moves that let you live into your purpose.
                </p>

            </div>

        </div>


        {/* Card 3 */}
        <div className="min-w-0">

            <img
                src={catImg2}
                alt="People Grow Here"
                className="block h-[400px] w-full object-cover sm:h-[350px] md:h-[400px] lg:h-[450px]"
            />

            <div className="text-div mt-6">

                <strong className="block text-3xl leading-tight sm:text-3xl lg:text-2xl">
                    People Grow Here
                </strong>

                <p className="mt-3 text-base leading-7">
                    Your growth and development is our priority. From line cook to floor manager to marketing specialist, we're committed to helping everyone live into their full potential.
                </p>

            </div>

        </div>


        {/* Card 4 */}
        <div className="min-w-0">

            <img
                src={catImg1}
                alt="Connection"
                className="block h-[400px] w-full object-cover sm:h-[350px] md:h-[400px] lg:h-[450px]"
            />

            <div className="text-div mt-6">

                <strong className="block text-3xl leading-tight sm:text-3xl lg:text-2xl">
                    Connection
                </strong>

                <p className="mt-3 text-base leading-7">
                    There's more to life than work! Our various programs within our Employee Resource Groups help provide connection and guidance to lead a life you love.
                </p>

            </div>

        </div>

    </div>

</section>


<section className="mb-16 bg-[#3D5B58] py-12 sm:py-16 md:py-20 lg:mb-24 lg:py-24">

    <div className="mx-auto max-w-[700px] px-5 text-center sm:px-8">
        <p className="uppercase tracking-wide text-sm text-gray-300">
            THE EARLS WAY
        </p>

        <h2 className="mt-5 text-3xl font-serif font-normal leading-tight text-white sm:text-4xl">
            We believe in people living large
            <br className="hidden sm:block" />
            purposeful lives, filled with fun.
        </h2>
    </div>


    <div className="mx-auto mt-12 max-w-[1200px] px-5 sm:mt-16 sm:px-8 lg:mt-20">

        <img
            src={Kitchen_Garnish}
            alt="Kitchen_Garnish"
            className="h-[300px] w-full object-cover sm:h-[400px] md:h-[500px] lg:h-[600px]"
        />


        <div className="inside-earls mt-12 flex flex-col gap-10 sm:mt-16 md:mt-20 lg:flex-row lg:items-start lg:justify-between lg:gap-20">

            <div className="max-w-[450px]">
                <p className="uppercase tracking-wide text-xl font-medium text-gray-300">
                    Inside Earls
                </p>

                <h2 className="mt-3 text-3xl font-serif font-normal leading-tight text-white sm:text-4xl">
                    What it's like to work at Earls
                </h2>
            </div>


            <div className="max-w-[500px]">
                <p className="text-base leading-8 text-white sm:text-lg sm:leading-9">
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

    <div className="roles-heading flex flex-col items-center justify-center px-5 text-center">
        <p className="uppercase text-[16px] font-medium tracking-wide">
            Explore opportunities
        </p>

        <h2 className="mt-4 text-3xl font-serif font-normal sm:text-4xl">
            Roles + Department
        </h2>
    </div>


    <div className="roles-container mt-10 grid grid-cols-1 gap-8 px-5 sm:mt-12 sm:px-8 lg:mt-16 lg:grid-cols-2 lg:px-6">

        {/* Service */}
        <div className="roles-card bg-[#EAE8DE]">

            <div className="role-image">
                <img
                    src={Service_1}
                    alt="Service card"
                    className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[430px]"
                />
            </div>


            <div className="role-content px-6 py-8 text-center sm:px-10 sm:py-10">

                <h2 className="text-3xl font-serif font-normal text-[#003b52] sm:text-4xl">
                    Service
                </h2>

                <p className="mt-5 text-base leading-7 text-[#003b52]">
                    Start a successful hospitality career here, where our intensive in-house training teaches you how to lead your teams and deliver exceptional service to our guests.
                </p>

            </div>


            <div className="roles-list px-6 pb-12 sm:px-8 sm:pb-16">

                {serviceRoles.map((role) => (
                    <div
                        key={role.title}
                        className="border-t border-[#28566a]"
                    >
                        <button
                            className="flex w-full items-center justify-between py-4"
                            onClick={() => toggleRole(role.title)}
                        >
                            <span className="text-lg font-semibold text-[#003b52] sm:text-xl">
                                {role.title}
                            </span>

                            <span className="text-2xl font-light text-[#003b4d]">
                                {openRole === role.title ? "-" : "+"}
                            </span>
                        </button>

                        {openRole === role.title && (
                            <div className="pb-7 pr-5 sm:pr-10">
                                <p className="text-[16px] leading-relaxed text-[#28566a]">
                                    {role.description}
                                </p>
                            </div>
                        )}
                    </div>
                ))}

            </div>
        </div>


        {/* Culinary */}
        <div className="roles-card bg-[#EAE8DE]">

            <div className="role-image">
                <img
                    src={Service_2}
                    alt="Service card"
                    className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[430px]"
                />
            </div>


            <div className="role-content px-6 py-8 text-center sm:px-10 sm:py-10">

                <h2 className="text-3xl font-serif font-normal text-[#003b52] sm:text-4xl">
                    Culinary
                </h2>

                <p className="mt-5 text-base leading-7 text-[#003b52]">
                    Our kitchen is the best place to grow your career as a chef. Our partners go through rigorous in-house training that sets them up to excel as a chef and a leader.
                </p>

            </div>


            <div className="roles-list px-6 pb-12 sm:px-8">

                {culinaryRoles.map((role) => (
                    <div
                        key={role.title}
                        className="border-t border-[#28566a]"
                    >
                        <button
                            className="flex w-full items-center justify-between py-4"
                            onClick={() => toggleRole(role.title)}
                        >
                            <span className="text-lg font-semibold text-[#003b52] sm:text-xl">
                                {role.title}
                            </span>

                            <span className="text-2xl font-light text-[#003b4d]">
                                {openRole === role.title ? "-" : "+"}
                            </span>
                        </button>

                        {openRole === role.title && (
                            <div className="pb-7 pr-5 sm:pr-10">
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


<section className="head-ofc-sec m-3 bg-[#EAE8DE] sm:m-5">

    <div className="head-ofc-img">
        <img
            src={HeadOfficeImg}
            alt=""
            className="h-[250px] w-full object-cover sm:h-[350px] md:h-[400px]"
        />
    </div>


    <div className="head-ofc-content flex flex-col items-center px-5 py-8 text-center sm:px-8">

        <h2 className="text-3xl text-[#003b52]">
            Head Office
        </h2>

        <p className="mt-4 text-base leading-7 text-[#003b52]">
            Earls Head Office in Vancouver, BC provides the roadmap for all of our restaurants across North
            <br className="hidden md:block" />
            America. Everything you experience at your favourite Earls starts here.
        </p>

    </div>


    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2">

        <div className="roles-list px-6 pb-12 sm:px-8 sm:pb-16">

            {serviceRoles.map((role) => (
                <div
                    key={role.title}
                    className="border-t border-[#28566a]"
                >

                    <button
                        className="flex w-full items-center justify-between py-4"
                        onClick={() => toggleRole(role.title)}
                    >

                        <span className="text-lg font-semibold text-[#003b52] sm:text-xl">
                            {role.title}
                        </span>

                        <span className="text-2xl font-light text-[#003b4d]">
                            {openRole === role.title ? "-" : "+"}
                        </span>

                    </button>

                    {openRole === role.title && (
                        <div className="pb-7 pr-5 sm:pr-10">
                            <p className="text-[16px] leading-relaxed text-[#28566a]">
                                {role.description}
                            </p>
                        </div>
                    )}

                </div>
            ))}

        </div>


        <div className="roles-list px-6 pb-12 sm:px-8 sm:pb-16">

            {culinaryRoles.map((role) => (
                <div
                    key={role.title}
                    className="border-t border-[#28566a]"
                >

                    <button
                        className="flex w-full items-center justify-between py-4"
                        onClick={() => toggleRole(role.title)}
                    >

                        <span className="text-lg font-semibold text-[#003b52] sm:text-xl">
                            {role.title}
                        </span>

                        <span className="text-2xl font-light text-[#003b4d]">
                            {openRole === role.title ? "-" : "+"}
                        </span>

                    </button>

                    {openRole === role.title && (
                        <div className="pb-7 pr-5 sm:pr-10">
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