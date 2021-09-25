import React from 'react'
import PropTypes from 'prop-types'
import './skeleton.scss'

function SkeletonWrapper({ theme, classes, children }) {
  const themeClass = theme || 'light'

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      {children}
      <div className="animation"></div>
    </div>
  )
}

SkeletonWrapper.propTypes = {
  theme: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.element,
}

export default SkeletonWrapper
