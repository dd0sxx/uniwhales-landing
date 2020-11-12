import React from 'react'
import styled from 'styled-components'
import SEO from '../Layout/Seo.js'
import * as palette from '../palette.js';
import Header from '../Layout/Header.js'
import Footer from '../Layout/Footer.js'
import Button from '../components/Button/Button'
import Container from '../components/Container/Container.js';
import { H2, Paragraph } from '../components/Typography/Typography.js';
import notFoundImageNight from '../assets/images/404_night.svg'


const Wrapper = styled.div`
  background: ${palette.dark_blue};
  margin-top: 90px;
  width: 100%;
  padding: 100px 0;
  text-align: center;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60vh;

  img {
	  margin-bottom: 40px;
	  width: 100%;
	  max-width: 300px;
  }

  h2 {
	  margin-bottom: 0;
  }

  p {
	  margin: 30px 0;
  }
`;

const PageNotFound = () => {
	
	return (
		<>
            <SEO title="Uniwhales.io"/>
            <Header />
			<Wrapper>
				<Container>
				<InnerWrapper>
					<img src={notFoundImageNight} alt="" />
				
			
					<H2 inverse>Oops! Page not found...</H2>
					<Paragraph inverse>
						The page you&rsquo;re looking for was moved, removed, renamed
						or may never have exsisted!
					</Paragraph>
				
			
					<Button text={'Take me home'} href={'/'} />
					
					</InnerWrapper>
				</Container>
			</Wrapper>
			<Footer />
		</>
	)
}

export default PageNotFound