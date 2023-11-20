import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import packageJson from "../../../package.json";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavIcon,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  Version,
} from "../../_shared/styledComponents";
import Svg from "../../_shared/styledComponents/Svg";
import links from "../../_shared/utils/data/links";
import { Typography } from "../../_shared/UI";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
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

  useEffect(() => {
    window?.addEventListener("scroll", () => {
      if (window.scrollY > 80) setShowBackground(true);
      else setShowBackground(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 80) setShowBackground(true);
        else setShowBackground(false);
      });
    };
  }, []);

  return (
    <Nav id="navbar" show={showBackground}>
      <Version> V {packageJson.version}</Version>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon src="./assets/logo.svg" alt="logo" />
          <Typography color="white" width={200} variant={"title40"}>
            TechIt
          </Typography>
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
  );
};
export default Header;
