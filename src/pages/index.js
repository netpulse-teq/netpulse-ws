import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
// import ComingSoonPage from "./coming-soon"
import OurSolutions from "../components/Index/OurSolutions"
import OurServices from "../components/Index/OurServices"
import OurFeatures from "../components/Index/OurFeatures"
import TeamMember from "../components/Index/TeamMember"
import RecentProjects from "../components/Index/RecentProjects"
import Pricing from "../components/Index/Pricing"
import Testimonials from "../components/Index/Testimonials"
import Partner from "../components/Index/Partner"
import OurBlog from "../components/Index/OurBlog"
import ProjectStartArea from "../components/Index/ProjectStartArea"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import Banner from "../components/Index/Banner"

const IndexPage = () => (
  <Layout>
    {/* <ComingSoonPage /> */}

    <Navbar />

    <Banner />

    <OurSolutions />

    <OurServices />

    {/* <OurFeatures /> */}

    <TeamMember />

    <RecentProjects />

    {/* <Pricing /> */}

    <Testimonials />

    <Partner />

    <OurBlog />

    <ProjectStartArea />

    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
