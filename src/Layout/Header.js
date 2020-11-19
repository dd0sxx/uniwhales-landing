import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/logo.svg'
import {ReactComponent as Telegram} from '../assets/images/telegram.svg'
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
  ${palette.md} {
    padding: 15px 0;
    .logo {
      height: 35px;
  }
    }
`;

const Button = styled.a`
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
  ${palette.md} {
    padding: 6px 20px;
    font-size: 14px;
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
            ${palette.md} {
                width: 30px;
            height: 30px;
            margin-right: 20px;
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
                        <TelegramLink href="https://t.me/uniwhales">
                            <Telegram />
                        </TelegramLink>
                        <Button>App Launching Soon!</Button>
                    </div>
                </Nav>
            </Container>
		</NavWrapper>
	)
}

export default Header