import React from "react";
import contactImg from "../assets/contact-img.jpg";

const Contact = () => {
    return (
        <>
            <section className="w-full">

                <div className="flex min-h-[calc(100vh-105px)] w-full flex-col bg-[#F3F1E9] pt-5 pb-5 pl-0.5 md:flex-row md:pt-10 md:pb-10">

                    {/* Image */}
                    <div className="h-[350px] w-full md:h-auto md:w-1/2">
                        <img
                            src={contactImg}
                            alt="Contact"
                            className="h-full w-full object-cover"
                        />
                    </div>


                    {/* Content */}
                    <div className="flex w-full flex-col justify-center px-6 py-12 sm:px-10 md:w-1/2 md:px-12 lg:px-20">

                        <p className="mb-6 text-[16px] uppercase text-[#286078] sm:mb-8 sm:text-[18px] md:mb-12 md:text-[20px]">
                            Contact Us
                        </p>

                        <h1 className="mb-6 font-serif text-3xl font-bold text-[#07364a] sm:mb-8 sm:text-4xl md:mb-12 md:text-[44px]">
                            Let's get in touch.
                        </h1>

                        <p className="text-[17px] leading-7 text-[#286078] sm:text-[19px] sm:leading-8 md:text-[21px]">
                            Have a question for us?
                            <br />
                            Take a look below to learn more.
                        </p>

                    </div>

                </div>

            </section>


            <section className="w-full px-5 py-10 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {/* Contact Us */}
                    <div className="flex min-h-[350px] flex-col items-center bg-[#f3f1e9] px-6 py-12 text-center sm:px-10 sm:py-14 md:min-h-[380px] md:py-16">

                        <h2 className="mb-8 text-[20px] uppercase text-[#286078] sm:mb-10 sm:text-[22px] md:mb-12 md:text-[24px]">
                            Contact Us
                        </h2>

                        <p className="text-[17px] leading-7 text-[#286078] sm:text-[18px] md:text-[20px]">
                            Earls Head Office
                            <br />
                            Level 4, 234 W 3rd Ave
                            <br />
                            Vancouver, BC, Canada V5Y 1G1
                            <br />
                            604–646–4880
                        </p>

                        <a
                            href="mailto:comments@earls.ca"
                            className="mt-8 text-[15px] text-[#286078] underline sm:mt-10 sm:text-[16px] md:mt-12 md:text-[17px]"
                        >
                            comments@earls.ca&nbsp;&nbsp; →
                        </a>

                    </div>

                    <div className="flex min-h-[350px] flex-col items-center bg-[#f3f1e9] px-6 py-12 text-center sm:px-10 sm:py-14 md:min-h-[380px] md:py-16">

                        <h2 className="mb-8 text-[20px] uppercase text-[#286078] sm:mb-10 sm:text-[22px] md:mb-12 md:text-[24px]">
                            Have Feedback For Us?
                        </h2>

                        <p className="max-w-[450px] text-[17px] leading-7 text-[#286078] sm:text-[18px] md:text-[20px]">
                            If you'd like to leave feedback on your most
                            <br className="hidden sm:block" />
                            recent experience, please click through to our
                            <br className="hidden sm:block" />
                            feedback form.
                        </p>

                        <a
                            href="#"
                            className="mt-8 text-[15px] text-[#286078] underline sm:mt-10 sm:text-[16px] md:mt-12 md:text-[17px]"
                        >
                            Feedback Form&nbsp;&nbsp; →
                        </a>

                    </div>

                    <div className="flex min-h-[350px] flex-col items-center bg-[#f3f1e9] px-6 py-12 text-center sm:px-10 sm:py-14 md:min-h-[380px] md:py-16">

                        <h2 className="mb-8 text-[20px] uppercase text-[#286078] sm:mb-10 sm:text-[22px] md:mb-12 md:text-[24px]">
                            Media Inquiries
                        </h2>

                        <p className="text-[17px] leading-7 text-[#286078] sm:text-[18px] md:text-[20px]">
                            Please direct all media inquiries to
                        </p>

                        <a
                            href="mailto:media@earls.ca"
                            className="mt-8 text-[15px] text-[#286078] underline sm:mt-10 sm:text-[16px] md:mt-12 md:text-[17px]"
                        >
                            media@earls.ca&nbsp;&nbsp; →
                        </a>

                    </div>

                </div>

            </section>
        </>
    );
};

export default Contact;