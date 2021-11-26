import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
      alt="Tracy"
      src="../images/IMG_8083.jpg"
      />
    </Layout>
  )
}

export default IndexPage
