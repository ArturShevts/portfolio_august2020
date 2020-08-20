import React from "react"
 
import Field from "../components/field"
import Layout from "../components/layout"
 
import SEO from "../components/seo"






const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Field/> 
     
  </Layout>
)

export default IndexPage
