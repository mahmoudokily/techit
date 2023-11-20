import { Coordinator, ThemeVariable } from "../helpers/types"

export type Badge = {
   fixedSize: ThemeVariable<string>
   padding: ThemeVariable<Coordinator<string>>
   margin: Coordinator<string>
   radius: ThemeVariable<string>
   fontSize: ThemeVariable<string>
}


export const badge = {
   fixedSize: {
      small: "18px",
      default: "20px",
      large: "22px"
   },
   padding: {
      small: {
         x: ".1875rem",
         y: ".09375rem"
      },
      default: {
         x: ".375rem",
         y: ".1875rem"
      },
      large: {
         x: ".65rem",
         y: ".3rem"
      }
   },
   margin: {
      x: ".3125rem",
      y: ".3125rem"
   },
   radius: {
      default: ".15rem",
      square: "0",
      rounded: ".875rem",
      circle: "100%"
   },
   fontSize: {
      small: ".75rem",
      default: ".75rem",
      large: ".875rem"
   }
}