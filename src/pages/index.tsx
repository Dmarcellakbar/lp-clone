import * as React from "react"
import PageWrapper from "../components/PageWrapper";
import Hero from "../components/sections/home/Hero";


// markup
const IndexPage = () => {
  return (
    <PageWrapper footerDark>
        <Hero />
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
