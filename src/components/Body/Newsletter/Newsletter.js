import React, { useEffect } from 'react'
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

    useEffect(() => {
        const js = `
        (function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
            var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
            f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
            var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
            _.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');
            
            var ml_account = ml('accounts', '2651162', 'b4k0z4a1e7', 'load');
        `;
        const script = document.createElement("script");
        const scriptText = document.createTextNode(js);
        script.appendChild(scriptText);
        document.body.appendChild(script);
      }, [])

    return (
        <Wrapper>
            <Container>
                <H2 nomarginBottom>Stay in the loop</H2>
                <Paragraph style={{marginBottom: '10px'}}>Join our email list for latest developments in the UniWhales ecosystem</Paragraph>
                <div className="ml-form-embed"
                    data-account="2651162:b4k0z4a1e7"
                    data-form="3935734:o1f0g0">
                </div>
            </Container>
        </Wrapper>
	)
}

export default Hero