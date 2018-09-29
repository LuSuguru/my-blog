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
    const live2dPath = process.env.NODE_ENV === 'development' ? '/my-blog/static/live2d/assets/koharu.model.json' : '/static/live2d/assets/koharu.model.json'
    window.loadlive2d("live2d", live2dPath)
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
