import { services, Service } from "../constants";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  const startAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
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
        staggerChildren: 0.4,
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.section
      className="max-container flex justify-center flex-wrap gap-9"
      variants={startAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {services.map((service: Service) => (
        <motion.div variants={startItem}>
          <ServiceCard key={service.label} {...service} />
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Services;
