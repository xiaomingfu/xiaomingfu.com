import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MediaLink from "../components/MediaLink"
import Navbar from "../components/Navbar"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <SEO title="Xiaoming Fu" />
    <h1>Xiaoming Fu</h1>
    <p>Nice to meet you</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <MediaLink />
    <div>
      <Link to="/projects/">Go to Projects Page</Link>
    </div>
  </Layout>
)

export default IndexPage
