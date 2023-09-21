import offer from "../assets/images/offer.svg";
import Button from "../components/Button";
import arrowRight from "../assets/icons/arrow-right.svg";
import { motion } from "framer-motion";
const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <motion.img
          className="object-contain w-full cursor-pointer"
          src={offer}
          alt="offer icon"
          width={773}
          height={687}
          initial={{ opacity: 0, x: "-200px", scale: 1 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true }}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <motion.h2
          className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"
          initial={{ opacity: 0, x: "200px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-coral-red">Special </span>
          Offer
        </motion.h2>
        <motion.p
          className="mt-4 lg:max-w-lg info-text"
          initial={{ opacity: 0, x: "200px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </motion.p>
        <motion.p
          className="mt-6 lg:max-w-lg info-text"
          initial={{ opacity: 0, x: "200px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
        >
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </motion.p>
        <div className="mt-11 flex flex-wrap gap-4">
          <motion.div
            initial={{ y: "-100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, bounce: 0.4 }}
            whileTap={{ scale: 0.9 }}
            className="button"
            viewport={{ once: true }}
          >
            <Button label="Shop details" iconURL={arrowRight} />
          </motion.div>
          <motion.div
            initial={{ y: "-100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, bounce: 0.4 }}
            className="button-outline"
            whileTap={{ scale: 0.9 }}
            viewport={{ once: true }}
          >
            <Button
              label="Learn more"
              backgroundColor="bg-white"
              border="border-slate-gray"
              textColor="text-slate-gray"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
