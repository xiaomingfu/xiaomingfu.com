import React from "react"
import { Link } from "gatsby"

import MyLayout from "../components/MyLayout"
import Image from "../components/image"
import SEO from "../components/seo"
import MediaLink from "../components/MediaLink"
import Navbar from "../components/Navbar"

const IndexPage = () => (
  <MyLayout>
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
        <a
          href="https://github.com/xiaomingfu/resume/blob/master/XiaomingFu_Resume2021.08v6.pdf"
          class="link"
          target="_blank"
        >
          <span>resume</span>
        </a>
        .
      </footer>
    </div>
  </MyLayout>
)

export default IndexPage
