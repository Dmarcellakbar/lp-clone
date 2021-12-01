import * as React from "react"
import Hero from "../../components/sections/common/Hero";
import PageWrapper from "../../components/PageWrapper";


// markup
const AboutUsPage = () => {
  return (
    <PageWrapper footerDark={false}>
        <Hero title="TAMING THE CRYPTO MARKET">
            Helping you navigate the digital market. <br/>
            One stop solution for Digital Asset
        </Hero>
    </PageWrapper>
  )
}

export default AboutUsPage
