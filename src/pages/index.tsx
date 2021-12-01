import * as React from "react"
import { ContactUs } from "../components/sections/common";
import PageWrapper from "../components/PageWrapper";
import Hero from "../components/sections/home/Hero";
import License from "../components/sections/home/License";


// markup
const IndexPage = () => {
  return (
    <PageWrapper footerDark={false}>
        <Hero />
        <License />
        <ContactUs/>
    </PageWrapper>
  )
}

export default IndexPage
