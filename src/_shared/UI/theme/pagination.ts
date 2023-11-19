import { Coordinator, ThemeVariable } from "../helpers/types"

export const pagination = {
   padding: {
      x: ".65rem",
      y: ".28rem"
   },
   margin: {
      x: ".2525rem",
      y: ".2525rem"
   },
   radius: {
      default: ".125rem",
      square: "0",
      rounded: ".5rem",
      circle: '50%'
   },
   fixedSize: "30px",
   fontSize: ".875rem",
   disabledOpacity: .7,
   transition: "ease-in-out 200ms 0ms"
}


export type Pagination = {
   padding: Coordinator<string>
   margin: Coordinator<string>
   fixedSize: string
   radius: ThemeVariable<string>
   fontSize: string
   disabledOpacity: number
   transition: string
}