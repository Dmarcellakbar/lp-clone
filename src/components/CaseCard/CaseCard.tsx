import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Title, Box, Text } from "../Core";

const Card = styled(Box)`
  border-radius: 10px 10px;
  overflow: hidden;
`;

const ImageContainer = styled(Box)`
  max-width: 210px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const BrandImage = styled(Box)`
  overflow: hidden;
  img {
    border-radius: 8px;
    border: 1px solid #eae9f2;
  }
`;

const CardText = styled(Box)`
  padding-left: 30px;
`;

const TitleStyled = styled(Title)`
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

interface CaseCardProps { 
  img?: any
  imgBrand?: any
  preTitle?: any
  title?: any
  children?: any
  readMore?: any
}
const CaseCard: React.FC<CaseCardProps> = ({
  img,
  imgBrand,
  preTitle,
  title,
  children,
  readMore,
  ...rest
}) => (
  <Card className="d-flex" {...rest}>
    <ImageContainer>
      <Link to="/">
        <img src={img} alt="" className="w-100 img-fluid" />
      </Link>
    </ImageContainer>
    <CardText>
      {/* <BrandImage mb="16px">
        <img src={imgBrand} alt="" className="img-fluid" />
      </BrandImage> */}

      <Link to="/">
        <TitleStyled variant="card" mb="12px">
          {title}
        </TitleStyled>
      </Link>
      <Text fontSize={2} lineHeight={'1.75'} mb={0}>
        {children}
      </Text>
    </CardText>
  </Card>
);

export default CaseCard;