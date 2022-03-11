import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import { Box, Button, Text } from "../../../../components/Core";
import { device } from "../../../../utils";

import logoKominfo from "../../../../assets/image/cfund/new-assets/home-license-kominfo.png";
import logoKan from "../../../../assets/image/cfund/new-assets/home-license-kan.jpeg";
import { AnchorLink } from "gatsby-plugin-anchor-links";


const TitleContainer = styled(Box)`
  position: relative;
  &:after {
    content: "";
    height: 1px;
    position: absolute;
    right: 0;
    top: 50%;
    width: 32%;
    // background: ${({ theme }) => theme.colors.border};
    margin-top: 0.5px;
    display: none;

    @media ${device.md} {
      width: 40%;
      display: block;
    }
    @media ${device.lg} {
      width: 52%;
    }
    @media ${device.xl} {
      width: 60%;
    }
  }
`;

const Brand = styled(Box)`
  opacity: 0.7;
  transition: all 0.3s ease-out;
  &:hover {
    opacity: 1;
  }
`;

const FindOutMoreButton = styled(Button)`
    background: linear-gradient(90deg, #FD8803 0%, #F0B61A 100%);
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0px 12px 24px rgba(240, 182, 26, 0.5);
    border-radius: 12px;
    font-size: 16px;
`

const License: React.FC = () => {
    const licenses = [
        {
            link: 'https://pse.kominfo.go.id/tdpse-detail/1562',
            src: logoKominfo,
            width: 60,
            mx: 4
        },
        {
            link: 'https://www.cbqaglobal.com/validation/company/pt-cuma-untuk-anak-negeri/',
            src: logoKan,
            width: 120,
            mx: 0
        }
    ]
    return (
        <>
            <Box pb={40}>
                <Container>
                    <TitleContainer mb={"10px"}>
                    <Text fontSize={14} as="h4" className="">
                        Terdaftar dan diawasi oleh:
                    </Text>
                    </TitleContainer>
                </Container>
                <Container>
                    <Box
                    className="d-flex align-items-center flex-wrap"
                    mx="-32px"
                    >
                        {
                            licenses.map((license, index) => {
                                return (
                                    <Brand key={index} className="" mx={license.mx}>
                                        <a href={license.link} target="_blank" rel="noopener noreferrer">
                                            <img src={license.src} alt="" width={license.width} className="img-fluid" />
                                        </a>
                                    </Brand>
                                )
                            })
                        }
                    </Box>
                </Container>
                <Container>
                    <AnchorLink
                        to={`/#description`}
                        // role="button"
                        // aria-expanded="false"
                        stripHash
                    >
                        <FindOutMoreButton
                            mt={60}
                            mb={3}
                        >
                            Find Out More
                        </FindOutMoreButton>
                    </AnchorLink>

                </Container>
            </Box>
        </>
    )
}

export default License;
