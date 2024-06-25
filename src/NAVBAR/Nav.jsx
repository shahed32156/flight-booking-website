import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';
import { VscAccount } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="p-5 top-0 bg-white shadow md:flex md:items-center fixed w-full md:justify-between z-10">
        <div className="flex justify-between items-center">
          <span className="font-[Poppins] cursor-pointer">
            <img
              className="h-14 w-20 inline"
              src="./Images/logo.png"
              alt=""
            />
          </span>

          <span className="text-3xl cursor-pointer mx-2 md:hidden block z-10">
            <IonIcon icon={isOpen ? closeOutline : menuOutline} onClick={toggleMenu} />
          </span>
        </div>

        <ul
          className={`md:flex md:items-center text-[15px] md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500 ${
            isOpen ? 'top-24 opacity-100' : 'top-[-400px] opacity-0'
          } md:opacity-100 md:z-auto z-[-1]`}
        >
          <li className="mx-4 my-6 md:my-0">
            <NavLink to="/home" className=" hover:text-cyan-500 duration-500">
              HOME
            </NavLink>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <NavLink to="/ticket" className=" hover:text-cyan-500 duration-500">
             TICKET 
            </NavLink>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <NavLink to="/book" className=" hover:text-cyan-500 duration-500">
             FLIGHT
            </NavLink>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <NavLink to="/about" className=" hover:text-cyan-500 duration-500">
              ABOUT
            </NavLink>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <NavLink to="/contact" className=" hover:text-cyan-500 duration-500">
              CONTACT
            </NavLink>
          </li>
          
          <NavLink to="/signin" className="bg-black w-[120px] flex  items-center gap-1 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 md:hover:bg-[#4e4e4e] rounded">

              
              <VscAccount />
              
               <p>Sign in</p> 
              

          </NavLink>
        
        </ul>
      </nav>
    </>
  );
};

export default Nav;
