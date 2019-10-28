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
    <div>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/xiaoming-fu/">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/xiaomingfu">Github</a>
        </li>
        <li>
          <a href="https://twitter.com/xiaoming_fu">Twitter</a>
        </li>
      </ul>
      <Link to="/projects/">Go to Projects Page</Link>
    </div>
  </Layout>
)

export default IndexPage
