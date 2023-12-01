import React from "react"
import "./WhoAreWe.css"
import "./WhoAreWe.responsive.css"
import {useTranslation} from "react-i18next"
import AppImage from "../../components/app-image/AppImage"

function WhoAreWe() {
  const {t} = useTranslation()

  return (
    <div className="who-are-we">
      <div className="who-are-we__ctn ctn">
        <div className="who-are-we__ctn__banner">
          <AppImage src={"/images/banner-who-are-we.jpg"}/>
        </div>
        <div className="who-are-we__ctn__body min-hp min-vp">
          <div className="who-are-we__ctn__body__logo">
            <AppImage src={"/images/logo-cubacafe.svg"}/>
          </div>
          <div className="who-are-we__ctn__body__header">
            <p>{t("pages.whoAreWe.header").toUpperCase()}</p>
          </div>
          <div className="who-are-we__ctn__body__content">
            <p>{t("pages.whoAreWe.content")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoAreWe