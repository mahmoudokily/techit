import { RefObject, useEffect } from 'react';

export const useOnEscape = (handler: (event: KeyboardEvent) => void, active = true) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useEffect(() => {
    if (active) {
      const listener = (event: KeyboardEvent) => {
        // check if key is an Escape
        if (event.key === 'Escape') handler(event);
      };
      document.addEventListener('keyup', listener);

      return () => {
        if (!active) return null;
        document.removeEventListener('keyup', listener);
      };
    }
  }, [handler, active]);
};

export const useOnClickOutside = (
  ref: RefObject<HTMLElement> | RefObject<HTMLElement>[],
  handler: (event: TouchEvent | MouseEvent) => void,
  active = true,
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
        if (!r.current || r.current.contains(event.target as Node)) {
          contains = true;
          return;
        }
      });
      event.stopPropagation();
      if (!contains) handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      if (!active) return;
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, active]);
};
