import React from "react"
import { useRecoilState } from "recoil"
import { collapsedState, languageState } from "../../utils/recoil-atoms"
import { Link } from "gatsby"
import logo from "../../images/logo-icon.svg"
import { useTranslation } from "../../utils/useTranslation"

const Navbar = () => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState)
  const [lang, setLang] = useRecoilState(languageState)
  const { t } = useTranslation()

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("navbar")
    const handleScroll = () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => document.removeEventListener("scroll", handleScroll)
  }, [])

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="rewy-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link
                to="/"
                onClick={() => setCollapsed(true)}
                className="navbar-brand"
              >
                <img src={logo} alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      to="/"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      {t("home")} <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("itServices")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/seo-agency"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("seoAgency")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/data-science-ml-company"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("dataScienceMlCompany")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/data-analytics-ai-startup"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("dataAnalyticsAiStartup")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/digital-marketing-agency"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("digitalMarketingAgency")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/data-science-online-courses"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("dataScienceOnlineCourses")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/big-data-analysis-startup"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("bigDataAnalysisStartup")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/data-analytics-ml-consulting"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("dataAnalyticsMlConsulting")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/machine-learning-ai-solutions"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("machineLearningAiSolutions")}
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      {t("aboutUs")} <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/about-us"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("aboutUs")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/history"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("history")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/testimonials"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("testimonials")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/team"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("team")}
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      {t("services")} <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/services"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("services")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/services/service-details"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("serviceDetails")}
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      {t("caseStudies")} <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/case-studies"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("caseStudies")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/case-studies/case-studies-details"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("caseStudiesDetails")}
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      {t("pages")} <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="#"
                          onClick={e => e.preventDefault()}
                          className="nav-link"
                        >
                          {t("courses")} <i className="bx bx-chevron-down"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              to="/courses"
                              activeClassName="active"
                              onClick={() => setCollapsed(true)}
                              className="nav-link"
                            >
                              {t("courses")}
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/courses/course-details"
                              activeClassName="active"
                              onClick={() => setCollapsed(true)}
                              className="nav-link"
                            >
                              {t("courseDetails")}
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="#"
                          onClick={e => e.preventDefault()}
                          className="nav-link"
                        >
                          {t("events")} <i className="bx bx-chevron-down"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              to="/events"
                              activeClassName="active"
                              onClick={() => setCollapsed(true)}
                              className="nav-link"
                            >
                              {t("events")}
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/events/event-details"
                              activeClassName="active"
                              onClick={() => setCollapsed(true)}
                              className="nav-link"
                            >
                              {t("eventDetails")}
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/contact"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("contact")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/gallery"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("gallery")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/faq"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("faq")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/coming-soon"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("comingSoon")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/membership-levels"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("membershipLevels")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/profile-authentication"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("loginRegister")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/privacy-policy"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("privacyPolicy")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/terms-of-service"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("termsOfService")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/404"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("errorPage")}
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      {t("blog")} <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/blog"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("blog")}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/blog/blog-details"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          {t("blogDetails")}
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>

                <div className="others-option d-flex align-items-center">
                  <div className="option-item">
                    <div
                      className="language-switcher-toggle"
                      style={{
                        display: "flex",
                        background: "#f3f4f6",
                        borderRadius: "30px",
                        padding: "3px",
                        marginRight: "15px",
                        userSelect: "none",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setLang("fr")}
                        style={{
                          border: "none",
                          background: lang === "fr" ? "#ffffff" : "transparent",
                          color: lang === "fr" ? "#147dc8" : "#6b7280",
                          padding: "6px 14px",
                          borderRadius: "20px",
                          fontSize: "13px",
                          fontWeight: "700",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          boxShadow:
                            lang === "fr"
                              ? "0 1px 3px rgba(0,0,0,0.1)"
                              : "none",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <span>🇫🇷</span> FR
                      </button>
                      <button
                        type="button"
                        onClick={() => setLang("en")}
                        style={{
                          border: "none",
                          background: lang === "en" ? "#ffffff" : "transparent",
                          color: lang === "en" ? "#147dc8" : "#6b7280",
                          padding: "6px 14px",
                          borderRadius: "20px",
                          fontSize: "13px",
                          fontWeight: "700",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          boxShadow:
                            lang === "en"
                              ? "0 1px 3px rgba(0,0,0,0.1)"
                              : "none",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <span>🇬🇧</span> EN
                      </button>
                    </div>
                  </div>

                  {/* <div className="option-item">
                    <form className="search-box">
                      <input
                        type="text"
                        className="input-search"
                        placeholder={t("searchPlaceholder")}
                      />
                      <button type="submit">
                        <i className="flaticon-loupe"></i>
                      </button>
                    </form>
                  </div> */}

                  <div className="option-item">
                    <Link
                      to="/contact"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="default-btn"
                    >
                      <i className="flaticon-right"></i> {t("getStarted")}{" "}
                      <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
