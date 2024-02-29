import * as React from "react"
import Banner from "../components/Index/Banner"
// import OurBlog from "../components/Index/OurBlog"
import OurFeatures from "../components/Index/OurFeatures"
import OurServices from "../components/Index/OurServices"
import OurSolutions from "../components/Index/OurSolutions"
import Partner from "../components/Index/Partner"
// import Pricing from "../components/Index/Pricing"
import ProjectStartArea from "../components/Index/ProjectStartArea"
// import RecentProjects from "../components/Index/RecentProjects"
import TeamMember from "../components/Index/TeamMember"
// import Testimonials from "../components/Index/Testimonials"
import Footer from "../components/_App/Footer"
import Navbar from "../components/_App/Navbar"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"


const IndexPage = () => (
  <Layout>

    <Navbar />

    <Banner />

    <OurSolutions />

    <OurServices />

    <OurFeatures />

    <TeamMember />

    {/* <RecentProjects /> */}

    {/* <Pricing /> */}

    {/* <Testimonials /> */}

    <Partner />

    {/* <OurBlog /> */}

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
