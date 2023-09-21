import Button from "../components/Button";
import shoe8 from "../assets/images/shoe8.png";
import { motion } from "framer-motion";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <motion.h2
          className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"
          initial={{ opacity: 0, x: "-200px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
        >
          We Provide You
          <span className="text-coral-red"> Super Quality </span>
          Shoes
        </motion.h2>
        <motion.p
          className="mt-4 lg:max-w-lg info-text"
          initial={{ opacity: 0, x: "-200px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </motion.p>
        <motion.p
          className="mt-6 lg:max-w-lg info-text"
          initial={{ opacity: 0, x: "-200px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Our dedication to detail and excellence ensures your satisfaction
        </motion.p>
        <motion.div
          className="mt-11"
          initial={{ opacity: 0, x: "-200px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <Button label="View details" />
        </motion.div>
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <motion.img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain cursor-pointer"
          initial={{ opacity: 0, x: "200px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
