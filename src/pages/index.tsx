import * as React from "react"
import PageWrapper from "../components/PageWrapper";
import Hero from "../components/sections/home/Hero";
import License from "../components/sections/home/License";


// markup
const IndexPage = () => {
  return (
    <PageWrapper footerDark>
        <Hero />
        <License />
        {/* <Clients />
        <Feature />
        <Content1 />
        <Content2 />
        <Testimonial />
        <CTA /> */}
    </PageWrapper>
  )
}

export default IndexPage
