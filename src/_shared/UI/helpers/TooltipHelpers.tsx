import { TooltipAttributes, TooltipPositionResult } from "../popover/types"

export default class TooltipHelper {
      private static positionOrder: any = {
            right: ["right", "left", "top", "bottom"],
            left: ["left", "right", "top", "bottom"],
            top: ["top", "bottom", "right", "left"],
            bottom: ["bottom", "top", "right", "left"]
      }

      /**
       * Calculates tooltip position by the given position status.
       * 
       * @param target 
       * @param container 
       * @param global 
       * @param position 
       * @param header
       * @param arrow
       */
      private static getPosition(target: ClientRect, container: ClientRect, global: { width: number, height: number }, position: string, header?: ClientRect | null, arrow?: ClientRect): TooltipPositionResult {
            let status: boolean = false;
            let overflow: number = 1;
            let left
            let top

            let arrowWidth = 0
            let arrowHeight = 0
            let arrowLeft
            let arrowTop
            let isArrowInHeader: boolean = false;
            if (arrow) {
                  arrowWidth = arrow.width
                  arrowHeight = arrow.height
            }

            switch (position) {
                  case "right":
                        const containerRight = container.left + container.width + arrowWidth
                        const targetRight = containerRight + target.width
                        status = targetRight <= global.width
                        overflow = Math.abs(global.width - targetRight)
                        left = containerRight
                        break
                  case "left":
                        const targetLeft = container.left - target.width - arrowWidth
                        status = targetLeft >= 0
                        overflow = Math.abs(targetLeft)
                        left = targetLeft
                        break
                  case "top":
                        const targetTop = container.top - target.height - arrowHeight
                        status = targetTop >= 0
                        overflow = Math.abs(targetTop)
                        top = targetTop
                        break
                  case "bottom":
                        const containerBottom = container.top + container.height + arrowHeight
                        const targetBottom = containerBottom + target.height
                        status = targetBottom <= global.height
                        overflow = Math.abs(global.height - targetBottom)
                        top = containerBottom
            }

            let diff
            switch (position) {
                  case "right":
                  case "left":
                        top = !header ? (container.top + (container.height / 2) - (target.height / 2)) : (container.top + (container.height / 2) - (header.height + arrowHeight))

                        if ((diff = top + container.height + (arrowHeight * 2)) > global.height || top < 0) {
                              if (diff > global.height)
                                    top -= diff
                              if (top < 0 && container.top > 0)
                                    top = 0

                              arrowTop = (container.top - top) + ((container.height / 2) - arrowHeight)
                              if (header && arrowTop + (arrowHeight * 2) < header.height + 2)
                                    isArrowInHeader = true
                        } else
                              arrowTop = header ? header.height : ((target.height - (arrowHeight * 2)) / 2)

                        arrowLeft = position == "right" ? arrowWidth * -1 : (target.width - 1);

                        if (top < 0 || (top + target.height) > global.height) {
                              if (status) {
                                    status = false
                                    overflow = 0
                              }

                              let topOverflow
                              if (top < 0)
                                    topOverflow = Math.abs(top)
                              else
                                    topOverflow = Math.abs((top + target.height) - global.height)
                              overflow = Math.max(Number(overflow), topOverflow)
                        }

                        break
                  case "top":
                  case "bottom":
                        left = container.left + (container.width / 2) - (target.width / 2)
                        if ((diff = left + container.width + arrowWidth - global.width) >= 0)
                              left -= diff
                        if (left < 0 && container.left > 0)
                              left = 0

                        if (left < 0 || (left + target.width) > global.width) {
                              if (status) {
                                    status = false
                                    overflow = 0
                              }

                              let leftOverflow
                              if (left < 0)
                                    leftOverflow = Math.abs(left)
                              else
                                    leftOverflow = Math.abs((left + target.width) - global.width)
                              overflow = Math.max(Number(overflow), leftOverflow)
                        }

                        arrowLeft = (container.left - left) + ((container.width / 2) - arrowWidth)
                        arrowTop = position == "bottom" ? (arrowHeight * -1) : (target.height - 1)
            }

            return {
                  position,
                  status,
                  overflow,
                  transform: `translate(${left?.toFixed(0)}px, ${top?.toFixed(0)}px)`,
                  arrowTransform: `translate(${arrowLeft?.toFixed(0)}px, ${arrowTop?.toFixed(0)}px)`,
                  isArrowInHeader
            }
      }

      /**
       * Gets tooltip attributes.
       * 
       * @param target 
       * @param container 
       * @param position 
       * @param header
       * @param arrow
       */
      static getAttributes(target: HTMLElement, container: HTMLElement, position: string, header?: HTMLElement, arrow?: HTMLElement): TooltipAttributes {
            const targetRect = target.getBoundingClientRect()
            const containerRect = container.getBoundingClientRect()
            const headerRect: DOMRect | null = header ? header?.getBoundingClientRect() : null
            const arrowRect: any = arrow ? arrow.getBoundingClientRect() : null
            const global = {
                  width: window.innerWidth,
                  height: window.innerHeight
            }
            let result: TooltipPositionResult | null = null

            for (let i in this.positionOrder[position]) {
                  const _position = this.positionOrder[position][i]
                  const _result = this.getPosition(targetRect, containerRect, global, _position, headerRect, arrowRect)

                  if (_result.status) {
                        result = _result
                        break
                  } else {
                        if (!result || (result && result.overflow > _result.overflow))
                              result = _result
                  }
            }

            return {
                  arrow: result?.position,
                  transform: result?.transform,
                  arrowTransform: result?.arrowTransform,
                  isArrowInHeader: result?.isArrowInHeader
            }
      }
}