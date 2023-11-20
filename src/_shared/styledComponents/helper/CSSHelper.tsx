import { JSXElementProps, Value } from "../types";

type Theme = any;
export class CSSHelper {
  private static BREAKPOINT = {
    Sm: "small",
    Md: "medium",
    Lg: "large",
    Xl: "xlarge",
    small: "small",
    medium: "medium",
    large: "large",
    xlarge: "xlarge",
  };

  /**
   * Gets CSS reference(s) by key.
   *
   * @param props - Styled component props
   * @param key
   */
  static getCSSByProps(props: JSXElementProps, key: string): string {
    const customKeys = props.customKeys;
    const elementKeys = props.elementKeys;
    let keys;
    let _key;
    let breakpoint;

    if (customKeys[key] || elementKeys[key]) {
      keys = customKeys[key] ? customKeys : elementKeys;
      _key = key;
      breakpoint = "Xs";
    } else {
      _key = key.substring(0, key.length - 2);
      if (customKeys[_key] || elementKeys[_key]) {
        keys = customKeys[_key] ? customKeys : elementKeys;
        breakpoint = key.substring(key.length - 2, key.length);
      }
    }

    if (
      keys &&
      props[key] !== null &&
      props[key] !== false &&
      typeof props[key] !== "undefined"
    ) {
      let css: string;
      let value = props[key];
      let important: boolean;

      if (Array.isArray(value)) {
        important = value[1];
        value = value[0];
      }

      if (typeof keys[_key] === "string")
        css = `${keys[_key]}:${props.important ? " !important" : ""};`;
      else {
        css = (keys[_key] as ElementPropValueMethod)(value, props.theme);
        if (props.important) css = css.replace(/;/g, " !important;");
      }

      //   return this.addMedia(props.theme, breakpoint, css);
    }

    return "";
  }

  /**
   * If value is string, returns it as it is.
   * If it is a number, converts it to string and adds "px" suffix.
   *
   * @param value
   */
  static setValue(value: Value): string {
    if (typeof value === "string") return value;
    return `${value}px`;
  }

  /**
   * If value is registered in theme.zIndex, returns the property in the theme, if not returns the value.
   *
   * @param value
   * @param theme
   */
  static setZIndex(value: Value, theme: Theme): string {
    return `${theme.zIndex[value] || value}`;
  }

  /**
   * If value is registered in theme.length, returns the property in the theme, if not returns the value.
   *
   * @param value
   * @param theme
   */
  static setLength(value: Value, theme: Theme): string {
    return this.setValue(theme.length[value] || value);
  }

  /**
   * If value is registered in theme.radius, returns the property in the theme, if not returns the value.
   *
   * @param value
   * @param theme
   */
  static setRadius(value: Value, theme: Theme): string {
    return this.setValue(theme.radius[value] || value);
  }

  /**
   * If value is registered in theme.color, returns the property in the theme.
   * If it is registered as a type in the theme, returns type color in the theme.
   * If not returns the value.
   *
   * @param value
   * @param theme
   */
  static setColor(value: string, theme: Theme): string {
    if (theme.color[value]) return theme.color[value];

    if (theme.type[value]) return theme.type[value].main;

    const valueSplit = value.split(".");
    // if (valueSplit.length === 2 && theme.type[valueSplit[0]])
    //   return theme.type[valueSplit[0]][valueSplit[1]];

    return value;
  }

  /**
   * If value is registered in theme.fontFamily, returns the property in the theme, if not returns the value.
   *
   * @param value
   * @param theme
   */
  static setFontFamily(value: string, theme: Theme): string {
    return theme.fontFamily[value] || value;
  }

  /**
   * If value is registered in theme.fontWeight, returns the property in the theme, if not returns the value.
   *
   * @param value
   * @param theme
   */
  static setFontWeight(value: Value, theme: Theme): string {
    return this.setValue(theme.fontWeight[value] || value);
  }

  /**
   * If value is registered in theme.fontSize, returns the property in the theme, if not returns the value.
   *
   * @param value
   * @param theme
   */
  static setFontSize(value: Value, theme: Theme): string {
    return this.setValue(theme.fontSize[value] || value);
  }

  /**
   * If value is registered in theme.iconSize, returns the property in the theme, if not returns the value.
   *
   * @param value
   * @param theme
   */
  static setIconSize(value: Value, theme: Theme): string {
    return this.setValue(theme.iconSize[value] || value);
  }

  /**
   * Adds media rule to css by breakpoint.
   *
   * @param theme
   * @param breakpoint
   * @param css
   */
  //   static addMedia(theme: Theme, breakpoint: string, css: string): string {
  //     if (breakpoint === "Xs") return css;

  //     return `
  //             @media(min-width:${
  //               theme.grid.breakpoint[this.BREAKPOINT[breakpoint]]
  //             }px) {
  //                 ${css}
  //             }
  //         `;
  //   }
}
export type ElementPropValueMethod = (value: any, theme: any) => string;
