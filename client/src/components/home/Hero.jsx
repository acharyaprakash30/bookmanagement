import { motion } from "framer-motion";
import React from "react";
import Delivery from "../../assests/Delivery.png";
import HeroBg from "../../assests/HeroBg.png";
import { PopularBook } from "../../utils/constants";
import { btnClick, straggerFadeInOut } from "../../animations/index";
import LandingPageWrapper from "../../common/LandingPageWrapper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <LandingPageWrapper>
      <motion.section className="w-full grid grid-cols-1 md:grid-cols-2 gap-24  md:gap-4  ">
        <main className="flex flex-col items-start justify-start gap-6  px-3 ">
          <aside className="px-4 py-1 flex items-center justify-center gap-2 bg-orange-300 rounded-full border-dotted border-[2px] cursor-pointer">
            <h3 className="text-lg font-semibold text-orange-600 ">
              Free Book Delivery
            </h3>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary shawo-md">
              <LazyLoadImage
                src={Delivery}
                effect="opacity"
                className="w-full h-full object-center"
                alt="Delivery"
              />
            </div>
          </aside>

          <h1 className="text-[32px] sm:text-[40px] leading-10 md:leading-normal text-headingColor md:text-[60px] font-sans font-extrabold tracking-wider">
            The Best Selling Books In{" "}
            <span className="text-orange-600">Your City</span>
          </h1>

          <article className="text-textColor sm:text-lg text-justify ">
        Welcome to BookStore, your ultimate destination for captivating stories
        delivered right to your doorstep. We bring you a diverse collection of
        genres from the finest local authors in your area, all in one
        convenient platform. Our goal is to make discovering books an effortless
        and enriching experience, offering you a wide variety of genres to
        suit your literary cravings.
          </article>

          <Link to="/book">
            <motion.button
              {...btnClick}
              className="bg-orange-500 px-10 py-2 text-xl rounded-md tracking-wide hover:bg-orange-400 shadow-orange-500 text-white font-semibold shadow-sm font-sans"
            >
              Order Now
            </motion.button>
          </Link>
        </main>

        <main className="py-2 flex-1 flex items-center justify-end relative pb-14 ">
          <main className=" w-full md:w-460 ml-0 grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap items-center  justify-center gap-6 gap-y-8  h-full relative  ">
            {PopularBook.map((book, i) => (
              <React.Fragment key={book.id}>
                <motion.div
                  {...straggerFadeInOut(i)}
                  className="backdrop-blur-md z-20 w-36 h-[8.5rem] sm:w-40   shadow-md sm:h-36 md:h-auto md:w-40 pb-3 pt-3 border-gray-300 border-[1px] bg-opacity-50  bg-[rgb(241,238,238)] rounded-3xl flex flex-col items-center justify-center  mx-auto"
                >
                  <LazyLoadImage
                    src={book.image}
                    alt="book"
                    className="w-16 h-16 md:w-[70px] md:h-20  md:-mt-8 object-fill"
                    effect="opacity"
                  />

                  <p className="text-sm lg:text-lg font-semibold text-textColor">
                    {book.name}
                  </p>
                  <p className="text-[12px] text-center md:text-base text-gray-400 font-semibold capitalize ">
                    {book.category}
                  </p>
                  <p className="text-sm text-center md:text-base text-headingColor font-semibold capitalize ">
                    <span className=" text-red-600">Rs </span>
                    {book.price}
                  </p>
                </motion.div>
              </React.Fragment>
            ))}
          
          </main>
        </main>
      </motion.section>
    </LandingPageWrapper>
  );
};

export default Home;
