import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import footerMap from "../../images/footer-map.png"
import { useTranslation } from "../../utils/useTranslation"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <footer className="footer-area bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <Link to="/" className="logo">
                <img src={logo} alt="logo" />
              </Link>
              <p>{t("footerDesc")}</p>

              <ul className="social-link">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>{t("footerExplore")}</h3>

              <ul className="footer-links-list">
                <li>
                  <Link to="/">{t("home")}</Link>
                </li>
                <li>
                  <Link to="/about-us">{t("aboutUs")}</Link>
                </li>
                <li>
                  <Link to="/case-studies">{t("caseStudies")}</Link>
                </li>
                <li>
                  <Link to="/blog">{t("blog")}</Link>
                </li>
                <li>
                  <Link to="/contact">{t("contact")}</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget">
              <h3>{t("footerResources")}</h3>

              <ul className="footer-links-list">
                <li>
                  <Link to="/team">{t("footerScientists")}</Link>
                </li>
                <li>
                  <Link to="/services">{t("services")}</Link>
                </li>
                <li>
                  <Link to="/testimonials">{t("testimonials")}</Link>
                </li>
                <li>
                  <Link to="/services">{t("footerSaaS")}</Link>
                </li>
                <li>
                  <Link to="/case-studies">{t("caseStudies")}</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <h3>{t("footerAddress")}</h3>

              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-map"></i>
                  15 AVENUE ANDRE DILIGENT, 59100 ROUBAIX <br /> France
                </li>
                {/* <li>
                  <i className="bx bx-phone-call"></i>
                  <a href="tel:+33761103756">+33 (0)7 61 10 37 56</a>
                </li> */}
                <li>
                  <i className="bx bx-envelope"></i>
                  <a href="mailto:commercial@netpulse.fr">
                    commercial@netpulse.fr
                  </a>
                </li>
                {/* <li>
                  <i className="bx bxs-inbox"></i>
                  <a href="tel:+557854578964">+55 785 4578964</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                Copyright @{currentYear} <strong>Netpulse</strong>{" "}
                {t("footerRights")}
              </p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <Link to="/privacy-policy">{t("privacyPolicy")}</Link>
                </li>
                <li>
                  <Link to="/terms-of-service">{t("footerTerms")}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-map">
        <img src={footerMap} alt="map" />
      </div>
    </footer>
  )
}

export default Footer
