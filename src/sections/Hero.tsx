import { useState } from "react";
import Button from "../components/Button";
import ArrowRight from "../assets/icons/arrow-right.svg";
import { statistics, Statistics, shoes, Shoes } from "../constants";
import bigShoe1 from "../assets/images/bigShoe1.png";
import ShoeCard from "../components/ShoeCard";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState<string>(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center xl:flex-row min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3"> Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals , quality comfort , and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={ArrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((data: Statistics, idx: number) => (
            <div key={idx}>
              <p className="text-4xl font-palanquin font-bold ">{data.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {data.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
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
      </div>
    </section>
  );
};

export default Hero;
