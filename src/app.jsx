import React, { PureComponent, Fragment } from 'react'

import CanvasNest from 'components/canvas-nest'

import Header from 'pages/header'

import './style.less'
import './styles/reset.css'

export default class extends PureComponent {
  state = {
    ceshi: ''
  }

  componentDidMount() {
    window.loadlive2d("live2d", "my-blog/static/live2d/assets/koharu.model.json")
  }

  render() {
    const { ceshi } = this.state
    return (
      <Fragment>
        <Header />
        <CanvasNest className="bg-canvas" />
      </Fragment>
    )
  }
}
