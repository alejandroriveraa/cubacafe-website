import "./Footer.css"
import "./Footer.responsive.css"
import {useTranslation} from "react-i18next"
import AppImage from "../app-image/AppImage"

function Footer() {
  const {t} = useTranslation()

  return (
    <div className="footer">
      {/* footer above */}
      <div className="footer__ab">
        <div className="footer__ab__ctn ctn">
          <div className="footer__ab__ctn__logo">
            <AppImage src={"/images/logo-footer.svg"} />
          </div>
          <div className="footer__ab__ctn__contact">
            <div className="footer__ab__ctn__contact__header">
              <p>{t("footer.contactUs").toUpperCase()}</p>
            </div>
            <div className="footer__ab__ctn__contact__body">
              <div className="footer__ab__ctn__contact__body__item">
                <p>{t("footer.phone")}</p>
              </div>
              <div className="footer__ab__ctn__contact__body__item">
                <p>{t("footer.email")}</p>
              </div>
              <div className="footer__ab__ctn__contact__body__sm">
                <div className="footer__ab__ctn__contact__body__sm__follow">
                  <p>{t("footer.followUs")}</p>
                </div>
                <div className="footer__ab__ctn__contact__body__sm__icon">
                  <AppImage src={"/images/logo-sm-facebook.svg"} />
                </div>
                <div className="footer__ab__ctn__contact__body__sm__icon">
                  <AppImage src={"/images/logo-sm-instagram.svg"} />
                </div>
                <div className="footer__ab__ctn__contact__body__sm__icon">
                  <AppImage src={"/images/logo-sm-twitter.svg"} />
                </div>
              </div>
            </div>
          </div>
          <div className="footer__ab__ctn__group-logo">
            <AppImage src={"/images/logo-group.svg"} />
          </div>
        </div>
      </div>
      
      {/* footer below */}
      <div className="footer__bl">
        <div className="footer__bl__ctn ctn">
          <div className="footer__bl__ctn__item">
            <p>{t("footer.copyright.a")}</p>
          </div>
          <div className="footer__bl__ctn__item">
            <p>{t("footer.copyright.b")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer