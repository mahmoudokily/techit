import { RefObject, useEffect } from "react";

// close popup when click esc button func
export const useCloseOnPressEscape = (
  handler: (event: KeyboardEvent) => void,
  active = true
) => {
  useEffect(() => {
    const listenerFunc = (event: KeyboardEvent) => {
      if (event.key === "Escape") handler(event);
    };
    if (active) {
      document.addEventListener("keyup", listenerFunc);
    }
    return () => {
      document.removeEventListener("keyup", listenerFunc);
      if (!active) return;
    };
  }, [active, handler]);
};
// close popup when click away outside the popup
export const useCloseOnClickAway = (
  ref: RefObject<HTMLDivElement> | RefObject<HTMLDivElement>[],
  handler: (event: TouchEvent | MouseEvent) => void,
  active = true
) => {
  useEffect(() => {
    if (!active) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return;
    }

    const listener = (event: TouchEvent | MouseEvent) => {
      const refs = Array.isArray(ref) ? ref : [ref];
      let contains = false;

      refs.forEach((r) => {
        if (!r?.current || r?.current?.contains(event.target as Node)) {
          contains = true;
          return;
        }
      });
      event.stopPropagation();
      if (!contains) handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      if (!active) return;
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, active]);
};
