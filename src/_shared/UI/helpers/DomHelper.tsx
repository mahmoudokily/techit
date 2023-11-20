import { SizeStrictProps } from "./types";

export class DOMHelper {
  static TRANSITION_END: string[] = [
    "transitionend",
    "webkitTransitionEnd",
    "mozTransitionEnd",
    "oTransitionEnd",
  ];
  static MOUSE_WHEEL: string[] = ["wheel", "mousewheel", "DOMMouseScroll"];

  static requestAnimationFrame: Function =
    typeof window !== "undefined"
      ? (window as any).mozRequestAnimationFrame ||
        window.requestAnimationFrame ||
        (window as any).webkitRequestAnimationFrame ||
        (window as any).oRequestAnimationFrame ||
        (window as any).msRequestAnimationFrame ||
        ((callback: Function) => {
          window.setTimeout(callback, 1000 / 60);
        })
      : () => {};

  static isServer: boolean = typeof window === "undefined";

  static isMobile: boolean = DOMHelper.isServer
    ? false
    : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

  /**
   * Attaches events to the given element.
   *
   * @param el
   * @param events
   * @param callback
   * @param options
   */
  static addEventListener(
    el: HTMLElement | Document | Window,
    events: string[],
    callback: (e: any) => void,
    options: boolean | AddEventListenerOptions = true
  ): void {
    for (let i in events) {
      el?.addEventListener(events[i], callback, options);
    }
  }

  /**
   * Removes events from the given element.
   *
   * @param el
   * @param events
   * @param callback
   * @param options
   */
  static removeEventListener(
    el: HTMLElement | Document | Window,
    events: string[],
    callback: (e: any) => void,
    options: boolean | EventListenerOptions = true
  ): void {
    for (let i in events) {
      el?.removeEventListener(events[i], callback, options);
    }
  }

  /**
   * Attaches events to the given element for once.
   *
   * @param el
   * @param events
   * @param callback
   * @param addOptions
   * @param removeOptions
   */
  static addEventListenerOnce(
    el: HTMLElement | Document | Window,
    events: string[],
    callback: (e: Event) => void,
    addOptions: boolean | AddEventListenerOptions = true,
    removeOptions: boolean | EventListenerOptions = true
  ): void {
    let cb: EventListener = (e: Event) => {
      this.removeEventListener(el, events, cb, removeOptions);
      callback(e);
    };

    this.addEventListener(el, events, cb, addOptions);
  }

  /**
   * Checks if target is a clickable element.
   *
   * @param target
   * @param container
   */
  static checkIfTargetIsClickable(
    target: HTMLElement,
    container: HTMLElement
  ): boolean {
    let status: boolean = true;
    while (container.contains(target)) {
      if (target.getAttribute("data-src-not-clickable")) {
        status = false;
        break;
      }
      target = target.parentNode as HTMLElement;
    }

    return status;
  }

  /**
   * Gets breakpoint key by window size.
   *
   * @param sb
   * @param theme
   */
  static getBreakpointKey(
    { size, sizeSm, sizeMd, sizeLg, sizeXl }: SizeStrictProps,
    theme: any
  ): string {
    const width = window.innerWidth;
    let key = size;
    if (sizeSm && width > theme.grid.breakpoint.small) key = sizeSm;
    if (sizeMd && width > theme.grid.breakpoint.medium) key = sizeMd;
    if (sizeLg && width > theme.grid.breakpoint.large) key = sizeLg;
    if (sizeXl && width > theme.grid.breakpoint.xlarge) key = sizeXl;
    return key;
  }

  /**
   * Gets scroll parent of the given element.
   *
   * @param el
   */
  static getScrollParent(el: HTMLElement): HTMLElement | null {
    for (let parent = el; (parent = parent.parentElement as HTMLElement); ) {
      let style = window.getComputedStyle(parent, null);
      if (
        /(auto|scroll|hidden)/.test(
          style.overflow + style.overflowX + style.overflowY
        )
      )
        return parent;
    }

    return null;
  }

  /**
   * Checks if an element can be rendered in the React portal.
   *
   * @param renderInPortal
   */
  static canBeRenderedInPortal(renderInPortal: boolean): boolean {
    return renderInPortal &&
      typeof window !== "undefined" &&
      process.env.NODE_ENV !== "test"
      ? true
      : false;
  }
}
