import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../../../components/Core";

const FormStyled = styled.form``;

interface ContactUsProps {
  // backgroundColor?: string;
  title?: string
  titleSize?: {
    sm?: string
    lg?: string
  }
  mt?: number
}

const RowWrapper = styled(Row)`
  background: linear-gradient(74.86deg, #FD8803 -17.77%, #F0B61A 65.82%);
  border-radius: 24px;
  margin-top: 40px;
  padding-left: 40px;
  padding-bottom: 40px;

  @media screen and (max-width: 1024px) {
    padding-left: 0;
  }
`

const ButtonSendMessage = styled(Button)`
  box-shadow: 0px 12px 24px rgba(255, 255, 255, 0.5);
`
const ContactUs: React.FC<ContactUsProps> = (
  {
    // backgroundColor = 'rgba(240,181,28, 0.2)', 
    title = 'Contact Us to schedule a consultancy session on how you want to start investing in crypto market.',
    // titleSize = {
    //   sm: '20px',
    //   lg: '46px',
    // }
    mt = 40
}) => {
  return (
    <>
      <Section mt={`${mt}px`} id="contact-us">
        <Container>
          <Row className="justify-content-center text-center mb-10">
            <Col lg="12">
              <Text 
                fontSize={36}
                lineHeight={'57.6px'}
                fontWeight={700}
              >
                {title}
              </Text>
            </Col>
          </Row>
          <RowWrapper
            className="align-items-center"
          >
            <Col lg="6">
              <FormStyled
                name="contact1"
                method="post"
                action={process.env.GATSBY_FORM_ACTION}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <Box className="mt-5 mb-3">
                  <Title variant="card" fontSize={24}>
                    Contact Us
                  </Title>
                </Box>
                {/* You still need to add the hidden input with the form name to your JSX form */}
                {/* <input type="hidden" name="form-name" value="contact1" formAction="https://formspree.io/f/mqkgoqjg" formMethod={'post'} /> */}
                <Box mb={3}>
                  <Input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    required
                  />
                </Box>
                <Box mb={3}>
                  <Input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    required
                  />
                </Box>

                {/* <Box mb={3}>
                  <Input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </Box> */}

                <Box mb={3}>
                  <Input
                    type="text"
                    as="textarea"
                    placeholder="Write your message"
                    rows={4}
                    name="message"
                    required
                  />
                </Box>

                <ButtonSendMessage
                  width="100%"
                  type="submit"
                  borderRadius={10}
                  bg="light"
                  color="primary"
                >
                  Send Message
                </ButtonSendMessage>
              </FormStyled>
            </Col>
            <Col
              lg={5}
              className="offset-lg-1 order-lg-2 mt-5 mt-lg-0 pt-lg-5"
            >
              <Box className="mb-5">
                <Title variant="card" fontSize={24}>
                  Whatsapp
                </Title>
                <a href={'https://wa.me/62811874583'} target="_blank" rel="noopener noreferrer">
                  <Text>+62-811-874-583</Text>
                </a>
              </Box>
              <Box className="mb-5">
                <Title variant="card" fontSize={24}>
                  Email
                </Title>
                <a href={'mailto:cs@cfund.id'} target="_blank" rel="noopener noreferrer">
                  <Text>cs@cfund.id</Text>
                </a>
              </Box>
              <Box className="mb-5">
                <Title variant="card" fontSize="24px">
                  Office Address
                </Title>
                <Text>Jl. Bangka Raya No.42A, Jakarta Selatan,</Text>
                <Text>DKI Jakarta 12720.</Text>
              </Box>
            </Col>
          </RowWrapper>
        </Container>
      </Section>
    </>
  );
};
export default ContactUs;
