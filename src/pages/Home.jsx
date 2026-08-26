import React from "react";
import { Link } from "react-router-dom";

import HeroImg from "../assets/Hero_img.jpg";
import Kitchen_Garnish from "../assets/Kitchen_Garnish_.jpg";
import Service_2 from "../assets/Service-2.jpg";

const popularItems = [
  {
    name: "Chilli Paneer",
    price: "₹269",
    description: "Crispy paneer tossed with chilli, peppers and our signature sauce.",
     image:
      "https://images.unsplash.com/photo-1642821369314-100fece91d3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Veg Manchurian",
    price: "₹249",
    description: "Crispy vegetable bites finished with a delicious Indo-Chinese glaze.",
    image: "https://images.unsplash.com/photo-1676976197902-4a01ee87cd78?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Veg Fried Rice",
    price: "₹199",
    description: "Aromatic rice wok-tossed with fresh vegetables and bold flavours.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Honey Chilli Potato",
    price: "₹239",
    description: "Crispy golden potatoes coated with sweet honey and spicy chilli.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
  },
];

const Home = () => {
  return (
    <main className="min-h-screen bg-[#071412] text-white">

      <section className="relative min-h-[650px] overflow-hidden sm:min-h-[700px] lg:min-h-[calc(100vh-100px)]">

        <img
          src={HeroImg}
          alt="NACHO-G food"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#071412]/60" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071412] via-transparent to-black/50" />

        <div className="relative z-10 flex min-h-[650px] items-center justify-center px-5 text-center sm:min-h-[700px] lg:min-h-[calc(100vh-100px)]">

          <div className="max-w-4xl">

            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#D7AE4D] sm:text-sm">
              NACHO G · THE DINING SPACE
            </p>

            <h1 className="font-serif text-5xl uppercase leading-[0.] tracking-wide sm:text-2xl md:text-2xl lg:text-[50px]">
              Good Food.
              <br />
              Great Mood.
            </h1>

            <div className="mx-auto my-7 h-px w-20 bg-[#D7AE4D] sm:my-8 sm:w-28" />

            <p className="mx-auto max-w-xl font-serif text-lg italic leading-7 text-[#E8D29A] sm:text-2xl sm:leading-9">
              Bold flavours, fresh ingredients and unforgettable
              moments — all served at NACHO-G.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">

              <Link
                to="/menu"
                className="border border-[#D7AE4D] bg-[#D7AE4D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black transition duration-300 hover:bg-transparent hover:text-[#D7AE4D]"
              >
                Explore Menu
              </Link>

              <button
                className="border border-white/70 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition duration-300 hover:border-[#D7AE4D] hover:text-[#D7AE4D]"
              >
                Order Now
              </button>

            </div>

          </div>

        </div>

      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D7AE4D]">
              Welcome To NACHO-G
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Where every bite
              <br />
              tells a story.
            </h2>

            <div className="my-6 h-px w-20 bg-[#D7AE4D]" />

            <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              At NACHO-G, we believe great food brings people together.
              From comforting classics to exciting flavours, every dish is
              prepared with fresh ingredients, passion and a little bit of
              creativity.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Come hungry. Leave happy. That's the NACHO-G way.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-block border-b border-[#D7AE4D] pb-2 text-sm font-semibold uppercase tracking-wider text-[#D7AE4D] transition hover:text-white"
            >
              Discover Our Story →
            </Link>

          </div>


          <div className="relative">

            <img
              src="https://images.openai.com/static-rsc-4/mTz33giur_yFnQnOOYeyRTGlCCnQbG36HCbm0i2Pgls8A1Mn8Lgr2KMWBw9p5BBfM4h5OkkehP4Y6o6FPy0Yk5tY-zSjyVrB9DuB_TF0_bpBlWa4NN26BI0z2LnG1UvaMfb4hC2QpJbRqc7kn56Nml_ZPVtwOjI0ebsolxBhYv0Anvpjk3AC9umHYtB2vXKa?purpose=fullsize"
              alt="Delicious NACHO-G food"
              className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[560px]"
            />

            <div className="absolute -bottom-5 -left-5 hidden border border-[#D7AE4D]/50 bg-[#0B1C19] px-6 py-5 sm:block">

              <p className="text-xs uppercase tracking-[0.25em] text-[#D7AE4D]">
                Made With
              </p>

              <p className="mt-1 font-serif text-xl">
                Passion & Love
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-[#0B1C19] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D7AE4D]">
              Taste The Difference
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
              Our Favourites
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
              A few of the dishes our guests keep coming back for.
            </p>

          </div>


          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {popularItems.map((item) => (

              <article
                key={item.name}
                className="group overflow-hidden border border-[#D7AE4D]/20 bg-[#071412] transition duration-500 hover:-translate-y-2 hover:border-[#D7AE4D]"
              >

                <div className="aspect-[4/3] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>


                <div className="p-5">

                  <div className="flex items-start justify-between gap-3">

                    <h3 className="font-serif text-xl">
                      {item.name}
                    </h3>

                    <span className="text-sm font-semibold text-[#D7AE4D]">
                      {item.price}
                    </span>

                  </div>

                  <div className="my-3 h-px bg-[#D7AE4D]/20" />

                  <p className="text-sm leading-6 text-white/50">
                    {item.description}
                  </p>

                </div>

              </article>

            ))}

          </div>


          <div className="mt-10 text-center">

            <Link
              to="/menu"
              className="inline-block border border-[#D7AE4D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#D7AE4D] transition duration-300 hover:bg-[#D7AE4D] hover:text-black"
            >
              View Full Menu
            </Link>

          </div>

        </div>

      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">

          <div className="order-2 lg:order-1">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D7AE4D]">
              The NACHO-G Experience
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Made fresh.
              <br />
              Served with heart.
            </h2>

            <div className="my-6 h-px w-20 bg-[#D7AE4D]" />

            <p className="text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Good food isn't just about what's on the plate. It's about
              the people, the atmosphere and the memories you create around
              the table.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              That's why every NACHO-G experience is designed to feel
              welcoming, relaxed and full of flavour.
            </p>

          </div>


          <div className="order-1 lg:order-2">

            <img
              src={Kitchen_Garnish}
              alt="Fresh food prepared at NACHO-G"
              className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[600px]"
            />

          </div>

        </div>

      </section>

      <section className="border-y border-[#D7AE4D]/20 bg-[#0B1C19] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D7AE4D]">
              Why NACHO-G
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              More than just a meal.
            </h2>

          </div>


          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

            <div className="text-center">

              <span className="font-serif text-4xl text-[#D7AE4D]">
                01
              </span>

              <h3 className="mt-4 font-serif text-2xl">
                Fresh Ingredients
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Quality ingredients carefully selected for every dish.
              </p>

            </div>


            <div className="text-center">

              <span className="font-serif text-4xl text-[#D7AE4D]">
                02
              </span>

              <h3 className="mt-4 font-serif text-2xl">
                Big Flavours
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Bold combinations created to make every bite memorable.
              </p>

            </div>


            <div className="text-center">

              <span className="font-serif text-4xl text-[#D7AE4D]">
                03
              </span>

              <h3 className="mt-4 font-serif text-2xl">
                Made Fresh
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Every order is prepared fresh so you get the best flavour.
              </p>

            </div>

            <div className="text-center">

              <span className="font-serif text-4xl text-[#D7AE4D]">
                04
              </span>

              <h3 className="mt-4 font-serif text-2xl">
                Good Times
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Great food tastes even better when shared with good people.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden">

            <img
              src={Service_2}
              alt="NACHO-G dining experience"
              className="h-[450px] w-full object-cover sm:h-[550px] lg:h-[650px]"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 flex items-center justify-center px-5 text-center">

              <div className="max-w-3xl">

                <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#D7AE4D]">
                  Come Hungry
                </p>

                <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl">
                  Bring Your People.
                  <br />
                  We'll Bring The Food.
                </h2>

                <Link
                  to="/menu"
                  className="mt-8 inline-block bg-[#D7AE4D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-white"
                >
                  Explore Menu
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="border-y border-[#D7AE4D]/20 bg-[#0B1C19] px-5 py-16 text-center sm:px-8 sm:py-20">

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D7AE4D]">
          Your Table Is Waiting
        </p>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
          Ready to get loaded?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
          Gather your favourite people and make your next meal a
          NACHO-G moment.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <button className="bg-[#D7AE4D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-white">
            Order Now
          </button>

          <button className="border border-[#D7AE4D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#D7AE4D] transition hover:bg-[#D7AE4D] hover:text-black">
            Book a Table
          </button>

        </div>

      </section>

    </main>
  );
};

export default Home;

