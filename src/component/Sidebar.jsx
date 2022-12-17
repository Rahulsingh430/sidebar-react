import React from "react";
import SidebarData from "../data/Sidebardata";

function Sidebar() {
  return (
    <React.Fragment>
      <section>
        <div>
          {SidebarData.map((item, index) => {
            return (
              <div key={index}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Sidebar;
