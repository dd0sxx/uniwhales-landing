import React from 'react'
import styled from 'styled-components'
import * as palette from '../../../palette.js';
import Container from '../../Container/Container.js';
import { H2, H3 } from '../../Typography/Typography.js';
import Button from '../../Button/Button'

const TokenWrapper = styled.div`
  background: ${palette.dark_blue};
  width: 100%;
  padding: 100px 0;
`;


const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;


const TokenInfo = () => {
    return (
        <TokenWrapper>
            <Container>
                <H2 inverse>Token Info</H2>
                <H3 inverse>Supply 10,000,000 / 15,000,000</H3>
                <InnerWrapper>
                    
                </InnerWrapper>
            </Container>
        </TokenWrapper>
	)
}

export default TokenInfo