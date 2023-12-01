import React from "react"
import "./Header.css"
import "./Header.responsive.css"
import NavigationPanel from "../navigation-panel/NavigationPanel"
import LanguageSelector from "../language-selector/LanguageSelector"
import Menu from "../menu/Menu"
import AppImage from "../app-image/AppImage"

function Header() {
  return (
    <div className="header">
      <div className="header__ctn ctn min-hp">
        <div className="header__ctn__logo">
          <AppImage src="/images/logo-header.svg" />
        </div>
        <div className="header__ctn__panel">
          <NavigationPanel />
          <LanguageSelector />
        </div>
        <div className="header__ctn__menu">
          <Menu 
          header={null} 
          side={"/images/icon-three-line-menu-white.svg"}
          items={[<NavigationPanel />, <LanguageSelector />]}
          />
        </div>
      </div>
    </div>
  )
}

export default Header