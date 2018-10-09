import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import { TransitionGroup } from 'react-transition-group'

import Ripple from './ripple'

export default class TouchRipple extends PureComponent {
  state = {
    nextKey: 0,
    ripples: []
  }

  pulsate = () => {
    this.start({}, { pulsate: true })
  };

  start = ({ clientX, clientY }, options = {}) => {
    const { pulsate = false } = options

    const element = ReactDOM.findDOMNode(this)
    const rect = element ? element.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 }

    let rippleX = ''
    let rippleY = ''
    let rippleSize = ''

    if ((clientX === 0 && clientY === 0) || !clientX) {
      rippleX = Math.round(rect.width / 2)
      rippleY = Math.round(rect.height / 2)
    } else {
      rippleX = Math.round(clientX - rect.left)
      rippleY = Math.round(clientY - rect.top)
    }

    const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2
    const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2
    rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2)

    this.startCommit({ pulsate, rippleX, rippleY, rippleSize })
  }

  startCommit = ({ pulsate, rippleX, rippleY, rippleSize }) => {
    this.setState(({ nextKey, ripples }) => ({
      nextKey: nextKey + 1,
      ripples: [
        ...ripples,
        <Ripple
          key={nextKey}
          ceshi={nextKey}
          timeout={{ exit: 550, enter: 550 }}
          pulsate={pulsate}
          rippleX={rippleX}
          rippleY={rippleY}
          rippleSize={rippleSize} />
      ]
    }))
  }

  stop = () => {
    const { ripples } = this.state

    if (ripples && ripples.length) {
      this.setState({ ripples: ripples.slice(1) })
    }
  }

  render() {
    return (
      <TransitionGroup
        component="span"
        className="ripple-con"
        enter
        exit>
        {this.state.ripples}
      </TransitionGroup>
    )
  }
}
