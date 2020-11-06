import React from 'react'
import styled from 'styled-components'
import * as palette from '../../../palette.js';
import Container from '../../Container/Container.js';
import { H2, Paragraph } from '../../Typography/Typography.js';
import Button from '../../Button/Button'

const Wrapper = styled.div`
  background: ${palette.white};
  width: 100%;
  padding: 70px 0;
  text-align: center;

  p {
      margin: 40px 0;
  }
`;


const Hero = () => {
    return (
        <Wrapper>
            <Container>
                <H2 nomarginBottom>Stay in the loop</H2>
                <Paragraph>Subscribe to our newsletter for the latest whale news and info</Paragraph>
                <Button disable text="Coming Soon!" href="#" />
            </Container>
        </Wrapper>
	)
}

export default Hero