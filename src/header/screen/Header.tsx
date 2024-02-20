/** @format */

import { t } from "i18next";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import packageJson from "../../../package.json";
import {
  Box,
  Button,
  Dropdown,
  DropdownContent,
  DropdownHeader,
  Typography,
} from "../../_shared/UI";
import i18n from "../../_shared/i18n/i18n";
import {
  Img,
  ImgWrapper,
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
import UserService, { _kc } from "../../_shared/utils/services/AuthService";
import RenderOnRole from "../../_shared/UI/RenderOnRole";

type HeaderProps = {
  autoHide?: boolean;
};
const languageOptions = [
  {
    label: "English",
    value: "en",
    flag: "./assets/svg/us-flag.svg",
  },
  {
    label: "Italiano",
    value: "it",
    flag: "./assets/svg/it-flag.svg",
  },
];
const Header: React.FC<HeaderProps> = ({ autoHide = true }) => {
  const [show, setShow] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

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
    setShow(false);
    await navigate(to, { preventScrollReset: true });
    id && scrollTo(id);
    // if (id && location.pathname === "/") {
    //   return scrollTo(id);
    // }
  };
  console.log(_kc.hasRealmRole("cafSaas"));
  console.log(_kc.tokenParsed);

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
  const activeLang = localStorage?.getItem("i18nextLng");
  const isAuth = UserService?.isLoggedIn();

  const selectedLanguage = useMemo(
    () => languageOptions.find((lang) => lang.value === activeLang),
    [activeLang]
  );

  return (
    <Nav id="navbar" show={showBackground}>
      <Version> V {packageJson.version}</Version>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon />
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
            <Svg name="Menu" color="white" />
          )}
        </MobileIcon>
        <NavMenu show={show}>
          {links.map((el, index) => (
            <RenderOnRole roles={el.roles}>
              <NavItem key={index}>
                <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                  {t(el.text)}
                </NavLinks>
              </NavItem>
            </RenderOnRole>
          ))}
          <Dropdown zIndex={3000000000000}>
            <DropdownHeader width={70}>
              <Button
                flexShrink={0}
                $fill={false}
                icon={<Img width={20} src={selectedLanguage?.flag} />}
                iconPosition="right"
              >
                {selectedLanguage?.value}
              </Button>
            </DropdownHeader>
            <DropdownContent backgroundColor={"white"} width={70}>
              <Flex
                style={{ gap: "5px 5px" }}
                // border="1px solid #737373"
              >
                {languageOptions
                  .filter(
                    (language) => language.value !== selectedLanguage?.value
                  )
                  .map((language) => {
                    return (
                      <Flex
                        onClick={onChangeLanguage(
                          language.value as "en" | "it"
                        )}
                        p={1}
                        style={{ cursor: "pointer" }}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        flexDirection={"row"}
                      >
                        <Typography color="primary">
                          {language.value?.toUpperCase()}
                        </Typography>
                        <Img width={20} src={language?.flag} />
                      </Flex>
                    );
                  })}
              </Flex>
            </DropdownContent>
          </Dropdown>
          {isAuth ? (
            <NavItem>
              <NavLinks onClick={() => UserService.doLogout()}>
                {t("Logout")}
              </NavLinks>
            </NavItem>
          ) : (
            <NavItem>
              <NavLinks onClick={() => UserService.doLogin()}>
                {t("Login")}
              </NavLinks>
            </NavItem>
          )}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};
export default Header;
