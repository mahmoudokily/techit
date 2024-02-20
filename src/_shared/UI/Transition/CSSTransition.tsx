/// <reference path="../modules/global.d.tsx" />
import React from "react"
import { createGlobalStyle } from "styled-components"
import { TransitionEl } from "./TransitionEl"
import { DOMHelper } from "../helpers/DomHelper"
import { Value } from "../helpers/CssHelper"

let id = 0

const getID = () => id++

if (typeof global !== "undefined")
  (global as any).srcCSSTransitionCleanID = () => (id = 0)

const style = {
  "overlay-fixed-box-up": (
    transition: any,
    _duration: any,
    _type: any,
    theme: any
  ) => `
        @media(max-width:${theme?.grid.breakpoint.medium - 1}px) {
            will-change: opacity;

            &overlay-fixed-box-up-show {
                opacity: 0;
            }

            &overlay-fixed-box-up-show-active {
                transition: opacity ${transition};
                opacity: 1;
            }

            &overlay-fixed-box-up-hide {
                opacity: 1;
            }

            &overlay-fixed-box-up-hide-active {
                transition: opacity ${transition};
                opacity: 0;
            }
        }

        @media(min-width:${theme?.grid.breakpoint.medium}px) {
            > * {
                will-change: opacity, transform;
            }
            
            &overlay-fixed-box-up-show > * {
                opacity: 0;
                transform: translateY(60px);
            }
    
            &overlay-fixed-box-up-show-active > * {
                transition: ${transition};
                transition-property: opacity, transform;
                opacity: 1;
                transform: translateY(0);
            }
    
            &overlay-fixed-box-up-hide > * {
                opacity: 1;
                transform: translateY(0);
            }
    
            &overlay-fixed-box-up-hide-active > * {
                transition: ${transition};
                transition-property: opacity, transform;
                opacity: 0;
                transform: translateY(60px);
            }
        }
    `,
  "overlay-modal-down": (
    transition: any,
    _duration: any,
    _type: any,
    theme: any
  ) => `
        will-change: opacity;

        > * {
            will-change: transform;
        }

        &overlay-modal-down-show  {
            opacity: 0;

            > * {
                transform: translateY(-${theme.overlay.space});
            }
        }
        
        &overlay-modal-down-show-active {
            transition: opacity ${transition};
            opacity: 1;

            > * {
                transition: transform ${transition};
                transform: translateY(0);
            }
        }

        &overlay-modal-down-hide {
            opacity: 1;

            > * {
                transform: translateY(0px);
            }
        }

        &overlay-modal-down-hide-active {
            transition: opacity ${transition};
            opacity: 0;

            > * {
                transition: transform ${transition};
                transform: translateY(-${theme.overlay.space});
            }
        }
    `,
  fade: (transition: any) => `
        will-change: opacity;

        &fade-show {
            opacity: 0;
        }

        &fade-show-active {
            transition: opacity ${transition};
            opacity: 1;
        }

        &fade-hide {
            opacity: 1;
        }

        &fade-hide-active {
            transition: opacity ${transition};
            opacity: 0;
        }
    `,
  "dp-fade-in": (transition: any) => `
        will-change: opacity, transform;

        &dp-fade-in-show {
            opacity: 0;
            transform: scale(.85);
        }

        &dp-fade-in-show-active {
            transition: ${transition};
            transition-property: opacity, transform;
            opacity: 1;
            transform: scale(1);
        }

        &dp-fade-in-hide {
            opacity: 1;
            transform: scale(1);
        }

        &dp-fade-in-hide-active {
            transition: opacity ${transition};
            transition-property: opacity, transform;
            opacity: 0;
            transform: scale(.85);
        }
    `,
  "dp-fade-out": (transition: any) => `
        will-change: opacity, transform;

        &dp-fade-out-show {
            opacity: 0;
            transform: scale(1.15);
        }

        &dp-fade-out-show-active {
            transition: ${transition};
            transition-property: opacity, transform;
            opacity: 1;
            transform: scale(1);
        }

        &dp-fade-out-hide {
            opacity: 1;
            transform: scale(1);
        }

        &dp-fade-out-hide-active {
            transition: opacity ${transition};
            transition-property: opacity, transform;
            opacity: 0;
            transform: scale(1.15);
        }
    `,
  "button-loading": (transition: any) => `
        &button-loading-show {
            opacity: 0;
            transform: scale(.5);

            & ~ *:not(wave-ripple) {
                visibility: visible !important;
            }
        }

        &button-loading-show-active {
            transition: ${transition};
            transition-property: opacity, transform;
            opacity: 1;
            transform: scale(1);

            & ~ *:not(wave-ripple) {
                transition: transform ${transition};
                transform: translateX(100%);
            }
        }

        &button-loading-hide {
            opacity: 1;
            transform: scale(1);

            & ~ *:not(wave-ripple) {
                transform: translateX(100%);
            }
        }

        &button-loading-hide-active {
            transition: ${transition};
            transition-property: opacity, transform;
            opacity: 0;
            transform: scale(.5);

            & ~ *:not(wave-ripple) {
                transition: transform ${transition};
                transform: translateX(0%);
            }
        }
    `
}

interface GlobalStyleProps {
  id: number
  className: string
  type: string
  duration: number
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>(
  ({ theme, id, className, type, duration }) => `
    transition-${id}: {
        ${
          (style as any)[className as string]
            ? (style as any)[className](
                `${duration}ms 0ms ${type}`,
                duration,
                type,
                theme as any
              )
            : ""
        }
    } 
`
)

export interface CssTransitionProps {
  children: JSX.Element
  $status?: boolean
  $display?: boolean
  $value?: Value
  $className: string
  $type?: string
  $duration?: number
  $showAnimation?: boolean
  $hideAnimation?: boolean
  $beforeShow?: () => Promise<void>
  $beforeHide?: () => Promise<void>
  $afterShow?: () => void
  $afterHide?: () => void
}

const CSSTransition: React.FC<CssTransitionProps> = ({
  children,
  $status = false,
  $display = false,
  $className,
  $type = "ease-in-out",
  $duration = 200,
  $showAnimation = true,
  $hideAnimation = true,
  $beforeShow,
  $beforeHide,
  $afterShow,
  $afterHide
}) => {
  const [id] = React.useState<number>(() => getID())

  const show = (el: HTMLElement): Promise<void> =>
    new Promise((resolve) => {
      if (!$showAnimation) return resolve()

      DOMHelper.requestAnimationFrame.call(window, () => {
        el.classList.add(`transition-${id}`, `${$className}-show`)
        let ignored = el.offsetWidth
        el.classList.add(`${$className}-show-active`)

        setTimeout(() => {
          el.classList.remove(
            `${$className}-show-active`,
            `${$className}-show`,
            `transition-${id}`
          )
          resolve()
        }, $duration)
      })
    })

  const hide = (el: HTMLElement): Promise<void> =>
    new Promise((resolve) => {
      if (!$hideAnimation) return resolve()
      console.log(el)

      DOMHelper.requestAnimationFrame.call(window, () => {
        el.classList.add(`transition-${id}`, `${$className}-hide`)
        let ignored = el.offsetWidth
        el.classList.add(`${$className}-hide-active`)

        setTimeout(() => {
          el.classList.remove(
            `${$className}-hide`,
            `${$className}-hide-active`,
            `transition-${id}`
          )
          resolve()
        }, $duration)
      })
    })

  return (
    <>
      <GlobalStyle
        id={id}
        className={$className}
        type={$type}
        duration={$duration}
      />
      <TransitionEl
        $status={$status}
        $display={$display}
        $beforeShow={$beforeShow}
        $beforeHide={$beforeHide}
        $show={show}
        $hide={hide}
        $afterShow={$afterShow}
        $afterHide={$afterHide}
      >
        {children}
      </TransitionEl>
    </>
  )
}

export default CSSTransition
