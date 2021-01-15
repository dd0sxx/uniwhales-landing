import React from 'react'
import styled from 'styled-components'
import * as palette from '../../palette.js';

export const ButtonWrapper = styled.a`
  color: ${palette.off_white};
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 10px 30px;
  border: 2px solid ${palette.light_blue};
  border-radius: 100px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  display: inline-block;
  :hover {
      text-decoration: none;
      color: ${palette.white};
      background: ${palette.light_blue};
      padding: 10px 35px;
  }
`;

export const ButtonWrapperInverse = styled.a`
  color: ${palette.white};
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 10px 40px;
  border: 2px solid ${palette.light_blue};
  border-radius: 100px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  display: inline-block;
  background: ${palette.light_blue};
  margin-top: ${props => props.margintop ? '10px' : ''};
  :hover {
      text-decoration: none;
      color: ${palette.white};
      padding: 10px 50px;
  }
`;

export const ButtonWrapperComingSoon = styled.div`
  color: ${palette.white};
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 10px 30px;
  border: 2px solid ${palette.gray};
  border-radius: 100px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  display: inline-block;
  background: ${palette.gray};
  :hover {
      text-decoration: none;  
  }
`;

const Button = ({ text, href, inverse, disable, margintop }) => {
    return (
        <>
        {!inverse && !disable && (
            <ButtonWrapper href={href}>
                {text}
            </ButtonWrapper>
        )} 
        {inverse && (
            <ButtonWrapperInverse href={href} margintop={margintop}>
                {text}
            </ButtonWrapperInverse>
        )}
        {disable && (
            <ButtonWrapperComingSoon>
                {text}
            </ButtonWrapperComingSoon>
        )}
        </>
	)
}

export default Button