import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

document.getElementById('root').style.height = `${window.innerHeight}px`

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
