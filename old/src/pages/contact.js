import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MyLayout from "../components/MyLayout"

import SEO from "../components/seo"

const ContactPage = () => (
  <MyLayout>
    <SEO title="Contact" />
    <ul>
      <li>
        <Link to="https://github.com/xiaomingfu" target="_blank">
          Github
        </Link>
      </li>

      <li>
        <Link to="https://www.linkedin.com/in/xiaoming-fu/" target="_blank">
          LinkedIn
        </Link>
      </li>
      <li>Email: xmingfuREMOVEME86+xiaomingfu.com AT gmail.com</li>
    </ul>
  </MyLayout>
)

export default ContactPage
