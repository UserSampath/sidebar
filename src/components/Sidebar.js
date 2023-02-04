
import { useState } from "react";
import { FaBars, FaCommentAlt, FaRegChartBar, FaTh, FaCog } from "react-icons/fa"
import { NavLink } from "react-router-dom";


const Sidebar = ({ children }) => {
    const [open, SetOpen] = useState(false);

    const toggle = () => SetOpen(!open)

    const menuItem = [
        {
            path: "/progress",
            name: "progress",
            icon: <FaRegChartBar />
        },
        {
            path: "/dashboard",
            name: "dashboard",
            icon: <FaTh />
        },
        {
            path: "/chatRoom",
            name: "chatRoom",
            icon: <FaCommentAlt />
        },
        {
            path: "/settings",
            name: "settings",
            icon: <FaCog />
        },
    ]
    return (

        <div className="container">
            <div className="sideBar" style={{ width: open ? "230px" : "50px" }}>
                <div className="topSection"  >
                    <img style={{ display: open ? "block" : "none" }} className="logo" src="images/logo.png" alt="logo" />
                    <div className="bars" style={{ marginLeft: open ? "60px" : "12px" }}>
                        <FaBars onClick={toggle} className="fabars" />
                    </div>
                </div>
                <div>
                    {menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className={({ isActive }) => (isActive ? "active" : "noActive")} >
                            <div className="icon">{item.icon} </div>
                            <div style={{ display: open ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))}
                </div>

            </div>
            <main>{children}</main>

        </div>
    )
}

export default Sidebar;