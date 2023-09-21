import HeaderLogo from "../assets/images/headerLogo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks, Navlinks } from "../constants/index";
import { motion } from "framer-motion";
const Nav = () => {
  const navAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        ease: "easeInOut",
        delayChildren: 0.5,
      },
    },
  };
  const navChildren = {
    hidden: {
      opacity: 0,
      y: "-20px",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <motion.img
            src={HeaderLogo}
            alt="header logo"
            width={130}
            height={29}
            initial={{ opacity: 0, x: "-20px" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          />
        </a>
        <motion.ul
          className="flex-1 flex justify-center items-center gap-16 max-lg:hidden"
          initial="hidden"
          animate="show"
          variants={navAnimation}
        >
          {navLinks.map((item: Navlinks) => (
            <motion.li key={item.label} variants={navChildren}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
        <div>
          <motion.img
            src={hamburger}
            alt="nav icon"
            className="w-[25px] h-[25px] hidden max-lg:block"
            initial={{ opacity: 0, x: "20px" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
