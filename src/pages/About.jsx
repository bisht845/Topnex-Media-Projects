import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const About = () => {
  const images = {
    hero:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85",

    story:
      "https://images.pexels.com/photos/27603266/pexels-photo-27603266.jpeg?auto=compress&cs=tinysrgb&w=1400",

    food:
      "https://images.pexels.com/photos/5848707/pexels-photo-5848707.jpeg?auto=compress&cs=tinysrgb&w=1000",

    dining:
      "https://images.pexels.com/photos/31088698/pexels-photo-31088698.jpeg?auto=compress&cs=tinysrgb&w=1000",

    drinks:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=85",

    restaurant:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85",
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#071412] text-white">

      <section className="relative min-h-[650px] overflow-hidden sm:min-h-[700px] lg:min-h-[calc(100vh-100px)]">

        <img
          src={images.hero}
          alt="NACHO G restaurant"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#071412]/65" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071412] via-transparent to-black/50" />

        <div className="relative z-10 flex min-h-[650px] items-center justify-center px-5 py-24 text-center sm:min-h-[700px] lg:min-h-[calc(100vh-100px)]">

          <div className="max-w-4xl">

            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#D7AE4D] sm:text-sm">
              Welcome To NACHO-G
            </p>

            <h1 className="font-serif text-5xl uppercase leading-[0.95] tracking-wide sm:text-6xl md:text-7xl lg:text-8xl">
              Our Story.
              <br />
              Our Flavour.
            </h1>

            <div className="mx-auto my-7 h-px w-20 bg-[#D7AE4D] sm:my-8 sm:w-28" />

            <p className="mx-auto max-w-2xl font-serif text-lg italic leading-7 text-[#E8D29A] sm:text-2xl sm:leading-9">
              More than just food — NACHO-G is about bringing people
              together around unforgettable flavours.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/menu"
                className="border border-[#D7AE4D] bg-[#D7AE4D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black transition duration-300 hover:bg-transparent hover:text-[#D7AE4D]"
              >
                Explore Menu
              </Link>

              <Link
                to="/contact"
                className="border border-white/70 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition duration-300 hover:border-[#D7AE4D] hover:text-[#D7AE4D]"
              >
                Visit Us
              </Link>

            </div>

          </div>

        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D7AE4D]">
            The NACHO-G Story
          </p>

          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            More than a meal.
            <br />
            It's a moment.
          </h2>

          <div className="mx-auto my-6 h-px w-20 bg-[#D7AE4D]" />

          <p className="mx-auto max-w-3xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            NACHO-G is all about bringing people together over food
            that makes you smile. We believe every meal should feel
            exciting, every table should feel welcoming, and every
            visit should leave you wanting to come back.
          </p>

        </div>

      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-28">

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">

          <div className="relative">

            <img
              src={images.story}
              alt="NACHO-G food"
              className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[560px]"
            />

            <div className="absolute -bottom-5 -left-5 hidden border border-[#D7AE4D]/50 bg-[#0B1C19] px-6 py-5 sm:block">

              <p className="text-xs uppercase tracking-[0.25em] text-[#D7AE4D]">
                NACHO-G
              </p>

              <p className="mt-1 font-serif text-xl">
                Made With Passion
              </p>

            </div>

          </div>
          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D7AE4D]">
              Our Story
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Born from
              <br />
              a love of food.
            </h2>

            <div className="my-6 h-px w-20 bg-[#D7AE4D]" />

            <p className="text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              At NACHO-G, food isn't just something we serve.
              It's something we care about.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              We wanted to create a restaurant where bold flavours,
              good music, friendly people and a relaxed atmosphere
              come together.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Whether you're meeting friends, enjoying a family
              meal or celebrating something special, NACHO-G is
              made for those moments.
            </p>

            <Link
              to="/menu"
              className="mt-8 inline-flex items-center gap-3 border border-[#D7AE4D] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-[#D7AE4D] transition duration-300 hover:bg-[#D7AE4D] hover:text-black"
            >
              Discover Our Menu
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

      <section className="border-y border-[#D7AE4D]/20 bg-[#0B1C19] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D7AE4D]">
              What We Believe
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              The NACHO-G Way
            </h2>

          </div>


          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">

            <div className="text-center">

              <span className="font-serif text-4xl text-[#D7AE4D]">
                01
              </span>

              <h3 className="mt-4 font-serif text-2xl">
                Bold Flavours
              </h3>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/50">
                Big flavours, fresh ingredients and food made to
                keep you coming back.
              </p>

            </div>


            <div className="text-center">

              <span className="font-serif text-4xl text-[#D7AE4D]">
                02
              </span>

              <h3 className="mt-4 font-serif text-2xl">
                Good People
              </h3>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/50">
                A friendly team creating a relaxed and welcoming
                experience for every guest.
              </p>

            </div>


            <div className="text-center">

              <span className="font-serif text-4xl text-[#D7AE4D]">
                03
              </span>

              <h3 className="mt-4 font-serif text-2xl">
                Great Moments
              </h3>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/50">
                Because the best memories are usually made around
                a table.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-[#D7AE4D]">
                What's On The Table
              </p>

              <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
                Food made
                <br />
                to share.
              </h2>

            </div>

            <Link
              to="/menu"
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D7AE4D] transition hover:text-white"
            >
              View Full Menu
              <FaArrowRight />
            </Link>

          </div>


          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="group relative overflow-hidden border border-[#D7AE4D]/20">

              <img
                src={images.food}
                alt="NACHO-G food"
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071412] via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">

                <p className="text-xs uppercase tracking-[0.25em] text-[#D7AE4D]">
                  Signature
                </p>

                <h3 className="mt-2 font-serif text-2xl">
                  Loaded & Delicious
                </h3>

              </div>

            </div>

            <div className="group relative overflow-hidden border border-[#D7AE4D]/20 md:translate-y-10">

              <img
                src={images.dining}
                alt="NACHO-G dining"
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071412] via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">

                <p className="text-xs uppercase tracking-[0.25em] text-[#D7AE4D]">
                  Experience
                </p>

                <h3 className="mt-2 font-serif text-2xl">
                  Good Food. Good Company.
                </h3>

              </div>

            </div>

            <div className="group relative overflow-hidden border border-[#D7AE4D]/20">

              <img
                src={images.drinks}
                alt="NACHO-G drinks"
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071412] via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">

                <p className="text-xs uppercase tracking-[0.25em] text-[#D7AE4D]">
                  Refresh
                </p>

                <h3 className="mt-2 font-serif text-2xl">
                  Sip Something Good
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="border-y border-[#D7AE4D]/20 bg-[#0B1C19] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-[#D7AE4D]">
              The NACHO-G Team
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Great restaurants
              <br />
              need great people.
            </h2>

            <div className="my-6 h-px w-20 bg-[#D7AE4D]" />

            <p className="text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Behind every dish, every smile and every great
              experience is a team that cares.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Our people bring energy, passion and personality to
              NACHO-G every day.
            </p>

          </div>


          <div>

            <img
              src={images.restaurant}
              alt="NACHO-G restaurant"
              className="h-[400px] w-full object-cover sm:h-[500px]"
            />

          </div>

        </div>

      </section>

      <section className="px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-28">

        <div className="mx-auto max-w-4xl">

          <div className="mb-6 flex justify-center gap-2 text-[#D7AE4D]">

            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

          </div>

          <p className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            "Come for the food.
            <br />
            Stay for the vibe."
          </p>

          <div className="mx-auto my-6 h-px w-16 bg-[#D7AE4D]" />

          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            The NACHO-G Experience
          </p>

        </div>

      </section>

      <section className="border-y border-[#D7AE4D]/20 bg-[#0B1C19] px-5 py-16 text-center sm:px-8 sm:py-20">

        <p className="text-sm uppercase tracking-[0.3em] text-[#D7AE4D]">
          Follow The Vibe
        </p>

        <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
          Stay Connected
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
          Follow NACHO-G for food, offers, new dishes and everything
          happening at your favourite restaurant.
        </p>


        <div className="mt-8 flex justify-center gap-4">

          <a
            href="#"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition duration-300 hover:border-[#D7AE4D] hover:bg-[#D7AE4D] hover:text-black"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            aria-label="Facebook"
            className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition duration-300 hover:border-[#D7AE4D] hover:bg-[#D7AE4D] hover:text-black"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            aria-label="YouTube"
            className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition duration-300 hover:border-[#D7AE4D] hover:bg-[#D7AE4D] hover:text-black"
          >
            <FaYoutube />
          </a>

        </div>

      </section>
      
      <section className="px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D7AE4D]">
          Your Table Is Waiting
        </p>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
          Ready to experience NACHO-G?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
          Gather your favourite people and make your next meal
          a NACHO-G moment.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/menu"
            className="bg-[#D7AE4D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-white"
          >
            Explore Menu
          </Link>

          <Link
            to="/contact"
            className="border border-[#D7AE4D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#D7AE4D] transition hover:bg-[#D7AE4D] hover:text-black"
          >
            Contact Us
          </Link>

        </div>

      </section>


    </main>
  );
};

export default About;
