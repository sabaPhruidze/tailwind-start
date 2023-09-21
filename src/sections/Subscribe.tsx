import Button from "../components/Button";
import { motion } from "framer-motion";
const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center flex-col gap-10"
      id="contact-us"
    >
      <motion.h3
        className="text-4xl leading-[68px] font-bold font-palanquin"
        initial={{ x: "-400px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
      >
        Sign Up from
        <span className="text-coral-red"> Updates </span>& Newsletter
      </motion.h3>
      <motion.div
        className="lg:max-w-[80%] w-full flex items-center max-sm:flex-col gap-2
      p-2.5 sm:border sm:border-slate-gray rounded-full"
        initial={{ x: "400px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
      >
        <input type="text" placeholder="nikcnikc@gmail.com" className="input" />
        <div className="flex max-sm:justify-center items-center max-sm:w-full">
          <Button label="Sign up" />
        </div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
