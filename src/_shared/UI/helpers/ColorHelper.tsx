import Color from "color";
import DV from "./DV";
import { ColorObject } from "./types";

export class ColorHelper {
  /**
   * Creates a color object with the given value and returns it.
   *
   * @param value
   */
  static getColor(value: string): ColorObject {
    return Color(value) as any as ColorObject;
  }

  /**
   * Mixes two colors.
   * If weight is a negative number, mixs value with white.
   * If weight is a positive number, mixs value with black.
   * Weight could be an three-length array. It applies different weight for red, green and blue respectively.
   *
   * @param value
   * @param weight
   */
  static mix(value: string, weight: number | number[]): string {
    if (typeof weight === "number")
      weight = [weight, weight, weight] as number[];

    const rgb = [];
    const hex2 = this.getColor(value).hex().toString();
    for (let i = 0; i < 3; i++) {
      const hex1 = weight[i] > 0 ? "#000000" : "#FFFFFF";
      weight[i] = Math.abs(weight[i]);
      const startValue = i * 2 + 1;
      const endValue = startValue + 2;
      const value1 = parseInt(hex1.substring(startValue, endValue), 16);
      const value2 = parseInt(hex2.substring(startValue, endValue), 16);
      let mixedValue = Math.floor(
        value1 * weight[i] + value2 * (1 - weight[i])
      ).toString(16);
      if (mixedValue.length == 1) mixedValue = `0${mixedValue}`;
      rgb.push(mixedValue);
    }

    return `#${rgb.join("")}`;
  }

  /**
   * Gets the font color by value.
   * If the value is dark, returns the light font color or vice versa.
   *
   * @param value
   */
  static getFontColor(value: string): string {
    return this.getColor(value).isDark()
      ? DV.LIGHT_FONT_COLOR
      : DV.DARK_FONT_COLOR;
  }

  /**
   * Converts the given string color value to rgb string value.
   *
   * @param value
   */
  static convertToRgb(value: string) {
    return this.getColor(value).rgb().toString();
  }
}
