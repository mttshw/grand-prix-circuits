import React from 'react';
import styled from 'styled-components';

const BannerHolder = styled.div`
  background: #053680;
  background:
  linear-gradient(115deg, transparent 75%, rgba(255,255,255,.1) 75%) 0 0,
  linear-gradient(245deg, transparent 75%, rgba(255,255,255,.1) 75%) 0 0,
  linear-gradient(115deg, transparent 75%, rgba(255,255,255,.1) 75%) 7px -15px,
  linear-gradient(245deg, transparent 75%, rgba(255,255,255,.1) 75%) 7px -15px,
  #053680;
  background-size: 15px 30px
  border-top: 1px solid #617798;
`;
const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
`;
const Heading = styled.h1`
  padding: 3em 0;
  margin: 0;
  color: white;
  font-weight: 200;
  font-size: 3.6em;
  width: 66%;
`

const Banner = () =>
  <BannerHolder>
    <Container>
      <Heading>A collection of every grand prix circuit used since the creation of the Formula One world championship.</Heading>
    </Container>
  </BannerHolder>

export default Banner;
