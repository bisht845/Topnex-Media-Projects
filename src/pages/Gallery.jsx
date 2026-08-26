import React from "react";
import gallery1 from "../assets/gallery-1.jpeg"
import gallery2 from "../assets/gallery-2.jpeg"
import gallery3 from "../assets/gallery-3.jpeg"
import gallery4 from "../assets/gallery-4.jpeg"
import gallery5 from "../assets/gallery-5.jpeg"
import gallery6 from "../assets/gallery-6.jpeg"

const galleryImages = [
    {
        image: gallery1,
        title: "Signature Flavours",
        category: "Food",
    },
    {
        image: gallery2,
        title: "Fresh From The Kitchen",
        category: "Kitchen",
    },
    {
        image: gallery3,
        title: "Good Food, Good Mood",
        category: "Experience",
    },
     {
        image:
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=85",
        title: "Something Sweet",
        category: "Dessert",
    },
    {
        image: gallery5,
        title: "The NACHO-G Experience",
        category: "Restaurant",
    },
    {
        image: gallery6,
        title: "A Taste Of NACHO-G",
        category: "Signature",
    },
    {
        image:
            "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
        title: "The NACHO-G Experience",
        category: "Restaurant",
    },
    {
        image:
            "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
        title: "Fresh & Delicious",
        category: "Food",
    },
    {
        image:
            "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=85",
        title: "Loaded Nachos",
        category: "Signature",
    },
    {
        image:
            "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1000&q=85",
        title: "Good Food",
        category: "Food",
    },
    {
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
        title: "Good Vibes",
        category: "Dining",
    },
    {
        image:
            "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1000&q=85",
        title: "Made Fresh",
        category: "Food",
    },
    {
        image:
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85",
        title: "Our Space",
        category: "Restaurant",
    },
   
    {
        image: gallery4,
        title: "Made For Sharing",
        category: "Moments",
    },
    {
        image:
            "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=85",
        title: "Fresh Flavours",
        category: "Food",
    },
];

const Gallery = () => {
    return (
        <main className="min-h-screen bg-[#071412] text-white">

            <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden">

                <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=90"
                    alt="NACHO-G restaurant"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#071412]/70" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071412] via-transparent to-black/40" />

                <div className="relative z-10 px-5 text-center">

                    <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#D7AE4D] sm:text-sm">
                        NACHO G · THE DINING SPACE
                    </p>

                    <h1 className="font-serif text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
                        Our Gallery
                    </h1>

                    <div className="mx-auto my-6 h-px w-20 bg-[#D7AE4D] sm:w-28" />

                    <p className="mx-auto max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                        A glimpse into the food, people, flavours and moments
                        that make NACHO-G special.
                    </p>

                </div>

            </section>

            <section className="px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">

                <p className="text-xs uppercase tracking-[0.3em] text-[#D7AE4D]">
                    Taste. Experience. Enjoy.
                </p>

                <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
                    Moments at NACHO-G
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                    From delicious dishes to unforgettable evenings,
                    here's a look at what happens around our table.
                </p>

            </section>

            <section className="px-4 pb-20 sm:px-8 lg:px-10 lg:pb-28">

                <div className="mx-auto max-w-7xl columns-1 gap-5 sm:columns-2 lg:columns-3">

                    {galleryImages.map((item, index) => (

                        <div
                            key={index}
                            className="group relative mb-5 break-inside-avoid overflow-hidden border border-[#D7AE4D]/10 bg-[#0B1C19]"
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="h-auto w-full object-cover transition duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                            {/* Content */}

                            <div className="absolute inset-x-0 bottom-0 translate-y-5 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                                <p className="text-[10px] uppercase tracking-[0.3em] text-[#D7AE4D]">
                                    {item.category}
                                </p>

                                <h3 className="mt-2 font-serif text-xl sm:text-2xl">
                                    {item.title}
                                </h3>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {/* ================= CTA ================= */}

            <section className="border-y border-[#D7AE4D]/20 bg-[#0B1C19] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">

                <p className="text-xs uppercase tracking-[0.3em] text-[#D7AE4D]">
                    Come See For Yourself
                </p>

                <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
                    Your table is waiting.
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                    Great food, good people and even better memories.
                    Experience NACHO-G for yourself.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                    <a
                        href="/menu"
                        className="bg-[#D7AE4D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black transition duration-300 hover:bg-white"
                    >
                        Explore Menu
                    </a>

                    <a
                        href="/contact"
                        className="border border-[#D7AE4D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#D7AE4D] transition duration-300 hover:bg-[#D7AE4D] hover:text-black"
                    >
                        Contact Us
                    </a>

                </div>

            </section>

        </main>
    );
};

export default Gallery;