import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import { useTranslation } from "../../utils/useTranslation"

const OurSolutions = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className="solutions-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="star" />
              {t("solutionsSubTitle")}
            </span>
            <h2>{t("solutionsTitle")}</h2>
            <p>{t("solutionsDesc")}</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-rocket"></i>
                </div>
                <h3>
                  <Link to="/services/service-details">
                    {t("codeSecurityTitle")}
                  </Link>
                </h3>
                <p>{t("codeSecurityDesc")}</p>

                <Link
                  to="/services/service-details"
                  className="view-details-btn"
                >
                  {t("viewDetails")}
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>

                <h3>
                  <Link to="/services/service-details">
                    {t("teamManagementTitle")}
                  </Link>
                </h3>

                <p>{t("teamManagementDesc")}</p>

                <Link
                  to="/services/service-details"
                  className="view-details-btn"
                >
                  {t("viewDetails")}
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-money"></i>
                </div>

                <h3>
                  <Link to="/services/service-details">
                    {t("accessControlledTitle")}
                  </Link>
                </h3>

                <p>{t("accessControlledDesc")}</p>

                <Link
                  to="/services/service-details"
                  className="view-details-btn"
                >
                  {t("viewDetails")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurSolutions
