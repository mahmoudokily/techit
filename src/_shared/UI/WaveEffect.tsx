/// <reference path="./modules/global.d.tsx" />
import React, { useRef } from "react"
import { createGlobalStyle } from "styled-components"
import { DOMHelper } from "./helpers/DomHelper"
import DV from "./helpers/DV"
import { useEffect } from 'react';


let id = 0
const getID = () => (process.env.NODE_ENV !== "test" ? id++ : 0);

if (typeof global !== "undefined")
      (global as any).srcWaveEffectCleanID = () => id = 0
type EffectVariant = 'dark' | 'light'

interface GlobalStyleProps {
      id: number
      variant: EffectVariant
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>(({ theme, id, variant = 'light' }) => `
    *[data-src-wave-effect="${id}"] {
        position: relative;
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;
        .src-wave-ripple {
            position: absolute;
            width: 100px;
            height: 100px;
            margin-top: -50px;
            margin-left: -50px;
            border-radius: 50%;
            background: ${(theme as any).type[variant]?.waveEffect.color};
            pointer-events: none;
            transform: scale(0);
            opacity: 0;
            transition: ${(theme as any)?.waveEffect?.transition};
            transition-property: transform, opacity;
        }
    }
`)

export interface Props {
      children: JSX.Element
      variant?: string
}


const WaveEffect: React.FC<Props> = ({ variant = 'dark', children }) => {
      let active: boolean = false;
      let lastRippleEl: HTMLElement | null = null
      const itemRef = useRef<HTMLElement | null>()
      const currentId = getID()
      const end = (): void => {
            if (active) {
                  active = false
                  removeEventListener()
                  if (lastRippleEl) {
                        const date = parseInt(lastRippleEl.getAttribute("data-src-end-time") as string)
                        if (date < new Date().getTime())
                              removeRippleElement(lastRippleEl)
                  }
            }
      }


      useEffect(() => {
            if (itemRef?.current) {
                  itemRef?.current?.setAttribute("data-src-wave-effect", currentId.toString())

            }

            return () => itemRef?.current?.removeAttribute("data-src-wave-effect")
      }, [itemRef])

      const mouseUp = (e: MouseEvent): void => {
            if (DOMHelper.isMobile)
                  return
            if (children.props.onMouseUp)
                  children.props.onMouseUp(e)
            end()
      }

      const touchEnd = (e: MouseEvent): void => {
            if (children.props.onTouchEnd)
                  children.props.onTouchEnd(e)
            end()
      }
      const removeEventListener = () => {
            DOMHelper.removeEventListener(window, ["mousemove"], mouseMove)
            DOMHelper.removeEventListener(window, ["touchmove"], touchMove)
            DOMHelper.removeEventListener(window, ["mouseup"], mouseUp)
            DOMHelper.removeEventListener(window, ["touchend"], touchEnd)
      }

      const removeRippleElement = (rippleEl: HTMLElement): void => {
            const ignored = rippleEl.offsetWidth

            rippleEl.style.opacity = "0"

            setTimeout(() => {
                  const containerEl = itemRef.current as HTMLElement
                  if (containerEl)
                        containerEl.removeChild(rippleEl)

                  if (lastRippleEl == rippleEl)
                        lastRippleEl = null
            }, DV.WAVE_EFFECT_TRANSITION_DURATION)
      }

      const move = (e: MouseEvent): void => {
            if (active && lastRippleEl) {
                  const target = e.target as HTMLElement
                  const containerEl = itemRef.current as HTMLElement
                  if (target != containerEl && !containerEl.contains(target)) {
                        active = false
                        removeEventListener()
                        removeRippleElement(lastRippleEl)
                  }
            }
      }

      const mouseMove = (e: MouseEvent): void => {
            if (DOMHelper.isMobile)
                  return
            if (children.props.onMouseMove)
                  children.props.onMouseMove(e)
            move(e)
      }

      const touchMove = (e: MouseEvent): void => {
            if (children.props.onTouchMove)
                  children.props.onTouchMove(e)
            move(e)
      }


      const addEventListener = () => {
            DOMHelper.addEventListener(window, ["mousemove"], mouseMove)
            DOMHelper.addEventListener(window, ["touchmove"], touchMove)
            DOMHelper.addEventListener(window, ["mouseup"], mouseUp)
            DOMHelper.addEventListener(window, ["touchend"], touchEnd)
      }

      const start = (e: MouseEvent & TouchEvent): void => {
            if (e.button == 2)
                  return

            if (!active) {
                  active = true
                  addEventListener()
            }

            const containerEl = itemRef.current as HTMLElement
            const rippleEl = lastRippleEl = document.createElement("div")
            const rect = containerEl.getBoundingClientRect()
            const scale = (containerEl.clientWidth / 100) * 3

            let left
            let top
            if (DOMHelper.isMobile) {
                  const t = e.touches[0]
                  left = (t.pageX - window.pageXOffset) - rect.left
                  top = (t.pageY - window.pageYOffset) - rect.top
            } else {
                  left = e.clientX - rect.left
                  top = e.clientY - rect.top
            }

            rippleEl.classList.add("src-wave-ripple")
            rippleEl.setAttribute("data-src-end-time", (new Date().getTime() + 275).toString())
            containerEl.appendChild(rippleEl)
            const ignored = rippleEl.offsetWidth


            rippleEl.setAttribute("style", `
            left: ${left}px;
            top: ${top}px;
            transform: scale(${scale});
            opacity: 1;
        `)

            setTimeout(() => {
                  if (!active || lastRippleEl != rippleEl)
                        removeRippleElement(rippleEl)
            }, 275)
      }
      const mouseDown = (e: MouseEvent & TouchEvent): void => {
            if (DOMHelper.isMobile)
                  return
            if (children.props.onMouseDown)
                  children.props.onMouseDown(e)
            start(e)
      }

      const touchStart = (e: MouseEvent & TouchEvent): void => {
            if (children.props.onTouchStart)
                  children.props.onTouchStart(e)
            start(e)
      }
      return (
            <>
                  <GlobalStyle id={currentId} variant={variant as EffectVariant} />
                  {
                        React.cloneElement(children, {
                              ref: itemRef,
                              "data-src-wave-effect": String(currentId),
                              onMouseDown: mouseDown,
                              onTouchStart: touchStart,
                              onMouseUp: mouseUp


                        })}
            </>
      )


}

export default WaveEffect;
