import { t } from "i18next";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import packageJson from "../../../package.json";
import {
  Box,
  Dropdown,
  DropdownContent,
  DropdownHeader,
  Typography,
} from "../../_shared/UI";
import i18n from "../../_shared/i18n/i18n";
import {
  MobileIcon,
  Nav,
  NavIcon,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavbarContainer,
  Version,
} from "../../_shared/styledComponents";
import Svg from "../../_shared/styledComponents/Svg";
import links from "../../_shared/utils/data/links";
import { Flex } from "./../../_shared/UI/Flex";
import Language from "./../../_shared/assets/svg/Language";

type HeaderProps = {
  autoHide?: boolean;
};
const Header: React.FC<HeaderProps> = ({ autoHide = true }) => {
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

  const closeMobileMenu = async (to: string, id?: string, action?: string) => {
    await navigate(to);
    id && scrollTo(id);
    // if (id && location.pathname === "/") {
    //   return scrollTo(id);
    // }
  };

  useEffect(() => {
    if (autoHide) {
      window?.addEventListener("scroll", () => {
        if (window.scrollY > 80) setShowBackground(true);
        else setShowBackground(false);
      });
    } else {
      setShowBackground(true);
    }

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 80) setShowBackground(true);
        else setShowBackground(false);
      });
    };
  }, [autoHide]);

  const onChangeLanguage = (value: "en" | "it") => () => {
    window.location.reload();
    i18n.changeLanguage(value);
  };

  return (
    <Nav id="navbar" show={showBackground}>
      <Version> V {packageJson.version}</Version>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon src="./assets/logo.svg" alt="logo" />
          <Typography color="white" flexShrink={0} pr={2} variant={"title40"}>
            Momuzio
          </Typography>
          <Typography flexShrink={0} color="white" variant={"caption10"}>
            group
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
              <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                {t(el.text)}
              </NavLinks>
            </NavItem>
          ))}
          <Dropdown zIndex={3000000000000} width={40}>
            <DropdownHeader width={40}>
              <Language iconSize="5" fill={"white"} />
            </DropdownHeader>
            <DropdownContent width={40}>
              <Flex
                bg="white"
                style={{ gap: "5px 5px" }}
                // border="1px solid #737373"
              >
                {[
                  { label: "Italiano", value: "it" },
                  { label: "English", value: "en" },
                ].map((language) => {
                  return (
                    <Box
                      onClick={onChangeLanguage(language.value as "en" | "it")}
                      p={1}
                      style={{ cursor: "pointer" }}
                      bg={
                        language.value === localStorage.getItem("i18nextLng")
                          ? "primary"
                          : ""
                      }
                      color={
                        language.value === localStorage.getItem("i18nextLng")
                          ? "white"
                          : ""
                      }
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography>{language.value}</Typography>
                    </Box>
                  );
                })}
              </Flex>
            </DropdownContent>
          </Dropdown>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};
export default Header;
