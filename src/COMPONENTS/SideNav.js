import React, { useState, useEffect } from "react";
import "../CSS/SideNav.css";
import ProjectManagement from "../Pages/ProjectManagement";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { GiCrossMark } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const SideNav = ({ children }) => {
  // to close side nav
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
    console.log(isOpen);
  };
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
    <div className="main_container  ">
      <motion.div
        animate={{ width: isOpen ? "260px" : "50px" }}
        className="sidebar"
      >
        <div className="top_section">
          {isOpen && <h1 style={{paddingLeft:"20px"}} className="logo">HRMS</h1>}

          <div className="bars">
            {isOpen ? (
              <AiOutlineClose onClick={toggle} />
            ) : (
              <FaBars onClick={toggle} />
            )}
            {/* <FaBars onClick={toggle}/> */}
          </div>
        </div>
        <hr className="sidenav_hr" />
        <section className="routes">
          {routes.map((routes) => {
            return (
              <NavLink
                id={window.location.pathname == routes.path ? "active" : ""}
            
                to={routes.path}
                key={routes.name}
                activeClassName="active"
                className={
                  isOpen ? "link marginImportant  " : "link  paddingImportant"
                }
              >
                <div className="icon">{routes.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div className="link_text">{routes.name}</motion.div>
                  )}
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
