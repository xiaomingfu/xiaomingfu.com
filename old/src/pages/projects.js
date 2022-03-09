import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MyLayout from "../components/MyLayout"

import SEO from "../components/seo"

const SecondPage = () => (
  <MyLayout>
    <SEO title="Projects" />
    <p>
      The list of projects is growing. Pls refer to my resume or github to get
      the latest list.
    </p>
  </MyLayout>
)

export default SecondPage
