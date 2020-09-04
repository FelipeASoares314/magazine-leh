import React from 'react'

import './DefaultPage.css'

export default function DefaultPage (props) {
  return (
    <div className="default-page">{props.children}</div>
  )
}