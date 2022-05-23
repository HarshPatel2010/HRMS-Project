import React, { useState } from "react";
import "../CSS/SideNav.css"
import ProjectManagement from "../Pages/ProjectManagement";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import {BsPeopleFill} from "react-icons/bs"

const SideNav = ({ children }) => {
  // to close side nav
  const [isOpen, setisOpen] = useState(false);
  const toggle = ()=>{
    setisOpen(!isOpen);
    console.log(isOpen);
    
  }
  const routes = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/projectmanagement",
      name: "Project Management",
      icon: <AiOutlineFundProjectionScreen />,
    },
    {
      path: "/employeemanagement",
      name: "Employee Management",
      icon: <BsPeopleFill />,
    },
  ];
  return (
    <div className="main_container">
      <motion.div animate={{ width: isOpen ? "200px" : "38px" }} className="sidebar">
        <div className="top_section">
         {isOpen &&  <h1 className="logo">HRMS</h1>}
          <div className="bars">
            <FaBars onClick={toggle}/>
          </div>
        </div>
        <section className="routes">
          {routes.map((routes) => {
            return (
              <NavLink to={routes.path} key={routes.name} className="link">
                <div className="icon">{routes.icon}</div>
                <AnimatePresence>
               {isOpen && <motion.div className="link_text">{routes.name}</motion.div>}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default SideNav;
