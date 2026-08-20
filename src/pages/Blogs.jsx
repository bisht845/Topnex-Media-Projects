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
                <section>
                    <div className="grid grid-cols-2 gap-10 px-0.5">
                        <div className="image-sec">
                            <img src={blogHero1} alt="" className="w-full h-[450px] object-cover" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <span className="uppercase mb-10 text-slate-500">The art of earls</span>
                            <h1 className="text-3xl font-serif font-semibold mb-10 text-[#0c2340]">The Art of Earls</h1>
                            <p className="max-w-100 px-8 py-4 text-center text-slate-500 font-medium">We believe that art enriches the design of a space, this is why we partner with local artists in our communities to create a unique personality for our stores.</p>
                        </div>
                    </div>  
                    <div className="flex flex-col justify-center items-center py-12 bg-[#648E71] text-white">
                        <span className="uppercase mb-10 ">in the know</span>
                        <h1 className="uppercase text-4xl  mb-10 ">The latest from Earls</h1>
                        <p className="max-w-2xl px-8 py-4 text-center  font-medium">Want to know what we’re up to these days? Well, you came to the right place. Read on to learn all about us.</p>
                    </div>
                </section>
                <section className="bg-slate-200">
                    <div className="blog-container p-10 ">
                        <div className="flex flex-col gap-20 p-10">

                            {BlogData.map((blog, index) => {
                                const isEven = index % 2 === 0;

                                return (
                                    <div
                                        key={blog.id}
                                        className={`p-10 bg-white flex flex-col md:gap-10 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                    >
                                        <div className="image-sec w-full md:w-1/2">
                                            <img src={blog.image} alt={blog.title} className="h-[400px] object-cover w-full" />
                                        </div>
                                        <div className="content-sec text-start w-full md:w-1/2">
                                           
                                            <p className="uppercase text-[#12313b] tracking-wider">
                                                {blog.date}
                                            </p>

                                            <h1 className="text-3xl max-w-98 font-serif font-medium pt-10 pb-10 text-[#12313b]">
                                                {blog.title}
                                            </h1>

                                            <p className="font-sans text-sm md:text-base leading-relaxed mb-6 pr-15 text-[#12313b]">
                                                {blog.discription}
                                            </p>

                                            <a href={blog.link || "#"} className="text-sm border-b border-[#12313b] pb-0.5 hover:opacity-75 transition-opacity text-[#12313b]">
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