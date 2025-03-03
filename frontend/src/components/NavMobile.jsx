import React, { useState } from "react";
import { navigation } from "../data";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline"; // Mise à jour des importations pour Heroicons v2
import Socials from "../components/Socials";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative">
      {/* Bouton Menu */}
      <div onClick={() => setIsOpen(true)} className="cursor-pointer text-white">
        <Bars3Icon className="w-8 h-8" />
      </div>

      {/* Animation du cercle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-[#077b32] fixed top-0 right-0"
      ></motion.div>

      {/* Menu Mobile */}
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className={`fixed top-0 bottom-0 right-0 w-full flex flex-col justify-center items-center
             bg-black transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Bouton Fermer */}
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8"
        >
          <XMarkIcon className="w-8 h-8 text-white" />
        </div>

        {/* Liens de navigation */}
        {navigation.map((item, index) => (
          <li key={index} className="mb-4">
            <Link
              to={item.href}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white text-lg cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}

        {/* Icônes Sociales */}
        <div className="mt-8">
          <Socials />
        </div>
      </motion.ul>
    </nav>
  );
};

export default NavMobile;