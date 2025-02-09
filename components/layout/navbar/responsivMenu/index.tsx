"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function ResponsiveMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={openMenu} className="menu-toggle">
        {isOpen ? (
          <RxCross2
            size={24}
            className="absolute top-[25px] right-[30px] z-[100]"
          />
        ) : (
          <FiMenu size={24} />
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 right-0 bg-white shadow-md z-50">
          <ul className="py-8 text-lg flex flex-col items-center space-y-4">
            <li className=" block hover:text-color1 duration-200">
              <a href="">Home</a>
            </li>
            <li className="my-2 block hover:text-color1 duration-200">
              <a href="/">About Us</a>
            </li>
            <li className="my-2 block hover:text-color1 duration-200">
              <a href="">Restaurants</a>
            </li>
            <li className="my-2 block hover:text-color1 duration-200">
              <a href="/Bnner">Pages</a>
            </li>
            <li className="my-2 block hover:text-color1 duration-200">
              <a href="/Card">Contacts</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
