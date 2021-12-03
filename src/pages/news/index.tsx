import * as React from "react"
import Hero from "../../components/sections/common/Hero";
import PageWrapper from "../../components/PageWrapper";
import BlogListSidebar from "../../components/sections/news/BlogListSidebar";
import { Section, Title, Text } from "../../components/Core";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../components/sections/news/Sidebar";


// markup
const News = () => {
  return (
    <PageWrapper footerDark={false}>
        <Hero title="TAMING THE CRYPTO MARKET">
          Helping you navigate the digital market. <br/>
          One stop solution for Digital Asset
        </Hero>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Title variant="hero">CFund Blogs</Title>
                {/* <Text>
                  Create custom landing pages with Omega that converts more
                  visitors than any website.
                </Text> */}
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Row>
              <Col lg="8" className="mb-5">
                <BlogListSidebar />
              </Col>
              <Col lg="4" className="">
                <Sidebar />
              </Col>
            </Row>
          </Container>
        </Section>
    </PageWrapper>
  )
}

export default News
