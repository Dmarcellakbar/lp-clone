import * as React from "react"
import { ContactUs } from "../components/sections/common";
import PageWrapper from "../components/PageWrapper";
import Hero from "../components/sections/home/Hero";
import License from "../components/sections/home/License";
import NewsContent from "../components/sections/home/NewsContent";
import Description from "../components/sections/home/Description";
// import { Section, Text, Title } from "../components/Core";
// import { Col, Container, Row } from "react-bootstrap";


// markup
const IndexPage = () => {
  return (
    <PageWrapper footerDark={false}>
        <Hero />
        <License />
        <Description/>

        {/* <Section className="position-relative pb-0" bg="light">
          <Container>
            <Row className="justify-content-center">
              <Col md="8" lg="12" xl="12">
                <div className="text-center pb-5">
                  <Title fontSize={{
                    lg: '50px',
                    sm: '35px'
                  }} variant="hero">
                    We are research and consultancy company focusing in digital assets. We provide insight and guide you to enter the crypto-space.
                  </Title>
                  <Text fontSize={20}>
                    Crypto market offers high return that most of the time, outperform other asset classes. However, its volatility is a major concern as many investors can easily lose money. To enter the crypto market, proper risk management is required.
                  </Text>
                  <Text fontSize={20}>
                    We are here to help you with the consulting service on how to start investing in this hyper-lucrative space. From analysis, education, we got you covered.
                  </Text>
                </div>
              </Col>
            </Row>
            </Container>
        </Section> */}
        <ContactUs/>
        <NewsContent/>
    </PageWrapper>
  )
}

export default IndexPage
