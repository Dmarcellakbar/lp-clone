import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Title, Box, Text, Span } from "../Core";
import { device } from "../../utils";

const Card = styled(Box)`
  border-radius: 10px 10px;
  border: 1px solid #eae9f2;
  transition: 0.4s;
  overflow: hidden;

  &:hover {
    box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  }
`;

const ImageContainerHorizontal = styled(Box)`
  overflow: hidden;
  position: relative;
  width: 100%;

  @media ${device.md} {
    width: 100%;
    min-width: 350px;
    max-width: 350px;
  }
  @media ${device.lg} {
    min-width: 265px;
  }
  @media ${device.xl} {
    min-width: 350px;
    max-width: 350px;
  }
`;

const BrandImage = styled(Box)`
  position: absolute;
  bottom: 28px;
  left: 30px;
  border-radius: 8px;
  border: 1px solid #eae9f2;
  overflow: hidden;
`;

const CardText = styled(Box)`
  padding: 30px;
`;

const TitleStyled = styled(Title)`
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

interface PostCardProps {
  horizontal?: boolean
  img?: string
  imgBrand?: string
  preTitle?: string
  title?: string
  children?: any
  readMore?: boolean
  link?: string
}

const PostCard: React.FC<PostCardProps> = ({
  horizontal = false,
  img,
  imgBrand,
  preTitle,
  title,
  children,
  readMore,
  link,
  ...rest
}) => (
  <Card
    className={horizontal ? "d-flex flex-column flex-md-row" : ""}
    {...rest}
  >
    {horizontal ? (
      <ImageContainerHorizontal>
        <a href={link} target={'_blank'} className="w-100 h-100 d-flex">
          <img src={img} alt="" className="w-100 img-fluid" />
          {imgBrand && (
            <BrandImage>
              <img src={imgBrand} alt="" className="img-fluid" />
            </BrandImage>
          )}
        </a>
      </ImageContainerHorizontal>
    ) : (
      <Box className="position-relative">
        <a href={link} target={'_blank'} className="w-100 h-auto d-flex">
          <img src={img} alt="" className="img-fluid" style={{objectFit: 'cover', height: 200}}/>
          {imgBrand && (
            <BrandImage>
              <img src={imgBrand} alt="" className="img-fluid" />
            </BrandImage>
          )}
        </a>
      </Box>
    )}

    <CardText>
      {preTitle && (
        <Text fontSize={2} lineHeight={'1.75'} mb={14}>
          {preTitle}
        </Text>
      )}

      <a href={link} target={'_blank'}>
        <TitleStyled variant="card" mb="14px">
          {title}
        </TitleStyled>
      </a>
      <Text fontSize={2} lineHeight={'1.75'} mb={16}>
        {children}
      </Text>
      {readMore && (
        <Box>
          <a href={link} target={'_blank'}>
            <Span color="primary">Continue Reading</Span>
          </a>
        </Box>
      )}
    </CardText>
  </Card>
);

export default PostCard;
