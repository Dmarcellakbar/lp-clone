import * as React from "react"
// import Hero from "../../components/sections/common/Hero";
import PageWrapper from "../../components/PageWrapper";
import { Teams } from "../../components/sections/about-us";
// import { Section, Text } from "../../components/Core";
// import { Col, Container, Row } from "react-bootstrap";
// import { ContactUs } from "../../components/sections/common";


// markup
const AboutUsPage = () => {
  return (
    <PageWrapper footerDark={false}>
        {/* <Hero title="TAMING THE CRYPTO MARKET">
            Helping you navigate the digital market. <br/>
            One stop solution for Digital Asset
        </Hero> */}
        {/* <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="12">
                <Text fontSize={36}>
                  CFund is handled by people with experience in financial market, especially crypto-space.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section> */}
        <Teams mt={40}/>
        {/* <ContactUs/> */}
    </PageWrapper>
  )
}

export default AboutUsPage
