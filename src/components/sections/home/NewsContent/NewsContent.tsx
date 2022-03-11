import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Section, Button, Text } from "../../../../components/Core";
import PostCard from "../../../../components/PostCard";

// import imgB1 from "../../../../assets/image/jpeg/blog-post--img.jpg";
// import imgB2 from "../../../../assets/image/jpeg/blog-post--img-2.jpg";
// import imgB3 from "../../../../assets/image/jpeg/blog-post--img-3.jpg";

interface NewsContent {
  title: string;
  subtitle: string;
  link: string
  date?: string
  img?: string
}

interface NewsContentProps {
  data: NewsContent[]
}

const ViewMoreButton = styled(Button)`
  background: linear-gradient(90deg, #FD8803 0%, #F0B61A 100%);
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0px 12px 24px rgba(240, 182, 26, 0.5);
  border-radius: 12px
`
const NewsContent: React.FC<NewsContentProps> = (props: NewsContentProps) => {
  return (
    <>
      {/* <!-- Blog section --> */}
      <Section className="position-relative" bg={'#FFFFFF'} id="news">
        <Container>
          <Row className="justify-content-center text-center mb-10">
            <Col lg="12">
              <Text fontSize={36} lineHeight={'57.6px'} fontWeight={700}>
                News
              </Text>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center" style={{paddingTop: 40}}>
            {
              props.data.map((item, index) => {
                return (
                  <Col lg="4" className="mb-5" key={index}>
                    <PostCard
                      img={item.img}
                      preTitle={item.date}
                      title={item.title}
                      link={item.link}
                      readMore
                    >
                      {item.subtitle}
                    </PostCard>
                  </Col>
                )
              })
            }
          </Row>
          {/* <Box className="d-flex justify-content-center" mt={4}>
            <Pagination>
              <PageItem>
                <FaAngleLeft />
              </PageItem>
              <PageItem>1</PageItem>
              <PageItem>2</PageItem>
              <PageItem>3</PageItem>
              <PageItem>...</PageItem>
              <PageItem>9</PageItem>
              <PageItem>
                <FaAngleRight />
              </PageItem>
            </Pagination>
          </Box> */}
          <Row>
            <Col className="d-flex justify-content-center" lg={12}>
              <a 
                  href='https://blog.cfund.me'
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <ViewMoreButton 
                      width="100%"
                      type="button"
                      borderRadius={10}
                      mt={10}
                      fontSize={16}
                  >
                    View More
                  </ViewMoreButton>
              </a>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
};

export default NewsContent;
