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
                <Paragraph>Join our email list for latest developments in the UniWhales ecosystem</Paragraph>
                <Button inverse text="Join" href="https://docs.google.com/forms/d/e/1FAIpQLSfm2lwbKO4C58CG4KReY-GOLLuDM4S8oobXr1VLAGTNkYhB5g/viewform?usp=sf_link" />
            </Container>
        </Wrapper>
	)
}

export default Hero