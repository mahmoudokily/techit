import React from "react"
import { findDOMNode } from "react-dom"
import { TransitionProps } from "./Transitions.types"

interface State {
  display: boolean
}

export class TransitionEl extends React.Component<TransitionProps, State> {
  private static defaultProps = {
    $beforeShow: () => Promise.resolve(),
    $beforeHide: () => Promise.resolve(),
    $show: () => Promise.resolve(),
    $hide: () => Promise.resolve(),
    $afterShow: () => undefined,
    $afterHide: () => undefined
  }

  private status: boolean
  private processing: boolean = false

  constructor(props: TransitionProps) {
    super(props)

    this.state = {
      display: this.props.$status as boolean
    }

    this.status = this.props.$status as boolean
  }

  componentDidMount() {
    this.setDisplay(this.props, this.state)

    if (this.props.$display) {
      const el = findDOMNode(this) as HTMLElement
      if (el) {
        const style = el.getAttribute("style")
        el.setAttribute("style", `display:none !important; ${style || ""}`)
      }
    }
  }

  componentDidUpdate(op: any, os: any) {
    const np = this.props
    const ns = this.state

    if (np.$status !== op.status) this.setDisplay(np, ns)

    if (ns.display !== os.display) {
      if (!ns.display) np.$afterHide?.()
      if (ns.display) np.$beforeShow?.().then(() => this.show())
      else if (np.$status)
        this.setState({
          display: true
        })
    }
  }

  /**
   * Sets display state.
   *
   * @param props
   * @param state
   */
  setDisplay = (props: TransitionProps, state: State): void => {
    this.status = props.$status as boolean
    if (!this.processing && props.$status !== state.display) {
      if (props.$status)
        this.setState({
          display: true
        })
      else props.$beforeHide?.().then(() => this.hide())
    }
  }

  /**
   * Shows the element.
   */
  show = (): void => {
    const el = findDOMNode(this) as HTMLElement
    if (!el) return

    if (this.props.$display) {
      const style = el.getAttribute("style")
      if (style) el.setAttribute("style", style.replace(/display[^;]+;?/g, ""))
    }

    this.processing = true
    if (this.props) {
      this.props.$show?.(el).then(() => {
        this.processing = false
        this.props.$afterShow?.()
        if (!this.status) this.props.$beforeHide?.().then(() => this.hide())
      })
    }
  }

  /**
   * Hides the element.
   */
  hide = (): void => {
    const el = findDOMNode(this) as HTMLElement
    if (!el) return

    this.processing = true
    this.props.$hide?.(el).then(() => {
      if (this.props.$display) {
        const style = el.getAttribute("style")
        el.setAttribute("style", `display:none !important; ${style || ""}`)
      }

      this.processing = false
      this.setState({
        display: false
      })
    })
  }

  render() {
    return this.state.display || this.props.$display
      ? this.props.children
      : null
  }
}
