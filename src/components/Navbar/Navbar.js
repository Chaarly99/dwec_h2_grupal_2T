import {MenuList} from "./Menulist";
import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const menuList = MenuList.map(({url, title}) => {
        return(
            <li key={title}>
                <NavLink to={url} className={(navData) => (navData.isActive ? "active" : 'none')}>
                    {title}
                </NavLink>
            </li>
        );
    });
    const handleClick = () =>{
        setClicked(!clicked);
    }
    return(
        <nav>
            <div className="logo">
                HitoGrupal<font>React</font>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>
                {menuList}
            </ul>
        </nav>
    )
};

export default Navbar;