import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Xiaoming Fu" />
    <h1>Xiaoming Fu</h1>
    <p>Nice to meet you</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/projects/">Go to Projects Page</Link>
  </Layout>
)

export default IndexPage
