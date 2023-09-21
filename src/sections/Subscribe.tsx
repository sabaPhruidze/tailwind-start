import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] font-bold font-palanquin">
        Sign Up from
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div
        className="lg:max-w-[80%] w-full flex items-center max-sm:flex-col gap-2
      p-2.5 sm:border sm:border-slate-gray rounded-full"
      >
        <input type="text" placeholder="nikcnikc@gmail.com" className="input" />
        <div className="flex max-sm:justify-center items-center max-sm:w-full">
          <Button label="Sign up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
