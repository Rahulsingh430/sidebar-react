import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import Sidebar from "./sidebar";
import SidebarData from "../data/SidebarData";

const Mainpage = () => {
  return (
    <React.Fragment>
      <section>
        <div className="navbar">
          <Navbar />
        </div>
      </section>
      <section>
        <div className="main_page">
          <div className="sidebar_pannel">
            <div className="sec_one ">
              <Sidebar SidebarData={SidebarData} />
            </div>
          </div>
          <div className="main_pannel"></div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Mainpage;
