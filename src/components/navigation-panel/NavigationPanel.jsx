import React from "react"
import Menu from "../menu/Menu";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {BRAND_LINKS, SEAL_LINKS} from "../../utils";

function NavigationPanel() {
  const {t} = useTranslation()

  return (
    <div className="navigation-panel">
      <div className="navigation-panel__item">
        <NavLink to="/">{t("header.a").toUpperCase()}</NavLink>
      </div>
      <div className="navigation-panel__item">
        <NavLink to="/who-are-we">{t("header.b").toUpperCase()}</NavLink>
      </div>
      <div className="navigation-panel__item">
        <NavLink to="/our-coffee">{t("header.c").toUpperCase()}</NavLink>
      </div>
      <div className="navigation-panel__item">
        <Menu header={t("header.d").toUpperCase()} 
        side={"/images/icon-arrow-down-white.svg"}
        items={SEAL_LINKS.map(i => <NavLink to={i.to}>{i.text.toUpperCase()}</NavLink>)}
        />
      </div>
      <div className="navigation-panel__item">
        <Menu header={t("header.e").toUpperCase()} 
        side={"/images/icon-arrow-down-white.svg"}
        items={BRAND_LINKS.map(i => <NavLink to={i.to}>{i.text.toUpperCase()}</NavLink>)}
        />
      </div>
    </div>
  )
}

export default NavigationPanel