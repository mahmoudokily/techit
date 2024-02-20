import { BsFillStickyFill, BsSkipStart } from "react-icons/bs"
import { GrContact, GrView, GrWorkshop } from "react-icons/gr"
import { BiSave } from "react-icons/bi"
import { FaHockeyPuck, FaSchool } from "react-icons/fa"
import { ReactNode } from "react"

export type Step = {
  id: number
  name: string
  path: string
  icon: ReactNode
}
export const createCvSteps: Step[] = [
  // {
  //   id: 1,
  //   name: "start",
  //   path: "start",
  //   icon: <BsSkipStart />
  // },
  {
    id: 2,
    name: "Personal details",
    path: "contact-details",
    icon: <GrContact />
  },
  { id: 3, name: "work-history", path: "work-history", icon: <GrWorkshop /> },
  { id: 4, name: "education", path: "education", icon: <FaSchool /> },
  { id: 5, name: "skills", path: "skills", icon: <BsFillStickyFill /> },
  { id: 6, name: "preferences", path: "preferences", icon: <FaHockeyPuck /> },
  // { id: 7, name: "preview", path: "preview", icon: <GrView /> },
  { id: 8, name: "save", path: "save", icon: <BiSave /> }
]
