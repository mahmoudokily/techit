import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "../../_shared/styledComponents";
import { useNavigate, useLocation } from "react-router-dom";
import links from "../../_shared/utils/data/links";
import Svg from "../../_shared/styledComponents/Svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeMobileMenu = (to?: string, id?: string, action?: string) => {
    if (id && location.pathname === "/") {
      scrollTo(id);
    }
    if (to) {
      navigate(to);
    }

    setShow(false);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src="./assets/logo.svg" alt="logo" />
            TechIt
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? (
              <Svg name="Close" color="white" />
            ) : (
              <Svg name="Dashboard" color="white" />
            )}
          </MobileIcon>
          <NavMenu show={show}>
            {links.map((el, index) => (
              <NavItem key={index}>
                <NavLinks onClick={() => closeMobileMenu(el?.to, el.id)}>
                  {el.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
