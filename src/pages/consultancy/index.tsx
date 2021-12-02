import * as React from "react"
import Hero from "../../components/sections/common/Hero";
import PageWrapper from "../../components/PageWrapper";
import { ContactUs } from "../../components/sections/common";


// markup
const News = () => {
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
        
        <ContactUs 
            title={'Contact Us to schedule a consultancy session on how you want to start investing in crypto market. '}
            titleSize={{
                sm: '20px',
                lg: '50px'
            }}
            backgroundColor={''}
        />
    </PageWrapper>
  )
}

export default News
