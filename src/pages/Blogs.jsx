import React from "react";
import blogHero1 from "../assets/blogHero.jpg"
import blogHero2 from "../assets/blogImg.jpg"
import blogHero3 from "../assets/Service-1.jpg"
import blogHero4 from "../assets/Service-2.jpg"

const Blogs = () => {
    const BlogData = [
        {
            id: 1,
            date: "December 12, 2024",
            image: blogHero1,
            title: "Stan & the late Bus Fuller: Induction into the Business Laureates of BC Hall of Fame!",
            discription: "We’re thrilled to announce that Stan Fuller and the late Bus Fuller, the incredible father-son duo behind Earls Kitchen + Bar, have been inducted into the prestigious Business Laureates of British Columbia Hall of Fame! Stan’s"

        },
        {
            id: 2,
            date: "may 10, 2024",
            image: blogHero2,
            title: "Stan & the late Bus Fuller: Induction into the Business Laureates of BC Hall of Fame!",
            discription: "We’re thrilled to announce that Stan Fuller and the late Bus Fuller, the incredible father-son duo behind Earls Kitchen + Bar, have been inducted into the prestigious Business Laureates of British Columbia Hall of Fame! Stan’s"

        },
        {
            id: 3,
            date: "june 10, 2025",
            image: blogHero3,
            title: "Stan & the late Bus Fuller: Induction into the Business Laureates of BC Hall of Fame!",
            discription: "We’re thrilled to announce that Stan Fuller and the late Bus Fuller, the incredible father-son duo behind Earls Kitchen + Bar, have been inducted into the prestigious Business Laureates of British Columbia Hall of Fame! Stan’s"

        },
        {
            id: 4,
            date: "april 12, 2025",
            image: blogHero4,
            title: "Stan & the late Bus Fuller: Induction into the Business Laureates of BC Hall of Fame!",
            discription: "We’re thrilled to announce that Stan Fuller and the late Bus Fuller, the incredible father-son duo behind Earls Kitchen + Bar, have been inducted into the prestigious Business Laureates of British Columbia Hall of Fame! Stan’s"
        }
    ]
    return (
        <>
            <main>

                {/* Hero Section */}
                <section>

                    <div className="grid grid-cols-1 gap-0.5 md:grid-cols-2 md:gap-10">

                        {/* Image */}
                        <div className="image-sec">
                            <img
                                src={blogHero1}
                                alt=""
                                className="h-[300px] w-full object-cover sm:h-[400px] md:h-[450px]"
                            />
                        </div>


                        {/* Content */}
                        <div className="flex flex-col items-center justify-center px-5 py-12 text-center sm:px-8 md:px-10">

                            <span className="mb-6 uppercase text-slate-500 sm:mb-8 md:mb-10">
                                The art of earls
                            </span>

                            <h1 className="mb-6 text-3xl font-serif font-semibold text-[#0c2340] sm:mb-8 sm:text-4xl md:mb-10">
                                The Art of Earls
                            </h1>

                            <p className="max-w-xl px-2 py-2 text-center font-medium text-slate-500 sm:px-6 sm:py-4 md:px-8">
                                We believe that art enriches the design of a space, this is why we partner with local artists in our communities to create a unique personality for our stores.
                            </p>

                        </div>

                    </div>


                    {/* Latest Section */}
                    <div className="flex flex-col items-center justify-center bg-[#648E71] px-5 py-12 text-center text-white sm:px-8 sm:py-16 md:py-20">

                        <span className="mb-6 uppercase sm:mb-8 md:mb-10">
                            in the know
                        </span>

                        <h1 className="mb-6 text-3xl uppercase sm:mb-8 sm:text-4xl md:mb-10">
                            The latest from Earls
                        </h1>

                        <p className="max-w-2xl px-2 py-2 font-medium sm:px-6 sm:py-4 md:px-8">
                            Want to know what we’re up to these days? Well, you came to the right place. Read on to learn all about us.
                        </p>

                    </div>

                </section>


                {/* Blog Section */}
                <section className="bg-slate-200">

                    <div className="blog-container px-4 py-8 sm:px-6 sm:py-10 md:p-10">

                        <div className="flex flex-col gap-8 sm:gap-10 md:gap-20 md:p-5 lg:p-10">

                            {BlogData.map((blog, index) => {

                                const isEven = index % 2 === 0;

                                return (

                                    <div
                                        key={blog.id}
                                        className={`flex flex-col items-center bg-white p-5 sm:p-6 md:gap-8 md:p-8 lg:p-10 ${isEven
                                                ? "md:flex-row"
                                                : "md:flex-row-reverse"
                                            }`}
                                    >

                                        {/* Blog Image */}
                                        <div className="image-sec w-full md:w-1/2">

                                            <img
                                                src={blog.image}
                                                alt={blog.title}
                                                className="h-[280px] w-full object-cover sm:h-[350px] md:h-[400px]"
                                            />

                                        </div>


                                        {/* Blog Content */}
                                        <div className="content-sec w-full pt-8 text-start sm:pt-10 md:w-1/2 md:pt-0 md:pl-5 lg:pl-8">

                                            <p className="tracking-wider text-[#12313b] uppercase">
                                                {blog.date}
                                            </p>


                                            <h1 className="max-w-xl pt-5 pb-5 text-2xl font-serif font-medium text-[#12313b] sm:pt-7 sm:pb-7 sm:text-3xl md:pt-8 md:pb-8">
                                                {blog.title}
                                            </h1>


                                            <p className="mb-6 max-w-xl pr-0 font-sans text-sm leading-relaxed text-[#12313b] sm:text-base md:pr-5 lg:pr-10">
                                                {blog.discription}
                                            </p>


                                            <a
                                                href={blog.link || "#"}
                                                className="border-b border-[#12313b] pb-0.5 text-sm text-[#12313b] transition-opacity hover:opacity-75"
                                            >
                                                Read More &rarr;
                                            </a>

                                        </div>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                </section>

            </main>
        </>
    )
}
export default Blogs;