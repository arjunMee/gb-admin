import React from 'react'
import './skeleton.scss'

function skeleton({ type }) {
  const typeClass = `skeleton ${type}`
  return <div className={typeClass}></div>
}

export default skeleton
