import Button from "../components/Button";
import ArrowRight from "../assets/icons/arrow-right.svg";
import { statistics, Statistics, shoes, Shoes } from "../constants";
import bigShoe1 from "../assets/images/bigShoe1.png";
import BigShoe2 from "../assets/images/bigShoe2.png";
import BigShoe3 from "../assets/images/bigShoe3.png";

const Hero = () => {
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
          <span className="text-coral-red inline-block mt-3">Nike </span>
          Shoes
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
          src={bigShoe1}
          alt="big shoes 1"
          width={610}
          height={500}
          className="object-contain z-10 relative"
        />
        <div>{shoes.map((data: Shoes) => data.thumbnail)}</div>
      </div>
    </section>
  );
};

export default Hero;
