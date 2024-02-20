import React, { ReactNode } from "react"
import { Link, useLocation } from "react-router-dom"
import { checkIsActive } from "../../utils/routerHelper"
import {
  ItemContainer,
  ItemName,
  ItemWrapper,
  ItemsList
} from "./SidebarStyles"

export interface Item {
  id: number
  name: string
  path: string
  icon: ReactNode
}
const SidebarItems: React.FC<{ displaySidebar: boolean; data: Item[] }> = ({
  displaySidebar,
  data
}) => {
  const location = useLocation()

  return (
    <ItemsList>
      {data.map((itemData, index) => (
        <ItemContainer
          title={itemData.name}
          key={index}
          className={
            checkIsActive(itemData.path, location.pathname) ? "active" : ""
          }
        >
          <Link to={itemData.path}>
            <ItemWrapper>
              {itemData.icon}
              <ItemName displaySidebar={displaySidebar}>
                {itemData.name}
              </ItemName>
            </ItemWrapper>
          </Link>
        </ItemContainer>
      ))}
    </ItemsList>
  )
}

export default SidebarItems
