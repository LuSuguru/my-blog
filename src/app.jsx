import React, { PureComponent } from 'react'

import CanvasNest from 'components/canvas-nest'
// import ceshi from 'utils/live2d'
import './style.less'
import './styles/reset.css'

export default class extends PureComponent {
  state = {
    ceshi: ''
  }

  componentDidMount() {

  }

  render() {
    const { ceshi } = this.state
    return (
      <CanvasNest className="bg-canvas" />
    )
  }
}
