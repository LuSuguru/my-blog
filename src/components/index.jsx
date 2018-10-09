import React from 'react'
import addRipper from './ripple'

import './style.less'

export const Button = addRipper(({ children, className = '', ...props }) => (
  <div className={`button ${className}`} {...props}>{children}</div>))
