import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import project1 from "../../images/projects/project1.jpg"
import project2 from "../../images/projects/project2.jpg"
import project3 from "../../images/projects/project3.jpg"
import project4 from "../../images/projects/project4.jpg"
import project5 from "../../images/projects/project5.jpg"
import project6 from "../../images/projects/project6.jpg"
import { useTranslation } from "../../utils/useTranslation"

const RecentProjects = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className="projects-area bg-color pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="project" /> {t("recentProjectsSubTitle")}
            </span>
            <h2>{t("recentProjectsTitle")}</h2>
            <p>{t("recentProjectsDesc")}</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project1} alt="project" />

                  <Link
                    className="link-btn"
                    to="/case-studies/case-studies-details"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">
                      {t("project1Title")}
                    </Link>
                  </h3>
                  <span>{t("project1Category")}</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project2} alt="project" />

                  <Link
                    className="link-btn"
                    to="/case-studies/case-studies-details"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">
                      {t("project2Title")}
                    </Link>
                  </h3>
                  <span>{t("project2Category")}</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project3} alt="project" />

                  <Link
                    className="link-btn"
                    to="/case-studies/case-studies-details"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">
                      {t("project3Title")}
                    </Link>
                  </h3>
                  <span>{t("project3Category")}</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project4} alt="project" />

                  <Link
                    className="link-btn"
                    to="/case-studies/case-studies-details"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">
                      {t("project4Title")}
                    </Link>
                  </h3>
                  <span>{t("project4Category")}</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box ">
                <div className="image">
                  <img src={project5} alt="project" />

                  <Link
                    className="link-btn"
                    to="/case-studies/case-studies-details"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">
                      {t("project5Title")}
                    </Link>
                  </h3>
                  <span>{t("project5Category")}</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project6} alt="project" />

                  <Link
                    className="link-btn"
                    to="/case-studies/case-studies-details"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">
                      {t("project6Title")}
                    </Link>
                  </h3>
                  <span>{t("project6Category")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RecentProjects
