import React from "react"
import "./SealTemplate.css"
import "./SealTemplate.responsive.css"
import AppImage from '../app-image/AppImage';

const SealTemplate = ({banner, header, content}) => {
  return (
    <div className="seal-template">
      <div className="seal-template__ctn ctn">
        <div className="seal-template__ctn__banner">
          <AppImage src={banner} />
        </div>
        <div className="seal-template__ctn__content">
          <div className="seal-template__ctn__content__header">
            <p>{header}</p>
          </div>
          <div className="seal-template__ctn__content__body">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SealTemplate