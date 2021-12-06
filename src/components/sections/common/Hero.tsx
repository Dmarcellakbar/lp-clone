import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Text } from "../../../components/Core";

const SectionStyled = styled(Section)`
  background-image: linear-gradient(
    147deg,
    rgba(240, 181, 28, 0.17) 0%,
    rgba(240, 181, 28, 0) 100%
  );
`;

interface HeroProps {
    title: string
}
const Hero: React.FC<HeroProps>= ({ title, children, ...rest }) => {
  return (
    <>
      <SectionStyled
        pt={["120px!important", null, "190px!important"]}
        pb={["50px!important", null, "180px!important"]}
        {...rest}
      >
        <Container>
          <Row>
            <Col lg="6">
              <div>
                <Title variant="hero">{title}</Title>
                <Text>{children}</Text>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};
export default Hero;
