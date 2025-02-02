"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const NavbarDock = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full no-scrollbar p-4 z-50 flex items-center justify-between bg-transparent backdrop-blur-sm">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-white bg-slate-900 p-2 no-scrollbar rounded-full w-12 h-12 focus:outline-none focus:ring-offset-2 focus:ring-neutral-500"
      >
        <img className="scale-125" src="/logo.png" alt="" />
      </button>

      {/* Navigation Icons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="flex items-center space-x-4"
          >
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="h-10 w-10 rounded-full bg-slate-950 flex items-center justify-center"
                title={item.title}
              >
                <div className="h-5 w-5 rounded-full bg-slate-950 flex items-center justify-center">{item.icon}</div>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
