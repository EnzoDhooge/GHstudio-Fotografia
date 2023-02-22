import React from 'react';
import styled from 'styled-components';

function Footer() {
    return(
        <FooterContainer>
            <p>© 2022, Gustavo Hernandez Studio, construido y diseñado por <a href='https://genovasite.com/'>Genova</a>.</p>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    background-color: #333;
    align-items: center;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 8vh;
    p{
        margin: auto 0;
        color: #fff;
        a{
            color: #E9C994;
            text-decoration: none;
            &:hover{
                text-decoration: underline #E9C994;
                transition: .2s;
            }
        }
    }

    @media (max-width: 750px){
        p{
            width: 90%;
            font-size: 0.8rem;
            text-align: center;
        }
    }

    @media (max-width: 500px){
        p{
            font-size: 0.7rem;
        }
    }
`;