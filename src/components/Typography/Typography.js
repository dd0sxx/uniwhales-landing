import styled from 'styled-components'
import * as palette from '../../palette.js';

export const H1 = styled.h1`
  color: ${props => props.inverse ? palette.off_white : palette.dark_blue};
  font-family: 'League Spartan', sans-serif;
  font-size: 60px;
  margin: 0 0 30px 0;
  padding: 0;
`;

export const H2 = styled.h2`
  color: ${props => props.inverse ? palette.off_white : palette.dark_blue};
  font-family: 'League Spartan', sans-serif;
  font-size: 40px;
  margin: 0;
  padding: 0;
  margin-bottom: ${props => props.nomarginBottom ? "0" : "70px"};
  text-align: center;
`;

export const H3 = styled.h3`
  color: ${props => props.inverse ? palette.off_white : palette.dark_blue};
  font-family: 'League Spartan', sans-serif;
  font-size: 26px;
  margin: 0 0 5px 0;
  padding: 0;
`;

export const Paragraph = styled.p`
  color: ${props => props.inverse ? palette.gray : palette.dark_blue};
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  margin: 0;
  padding: 0;
  line-height: 1.9em;
  font-weight: normal;
  margin-bottom: ${props => props.marginBottom ? "50px" : "0px"};
`;


export default H1
