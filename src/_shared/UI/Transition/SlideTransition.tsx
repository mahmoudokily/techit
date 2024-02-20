/// <reference path="../modules/global.d.tsx" />
import React from "react"
import { createGlobalStyle } from "styled-components"

import { TransitionEl } from "./TransitionEl"
import { GlobalStyleProps, TransitionProps } from "./Transitions.types"
import { DOMHelper } from "../helpers/DomHelper"

let id = 0

const getID = () => id++

if (typeof global !== "undefined")
  (global as any).SlideTransitionCleanID = () => (id = 0)

const GlobalStyle = createGlobalStyle<GlobalStyleProps>(
  ({ idd, type, duration }) => `
    .slide-${idd} {
        &slide-enter,
        &slide-leave-active {
            overflow: hidden !important;
            box-sizing: border-box !important;
        }

        &slide-enter:not(slide-enter-active),
        &slide-leave-active {
            height: 0 !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
        }

        &slide-enter-active,
        &slide-leave-active {
            transition: ${duration}ms 0s ${type};
            transition-property: height, padding, margin;
        }
    }   
`
)

export const SlideTransition: React.FC<TransitionProps> = ({
  children,
  $status,
  $display,
  $type = "ease-in-out",
  $duration = 150,
  $beforeShow,
  $beforeHide,
  $afterShow,
  $afterHide
}) => {
  const [idd] = React.useState<number>(() => getID())

  const show = (el: HTMLElement): Promise<void> =>
    new Promise((resolve) => {
      const className: string = el.className || ""
      const style: string = el.getAttribute("style") || ""
      el.classList.add(`slide-${idd}`)
      el.style.opacity = "0"
      const height: number = el.offsetHeight

      DOMHelper.requestAnimationFrame.call(window, () => {
        el.classList.add("slide-enter")

        DOMHelper.requestAnimationFrame.call(window, () => {
          el.style.opacity = "1"
          el.style.height = `${height}px`
          el.classList.add("slide-enter-active")

          DOMHelper.addEventListenerOnce(el, DOMHelper.TRANSITION_END, () => {
            el.className = className
            el.setAttribute("style", style)
            resolve()
          })
        })
      })
    })

  const hide = (el: HTMLElement): Promise<void> =>
    new Promise((resolve) => {
      const className: string = el.className || ""
      const style: string = el.getAttribute("style") || ""
      el.classList.add(`slide-${idd}`)

      DOMHelper.requestAnimationFrame.call(window, () => {
        el.style.height = `${el.offsetHeight}px`

        DOMHelper.requestAnimationFrame.call(window, () => {
          el.classList.add("slide-leave-active")

          DOMHelper.addEventListenerOnce(el, DOMHelper.TRANSITION_END, () => {
            el.className = className
            el.setAttribute("style", style)
            resolve()
          })
        })
      })
    })

  return (
    <>
      <GlobalStyle idd={id} type={$type} duration={$duration} />
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
