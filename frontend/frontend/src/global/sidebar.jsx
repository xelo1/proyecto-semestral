import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { sidebarData } from "./sidebar_data";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="menu">
        {sidebarData.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="menuItem"
          >
            <div className="icon" style={{ fontSize: '26px' }}>{item.icon}</div>
            <div className="title" style={{ fontSize: '18px' }}>{item.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
