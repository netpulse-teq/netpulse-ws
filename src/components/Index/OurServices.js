import React from "react"
import service1 from "../../images/services/service1.png"
import service2 from "../../images/services/service2.png"
import starIcon from "../../images/star-icon.png"
import { useTranslation } from "../../utils/useTranslation"

const OurServices = () => {
  const { t } = useTranslation()

  return (
    <>
      {/* Service Right Image Style */}
      <div className="our-mission-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="our-mission-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="icon" /> {t("services")}
                  </span>

                  <h2>{t("designDevTitle")}</h2>
                  <p>{t("designDevDesc")}</p>

                  <ul className="our-mission-list mb-0">
                    <li>
                      <i className="flaticon-tick"></i>
                      {t("uxUiDesign")}
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      {t("reactDevelopment")}
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      {t("itArchitecture")}
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      {t("appsDevelopment")}
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      {t("wordpress")}
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      {t("buildAgentAI")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="our-mission-image">
                <img src={service2} alt="service" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Right Image Style */}
      {/* Service Left Image Style */}
      <div className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img src={service1} alt="service" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="icon" /> {t("services")}
                  </span>

                  <h2>{t("cloudHostingTitle")}</h2>
                  <p>{t("cloudHostingDesc")}</p>
                  <ul className="about-list mb-0">
                    <li>
                      <i className="flaticon-tick"></i>
                      {t("cloudSaaS")}
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      {t("deployAgentAI")}
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      {t("devops")}
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      {t("websiteHosting")}
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      {t("cloudDatabases")}
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      {t("fileStorage")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Left Image Style */}
    </>
  )
}

export default OurServices
