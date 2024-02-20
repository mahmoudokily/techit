import React, { PropsWithChildren, useState } from "react"

import {
  Children,
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarBrand,
  SidebarToggler
} from "./SidebarStyles"

import SidebarItems, { Item } from "./SidebarItems"
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai"
import { Container } from "../Container"

const MOBILE_VIEW = window.innerWidth < 468

const Sidebar: React.FC<PropsWithChildren<{ items: Item[] }>> = ({
  children,
  items
}) => {
  const [displaySidebar, setDisplaySidebar] = useState(!MOBILE_VIEW)

  const handleSidebarDisplay = (e: any) => {
    e.preventDefault()
    if (window.innerWidth > 468) {
      setDisplaySidebar(!displaySidebar)
    } else {
      setDisplaySidebar(false)
    }
  }

  return (
    <React.Fragment>
      <SidebarContainer displaySidebar={displaySidebar}>
        <SidebarWrapper>
          <SidebarLogoWrapper displaySidebar={displaySidebar}>
            <SidebarLogo href="#">
              <span className="app-brand-logo demo">
                <img width={50} src={"/assets/logo.svg"} alt="Brand logo" />
              </span>
              <SidebarBrand
                displaySidebar={displaySidebar}
                className="app__brand__text"
              >
                IShare Cv
              </SidebarBrand>
            </SidebarLogo>
            <SidebarToggler
              displaySidebar={displaySidebar}
              onClick={handleSidebarDisplay}
            >
              <div className="outer__circle">
                <AiOutlineMenuFold />
              </div>
            </SidebarToggler>
          </SidebarLogoWrapper>
          <SidebarItems displaySidebar={displaySidebar} data={items} />
        </SidebarWrapper>
      </SidebarContainer>

      <Children displaySidebar={displaySidebar}>{children}</Children>
    </React.Fragment>
  )
}

export default Sidebar
