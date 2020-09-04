import React from 'react'

import './DefaultPage.css'

export default function DefaultPage (props) {
  return (
    <div className="default-page">
      <div className="container min-vh-100">
        {props.children}
      </div>
    </div>
  )
}