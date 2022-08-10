import React, { useEffect, useState } from "react";
import {
  ProSidebar,
  Menu,
  SubMenu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

import "react-pro-sidebar/dist/css/styles.css";
import { Link, NavLink, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [subMenuCollapse, setSubMenuCollapse] = useState("");
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
   setActiveMenu(location?.pathname);
  }, [location?.pathname]); 

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const subMenuIconClick = (id) => {
    if (id === subMenuCollapse) {
      setSubMenuCollapse("");
    } else {
      setSubMenuCollapse(id);
    }
  };

  return (
    <>

    <div className={`header bg-white py-3 ${menuCollapse ? 'collapsed' : ''}`} style={{height: '60px'}}>
      <h5 className="text-dark text-center">Header </h5> 

      <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
      </div>
    </div>

      <div id="sidebar-main">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>

           
          </SidebarHeader>

          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={activeMenu === '/home' && true } onOpenChange={() => subMenuIconClick("home")} icon={<FiHome />}>
                <Link className="nav-link" to={'/home'}>Home</Link>
              </MenuItem>
              
              <MenuItem active={activeMenu === '/categories' ? true : false } icon={<FaList />} onOpenChange={() => subMenuIconClick("categories")} >
                <NavLink className="nav-link" to={'/categories'}>Category</NavLink>
              </MenuItem>

              <MenuItem active={activeMenu === '/favourite' ? true : false } icon={<FaRegHeart />}>
                <NavLink className="nav-link" to={'/favourite'}>Favourite</NavLink>
              </MenuItem>

              <MenuItem active={activeMenu === '/author' ? true : false } icon={<RiPencilLine />}>
                <NavLink className="nav-link" to={'/author'}>Author</NavLink>
              </MenuItem>

              <SubMenu
                active={activeMenu === '/stages' ? true : false }
                open={subMenuCollapse === "stages" ? true : false}
                title="Stages"
                onOpenChange={() => subMenuIconClick("stages")}
                icon={<FaRegHeart />}
              
              >
                <MenuItem active={activeMenu === '/stages/stages-1' ? true : false } icon={<FaRegHeart />}>
                  <NavLink className="nav-link" to={'/stages/stages-1'}>Stages 1</NavLink>
                </MenuItem>
                <MenuItem icon={<FaRegHeart />}>Stages 2</MenuItem>
                <MenuItem icon={<FaRegHeart />}>Stages 3</MenuItem>
              </SubMenu>

              <SubMenu
                open={subMenuCollapse === "multilevel" ? true : false}
                onOpenChange={() => subMenuIconClick("multilevel")}
                title="MultiLevel"
                icon={<FaList />}
              >
                <MenuItem>Submenu 1 </MenuItem>
                <MenuItem>Submenu 2 </MenuItem>

                <SubMenu title="submenu 3">
                  <MenuItem>Submenu 3.1 </MenuItem>
                  <MenuItem>Submenu 3.2 </MenuItem>

                  <SubMenu title="Submenu 3.3">
                    <MenuItem> Submenu 3.3.1 </MenuItem>
                    <MenuItem> Submenu 3.3.2 </MenuItem>
                    <MenuItem> Submenu 3.3.3 </MenuItem>
                  </SubMenu>
                </SubMenu>
              </SubMenu>

              <SubMenu
                open={subMenuCollapse === "settings" ? true : false}
                title="Settings"
                onOpenChange={() => subMenuIconClick("settings")}
                icon={<BiCog />}
              >
                <MenuItem icon={<BiCog />}>Settings 1</MenuItem>
                <MenuItem icon={<BiCog />}>Settings 2</MenuItem>
                <MenuItem icon={<BiCog />}>Settings 3</MenuItem>
              </SubMenu>

              <MenuItem icon={<FiHome />}>Home</MenuItem>
              <MenuItem icon={<FaList />}>Category</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
            </Menu>
          </SidebarContent>

          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};
