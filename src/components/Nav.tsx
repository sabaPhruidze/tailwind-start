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
        delayChildren: 0,
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
          <img src={HeaderLogo} alt="header logo" width={130} height={29} />
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
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
