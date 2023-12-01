import React from "react"
import "./Home.css"
import "./Home.responsive.css"
import {useTranslation} from "react-i18next"
import AppImage from "../../components/app-image/AppImage"
import AppCarousel from "../../components/app-carousel/AppCarousel"
import AppVideo from "../../components/app-video/AppVideo"

function Home() {
  const {t} = useTranslation()

  return (
    <div className="home">
      {/* carousel */}
      <div className="home__carousel">
        <AppCarousel />
      </div>

      {/* know-us */}
      <div className="home__know-us min-vp">
        <div className="home__know-us__main">
          <div className="home__know-us__main__ctn ctn min-hp">
            <div className="home__know-us__main__ctn__header">
              <div className="home__know-us__main__ctn__header__a">
                <p>{t("pages.home.knowUs.header.a")}</p>
              </div>
              <div className="home__know-us__main__ctn__header__b">
                <p>{t("pages.home.knowUs.header.b")}</p>
              </div>
            </div>
            <div className="home__know-us__main__ctn__content">
              <p>{t("pages.home.knowUs.content")}</p>
            </div>
            <div className="home__know-us__main__ctn__button">
              <button>{t("buttons.knowWhoWeAre").toUpperCase()}</button>
            </div>
          </div>
        </div>
        <div className="home__know-us__video">
          <div className="home__know-us__video__ctn ctn">
            <AppVideo videoUrl={"/videos/promo-video-compressed-whtsp.mp4"} />
          </div>
        </div>
      </div>

      {/* our-coffee */}
      <div className="home__our-coffee">
        <div className="home__our-coffee__ctn ctn">
          <div className="home__our-coffee__ctn__bg-image">
            <AppImage src={"/images/banner-home-our-coffee.jpg"} />
          </div>
          {/* Horizontal padding is putted on .(...)__ctn__content since it has position: absolute. */}
          <div className="home__our-coffee__ctn__body__content min-hp">
            <div className="home__our-coffee__ctn__body__content__header">
              <p>{t("pages.home.ourCoffee.header").toUpperCase()}</p>
            </div>
            <div className="home__our-coffee__ctn__body__content__body">
              <p>{t("pages.home.ourCoffee.content")}</p>
            </div>
            <div className="home__our-coffee__ctn__body__content__button">
              <button>{t("buttons.readMore").toUpperCase()}</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* brands */}
      <div className="home__brands min-vp">
          <div className="home__brands__header">
            <div className="home__brands__header__ctn">
              <p>{t("pages.home.brands.header").toUpperCase()}</p>
            </div>
          </div>
          <div className="home__brands__ab">
            <div className="home__brands__ab__ctn">
              <div className="home__brands__ab__ctn__image">
                <AppImage src="/images/logo-cohiba.svg" />
              </div>
              <div className="home__brands__ab__ctn__image">
                <AppImage src="/images/logo-montecristo.svg" />
              </div>
              <div className="home__brands__ab__ctn__image">
                <AppImage src="/images/logo-guantanamera.svg" />
              </div>
            </div>
          </div>
          <div className="home__brands__bl">
            <div className="home__brands__bl__ctn">
              <div className="home__brands__bl__ctn__image">
                <AppImage src="/images/logo-cafe-serrano.svg" />
              </div>
              <div className="home__brands__bl__ctn__image">
                <AppImage src="/images/logo-cafe-turquino.svg" />
              </div>
              <div className="home__brands__bl__ctn__image">
                <AppImage src="/images/logo-cafe-arriero.svg" />
              </div>
              <div className="home__brands__bl__ctn__image">
                <AppImage src="/images/logo-isla-grande.svg" />
              </div>
              <div className="home__brands__bl__ctn__image">
              <AppImage src="/images/logo-cafe-regil.svg" />
              </div>
              <div className="home__brands__bl__ctn__image">
                <AppImage src="/images/logo-prodigio.svg" />
              </div>
            </div>
          </div>

          {/* seals */}
          <div className="home__brands__seals">
            <div className="home__brands__seals__ctn">
              <div className="home__brands__seals__ctn__stc">
                <div className="seal__bg-image">
                  <AppImage src="/images/item-seal-tueste-cubano.jpg" />
                </div>
                <div className="seal__content">
                  <div className="seal__content__header">
                    <p>{t("seals.tuesteCubano").toUpperCase()}</p>
                  </div>
                  <div className="seal__content__button">
                    <button>{t("buttons.seeMore").toUpperCase()}</button>
                  </div>
                </div>
              </div>
              <div className="home__brands__seals__ctn__scc">
                <div className="seal__bg-image">
                  <AppImage src="/images/item-seal-cafe-cubano.jpg" />
                </div>
                <div className="seal__content">
                  <div className="seal__content__header">
                    <p>{t("seals.cafeCubano").toUpperCase()}</p>
                  </div>
                  <div className="seal__content__button">
                    <button>{t("buttons.seeMore").toUpperCase()}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
