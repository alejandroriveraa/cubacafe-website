import React from "react"
import "./BrandTemplate.css"
import "./BrandTemplate.responsive.css"
import AppImage from "../app-image/AppImage"
import AppVideo from "../app-video/AppVideo"

function BrandTemplate({
  backgroundColor,
  banner,
  logo,
  category,
  video,
  slogan,
  description,
  format
}) {
  return (
    <div className="brand-template" style={{backgroundColor: `var(${backgroundColor})`}}>
      <div className="brand-template__ctn ctn">
        <div className="brand-template__ctn__banner">
          <AppImage src={banner}/>
        </div>
        <div className="brand-template__ctn__logo">
          <AppImage src={logo}/>
        </div>
        <div className="brand-template__ctn__category">
          <p>{category}</p>
        </div>
        <div className="brand-template__ctn__video">
          <AppVideo videoUrl={video}/>
        </div>
        <div className="brand-template__ctn__content">
          <div className="brand-template__ctn__content__slogan">
            <p>{slogan}</p>
          </div>
          <div className="brand-template__ctn__content__description">
            <p>{description}</p>
          </div>
          <div className="brand-template__ctn__content__format">
            <p>{format}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandTemplate