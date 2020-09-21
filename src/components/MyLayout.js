import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MediaLink from "../components/MediaLink"
import Navbar from "../components/Navbar"

const MyLayout = ({ children }) => (
  <Layout>
    {/* <Navbar /> */}
    <SEO title="Xiaoming Fu" />

    <div class="wrapper">
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <ivg></ivg>
            <Link to="/">about</Link>
          </li>
          <li class="nav__item">
            <ivg></ivg>
            <Link to="/projects">Projects</Link>
          </li>
          <li class="nav__item">
            <ivg></ivg>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>

      <div className="content">{children}</div>
    </div>
    {/* 
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <MediaLink /> */}
    {/* <div>
        <Link to="/projects/">Go to Projects Page</Link>
      </div> */}
  </Layout>
)

export default MyLayout
