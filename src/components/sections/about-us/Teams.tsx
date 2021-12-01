import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../../components/Core";
import imgContentMobile from "../../../assets/image/png/content-img1--mobile.webp";

const Teams = () => (
  <>
    <Section className="position-relative">
      <Container>
        <Row className="align-items-center">
          <Col md="12" lg="4" className="order-lg-2">
            <div className="position-relative pl-lg-5">
              <div
                className="pl-lg-4 text-center"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={imgContentMobile} alt="" className="img-fluid" />
              </div>
            </div>
          </Col>
          <Col lg="8" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-down"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Box>
                <Title>Kurnia Bijaksana</Title>
                <Text mb={4}>
                    Experience in mentoring traders around Indonesia and overseas with 4 years experience in Crypto Market. Kurnia previously had experiences in marketing and consulting firm.
                </Text>
              </Box>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md="12" lg="4">
            <div className="position-relative pl-lg-5">
              <div
                className="pl-lg-4 text-center"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={imgContentMobile} alt="" className="img-fluid" />
              </div>
            </div>
          </Col>
          <Col lg="8" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-down"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Box>
                <Title>Arya Samudra</Title>
                <Text mb={4}>
                7 years experience as full-time trader and private investor in various financial markets, Arya specializes macro economics as well navigating the commodity markets
                </Text>
              </Box>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Teams;
