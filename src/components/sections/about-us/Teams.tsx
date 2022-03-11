import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../../components/Core";
// import imgContentMobile from "../../../assets/image/png/content-img1--mobile.webp";
import imgKurnia from "../../../assets/image/cfund/new-assets/about-us-kurnia-2.jpg";
import imgArya from "../../../assets/image/cfund/new-assets/about-us-arya-6.jpg";


const ImageCol = styled(Col)`
  padding: 0;
`

const Image = styled.img`
  background-position: center;
  max-height: 415px;
  width: 100%;
  object-fit: cover;
  object-position: 0px 10%;
  border-radius: 20px;
`

interface TeamsProps {
  mt?: any
}
const Teams: React.FC<TeamsProps> = (props) => (
  <>
    <Section className="pb-0" mt={props?.mt} id="about-us">
      {/* <div className="pt-5"></div> */}
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg="12">
            <Text fontSize={36} lineHeight={'57.6px'} fontWeight={700}>
              CFund is handled by people with experience in financial market, especially crypto-space.
            </Text>
          </Col>
        </Row>
      </Container>
    </Section>
    <Section className="position-relative">
      <Container>
        <Row className="align-items-center" style={{backgroundColor: '#FFFFFF', borderRadius: '24px'}}>
          <ImageCol md="12" lg="6" className="order-lg-2">
            <div className="position-relative">
              <div
                className="text-center"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <Image src={imgKurnia} alt="" className="img-fluid"/>
              </div>
            </div>
          </ImageCol>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-down"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Box
                pl={'40px'}
              >
                <Title
                  fontSize={{
                    sm: '36px',
                    md: '36px',
                    lg: '36px',
                  }}
                  lineHeight={'160%'}
                > 
                  Kurnia Bijaksana
                </Title>
                <Text
                  mb={4}
                  fontSize='16px'
                  lineHeight={'160%'}
                  color={'#4D585D'}
                >
                    Experience in mentoring traders around Indonesia and overseas with 4 years experience in Crypto Market. Kurnia previously had experiences in marketing and consulting firm.
                </Text>
              </Box>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center" style={{backgroundColor: '#FFFFFF', borderRadius: '24px', marginTop: 80}}>
          <ImageCol md="12" lg="6" style={{padding: 0}}>
            <div className="position-relative">
              <div
                className="text-center"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <Image src={imgArya} alt="" className="img-fluid"/>
              </div>
            </div>
          </ImageCol>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-down"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Box
                pl={'40px'}
              >
                <Title
                  fontSize={{
                    sm: '36px',
                    md: '36px',
                    lg: '36px',
                  }}
                  lineHeight={'160%'}
                > 
                  Arya Samudra
                </Title>
                <Text
                  mb={4}
                  fontSize='16px'
                  lineHeight={'160%'}
                  color={'#4D585D'}
                >
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
