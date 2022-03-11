import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../../../components/Core";

import imgDescription from '../../../../assets/image/cfund/new-assets/v2/home-description.png';
const SectionStyled = styled(Section)`
  background-color: #FFFFFF!important;
`;

const WidgetContainer = styled(Box)`
  counter-reset: widget-counter;
`;

const WidgetStyled = styled(Box)`
  padding-left: 70px;
  position: relative;
  max-width: 411px;
  &:before {
    counter-increment: widget-counter;
    content: counter(widget-counter);
    position: absolute;
    left: 0;
    min-width: 49px;
    width: 49px;
    height: 49px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 500px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.light};
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.75px;
  }
`;

const Widget = ({ num = 1, title = "", children = "", ...rest }) => {
  return (
    <WidgetStyled {...rest}>
      <Title variant="card" mb={2}>
        {title}
      </Title>
      <Text variant="small">{children}</Text>
    </WidgetStyled>
  );
};

const Description = () => {
  return (
    <>
      {/* <!-- Content1 section --> */}
      <SectionStyled id="description">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="mb-4 mb-lg-0 pl-lg-5">
              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              >
                {/* <img src={imgPhone} alt="" className="img-fluid" /> */}
                <img src={imgDescription} alt="" className="img-fluid" width={400}/>
              </div>
            </Col>
            {/* <Col lg="2" className="order-lg-1"></Col> */}
            <Col lg="6" md={9} className="order-lg-1">
              <div>
                <Title 
                    // fontSize={{
                    //     sm: '66px',
                    //     lg: '76px',
                    //     xl: '80px'
                    // }}
                    fontSize={{
                        sm: '36px',
                        lg: '36px',
                        xl: '36px'
                    }}
                    lineHeight={'160%'}
                >
                  We are research and consultancy company focusing in digital assets. We provide insight and guide you to enter the crypto-space.
                  {/* We are research and consultancy company focusing in digital assets. {" "} */}
                  {/* <br className="d-none d-sm-block d-md-none d-xl-block" /> */}
                  {/* We provide insight and guide you to enter the crypto-space. */}
                </Title>
                <Text fontSize={16} fontWeight={400} lineHeight={'25.6px'} color={'#4D585D'}>
                    Crypto market offers high return that most of the time, outperform other asset classes. However, its volatility is a major concern as many investors can easily lose money. To enter the crypto market, proper risk management is required.
                </Text>
                <Text fontSize={16} fontWeight={400} lineHeight={'25.6px'} color={'#4D585D'}>
                    We are here to help you with the consulting service on how to start investing in this hyper-lucrative space. From analysis, education, we got you covered.
                </Text>
                {/* <WidgetContainer mt={5}>
                  <Widget title="Find your trip partner" mb={4}>
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page quickly.
                  </Widget>
                  <Widget title="Plan trip with easy steps">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page quickly.
                  </Widget>
                </WidgetContainer> */}
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Description;
