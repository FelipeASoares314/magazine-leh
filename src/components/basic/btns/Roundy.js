import React from 'react';

import './Roundy.css'

export default function Roundy (props) {
  return (
    <div className="rounded-button">
      {props.children}
    </div>
  )
}