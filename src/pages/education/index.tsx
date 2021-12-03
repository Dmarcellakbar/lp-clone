import * as React from "react"
import Hero from "../../components/sections/common/Hero";
import PageWrapper from "../../components/PageWrapper";
import ContactUs2 from "../../components/sections/common/ContactUs2";
import { Button } from "../../components/Core";
import EducationVideo from "../../components/sections/education/EducationVideo";
import EducationContent from "../../components/sections/education/EducationContent";
import {Section, Text} from "../../components/core";
import { Col, Container, Row } from "react-bootstrap";


// markup
const Education = () => {
  return (
    <PageWrapper footerDark={false}>
        <Hero title="TAMING THE CRYPTO MARKET">
            Helping you navigate the digital market. <br/>
            One stop solution for Digital Asset
        </Hero>
        {/* <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="12">
                <Text fontSize={36}>
                 Contact Us to schedule a consultancy session on how you want to start investing in crypto market. 
                </Text>
              </Col>
            </Row>
          </Container>
        </Section> */}
        <EducationVideo/>
        <EducationContent/>
        <ContactUs2
            title="Or you can learn the basics of crypto trading with us, Contact us, or go to our Official Trading Education Class."
            backgroundColor={''}
        >
            <a 
                href='https://www.youtube.com/channel/UCFaaku7yckpmo2kvK9Zf9xQ'
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button 
                    width="100%"
                    type="button"
                    bg={'secondary'}
                    borderRadius={10} mt={10}
                >
                    Crypto Trading Mastery
                </Button>
            </a>

        </ContactUs2>
        
        {/* <ContactUs 
            title={'Or you can learn the basics of crypto trading with us, Contact us, or go to our Official Trading Education Class.'}
            titleSize={{
                sm: '20px',
                lg: '45px',
            }}
            backgroundColor={''}
        /> */}
    </PageWrapper>
  )
}

export default Education
