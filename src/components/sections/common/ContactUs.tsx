import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../../../components/Core";

const FormStyled = styled.form``;

interface ContactUsProps {
  backgroundColor?: string;
  title?: string
  titleSize?: {
    sm?: string
    lg?: string
  }
}
const ContactUs: React.FC<ContactUsProps> = (
  {
    backgroundColor = 'rgba(240,181,28, 0.2)', title = 'Contact us,', titleSize = {
    sm: '20px',
    lg: '46px',
  }
}) => {
  return (
    <>
      <Section bg={backgroundColor}>
        <Container>
          <Row className="align-items-center">
            <Col lg="12">
              <Box mb={5}>
                <Title 
                  fontSize={titleSize}
                >
                  {title}
                </Title>
              </Box>
            </Col>
            <Col lg="6">
              <FormStyled
                name="contact1"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* You still need to add the hidden input with the form name to your JSX form */}
                <input type="hidden" name="form-name" value="contact1" />
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

                <Box mb={3}>
                  <Input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </Box>

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

                <Button width="100%" type="submit" borderRadius={10}>
                  Send Message
                </Button>
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
          </Row>
        </Container>
      </Section>
    </>
  );
};
export default ContactUs;
