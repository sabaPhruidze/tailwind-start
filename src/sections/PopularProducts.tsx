import { products, Products } from "../constants";
import { motion } from "framer-motion";
import PopularProductCard from "../components/PopularProductCard";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <motion.h2
          className="text-4xl font-palanquin font-bold"
          initial={{ opacity: 0, x: "-200px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0 }}
          viewport={{ once: true }}
        >
          Our
          <span className="text-coral-red"> Popular </span>
          Products
        </motion.h2>
        <motion.p
          className="lg:max-w-lg mt-2 font-montserrat text-slate-gray"
          initial={{ opacity: 0, x: "-200px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
        >
          Experience top-notch quality and style with out sought-after
          selections.Discover a world of comfort, design, and value
        </motion.p>
      </div>
      <motion.div
        className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"
        initial={{ opacity: 0, y: "-100px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 2 }}
        viewport={{ once: true }}
      >
        {products.map((product: Products) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </motion.div>
    </section>
  );
};

export default PopularProducts;
