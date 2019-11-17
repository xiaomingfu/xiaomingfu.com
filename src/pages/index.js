import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MediaLink from "../components/MediaLink"
import Navbar from "../components/Navbar"

const IndexPage = () => (
  <Layout>
    {/* <Navbar /> */}
    <SEO title="Xiaoming Fu" />
    <row>
      <div className="col-1-of-2">
        <div className="img-container">
          <Image />
        </div>
      </div>
      <div className="col-1-of-2">
        <div className="text-container">
          <h1>Nice to meet you</h1>
          <p>
            My name is Xiaoming Fu. I'm a creative, ambitous, and self-taught
            software engineer.
          </p>
          <p>I focus on full stack web development. </p>
          <p>For more details, see my resume.</p>
        </div>
      </div>
    </row>
    {/* 
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <MediaLink /> */}
    {/* <div>
        <Link to="/projects/">Go to Projects Page</Link>
      </div> */}
  </Layout>
)

export default IndexPage
