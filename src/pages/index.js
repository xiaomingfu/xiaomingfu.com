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

    <div class="header">
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <ivg></ivg>
            about
          </li>
          <li class="nav__item">
            <ivg></ivg>
            projects
          </li>
          <li class="nav__item">
            <ivg></ivg>
            contact
          </li>
        </ul>
      </nav>
      <div className="img-container">
        <Image />
      </div>

      <div className="text-container">
        <h1 class="heading--1">Nice to meet you</h1>
        <div class="text__detail">
          My name is <span class="text__name">Xiaoming Fu</span>. I'm a creative
          and ambitous self-taught software engineer.
        </div>
        <div class="text__detail">I focus on full stack web development. </div>
        <footer class="footer">
          For more details, see my{" "}
          <a href="#" class="link">
            <span>resume</span>
          </a>
          .
        </footer>
      </div>
    </div>
    {/* 
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <MediaLink /> */}
    {/* <div>
        <Link to="/projects/">Go to Projects Page</Link>
      </div> */}
  </Layout>
)

export default IndexPage
