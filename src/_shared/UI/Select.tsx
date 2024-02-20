import React from "react"
import ReactSelect, {
  components,
  Props as SelectProps,
  StylesConfig
} from "react-select"
import { Box } from "./Box"
import { Typography, TypographyProps } from "./Typography"
import { useTheme } from "styled-components"

export interface CustomOption {
  readonly value: string
  readonly label: string
  readonly color?: string
  readonly isFixed?: boolean
  readonly isDisabled?: boolean
}

export const customStyle: StylesConfig = {
  control: (styles, props) => ({
    ...styles,
    borderColor: props.isDisabled ? "white" : "#737373",

    // backgroundColor: "white",

    ":hover": {
      borderColor: "#cf4f83"
    },
    ":focus": {
      borderColor: "#cf4f83"
    },
    ":active": {
      borderColor: "#cf4f83"
    },
    outline: "#cf4f83"
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "#b1bbc4"
  }),
  indicatorsContainer: (styles) => ({
    ...styles
  }),
  dropdownIndicator: (styles, props) => ({
    ...styles,
    display: props.isDisabled ? "none" : ""
  }),
  input: (styles) => ({
    ...styles
  }),
  container: (styles) => ({
    ...styles
    // width: "100%",
  }),
  menuList: (styles) => ({
    ...styles,

    // background: "#122967",s
    borderRadius: "5px"
  }),
  singleValue: (base, props) => ({
    ...base
    // color: "red"
  }),
  menu: (styles) => ({
    ...styles
  }),
  valueContainer: (styles) => ({
    ...styles,
    display: "flex",
    flexWrap: "nowrap",
    overflow: "auto"
  }),
  multiValueLabel: (base, state: any) => {
    return state.data.isFixed
      ? { ...base, fontWeight: "bold", color: "white", paddingRight: 6 }
      : base
  },
  multiValueRemove: (base, state: any) => {
    return state.data.isFixed ? { ...base, display: "none" } : base
  },

  option: (styles) => {
    return {
      ...styles
    }
  },
  multiValue: (styles, state: any) => {
    return state.data.isFixed
      ? {
          ...styles,
          flexShrink: 0,
          backgroundColor: "gray"
        }
      : {
          ...styles,
          flexShrink: 0
        }
  }
}

export interface GroupedOption {
  readonly label: string
  readonly options: readonly CustomOption[]
}
export const Select = React.forwardRef<
  any,
  SelectProps & {
    error?: any
    showCheckbox?: boolean
    errorProps?: TypographyProps
  }
>(({ error, isMulti, showCheckbox, errorProps, ...props }, ref) => {
  const groupStyles = {
    // borderBottom: `2px solid #3D729C`,
    borderRadius: "0px"
  }
  const Group = (props: any) => (
    <div style={groupStyles}>
      <components.Group {...props} />
    </div>
  )
  return (
    <Box width="100%">
      <ReactSelect
        ref={ref}
        menuShouldScrollIntoView={false}
        isClearable={true}
        components={{ Group, ...props.components }}
        {...props}
        styles={{ ...customStyle, ...props.styles }}
        isMulti={isMulti}
      />
      {error && (
        <Typography
          width="100%"
          capitalizeFirstLetter
          variant="caption10"
          color="red"
          mt={1}
          {...errorProps}
        >
          {error}
        </Typography>
      )}
    </Box>
  )
})
export const getObjectFromString = (
  value: string | string[] | any[],
  dataKey?: string
) => {
  if (!value) return null
  if (Array.isArray(value)) {
    if (dataKey) {
      return value.map(({ dataKey }) => ({
        label: dataKey,
        value: dataKey
      }))
    }
    return value.map((v) => ({
      label: v,
      value: v
    }))
  }
  if (typeof value === "string") {
    return { label: value, value: value }
  }
}

export type SelectItem = {
  label: string
  value: string
}
export const getStringFromObject = (obj: SelectItem | SelectItem[]) => {
  if (!obj) return null
  if (Array.isArray(obj)) {
    return obj.map((o) => o.value)
  }
  return obj.value
}
export { components }
