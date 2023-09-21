import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../components/Button";
import ArrowRight from "../assets/icons/arrow-right.svg";
import { statistics, Statistics, shoes, Shoes } from "../constants";
import bigShoe1 from "../assets/images/bigShoe1.png";
import ShoeCard from "../components/ShoeCard";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState<string>(bigShoe1);
  const typingContainer = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,

      transition: {
        staggerChildren: 0.2,
        ease: "easeInOut",
        delayChildren: 2.5,
      },
    },
  };

  const typingText = {
    hidden: {
      opacity: 0,
      x: "-20px",
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const startAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeInOut",
        delayChildren: 0,
      },
    },
  };

  const startItem = {
    hidden: {
      opacity: 0,
      x: "-100px",
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center xl:flex-row min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <motion.p
          className="text-xl font-montserrat text-coral-red"
          initial={{ opacity: 0, x: "-20px" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          Our Summer Collection
        </motion.p>
        <motion.h1
          className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
          variants={typingContainer}
          initial="hidden"
          animate="show"
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            {Array.from("The New Arrival").map((letter, i) => (
              <motion.span key={i} variants={typingText}>
                {letter}
              </motion.span>
            ))}
          </span>
          <br />
          {Array.from(" Nike").map((letter, i) => (
            <motion.span
              className="text-coral-red inline-block mt-3"
              key={i}
              variants={typingText}
            >
              {letter}
            </motion.span>
          ))}
          {Array.from(" Shoes").map((letter, i) => (
            <motion.span key={i} variants={typingText}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
          initial={{ opacity: 0, x: "-20px" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 7.5, duration: 0.8 }}
        >
          Discover stylish Nike arrivals , quality comfort , and innovation for
          your active life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: "-20px" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 8, duration: 0.8 }}
        >
          <Button label="Shop now" iconURL={ArrowRight} />
        </motion.div>
        <motion.div
          className="flex justify-start items-start flex-wrap w-full mt-20 gap-16"
          variants={startAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {statistics.map((data: Statistics, idx: number) => (
            <motion.div key={idx} variants={startItem}>
              <p className="text-4xl font-palanquin font-bold ">{data.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {data.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
        initial={{ opacity: 0, x: "200px" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
      >
        <img
          src={bigShoeImg}
          alt="big shoes 1"
          width={610}
          height={500}
          className="object-contain z-10 relative"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((data: Shoes) => (
            <div key={data.bigShoe}>
              <ShoeCard
                imgURL={data}
                changeBigShoeImage={(img: string) => {
                  setBigShoeImg(img);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
