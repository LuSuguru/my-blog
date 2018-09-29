import React, { PureComponent } from 'react'
import CanvasNest from 'canvas-nest.js'

export default class extends PureComponent {
  canvasRef = React.createRef()

  componentDidMount() {
    this.cn = new CanvasNest(this.canvasRef.current, {
      color: '33,150,243'
    })
  }

  componentWillUnmount() {
    this.cn.destroy()
  }

  render() {
    return (
      <div ref={this.canvasRef} {...this.props} />
    )
  }
}
