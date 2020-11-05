import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/logo.svg'
import {ReactComponent as Telegram} from '../assets/images/telegram.svg'
import Button from '../components/Button/Button'
import Container from '../components/Container/Container.js'
import * as palette from '../palette.js';

const NavWrapper = styled.div`
  width: 100%;
  background-color: ${palette.dark_blue}; 
  position: fixed;
  top: 0;
  z-index: 2000;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  .logo {
      height: 50px;
  }
`;

const TelegramLink = styled.a`
    svg {
            fill: ${palette.off_white};
            width: 40px;
            height: 40px;
            margin-right: 30px;

            :hover {
                fill: ${palette.white};
            }
        }
`;

const Header = () => {
	
	return (
		<NavWrapper>
            <Container>
                <Nav>
                    <img className="logo" src={Logo} alt="Uniwhales Logo"/>
                    <div>
                        <TelegramLink href="#">
                            <Telegram />
                        </TelegramLink>
                        <Button text="Launch App" href="https://app.uniwhales.io/" />
                    </div>
                </Nav>
            </Container>
		</NavWrapper>
	)
}

export default Header