import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import AboutMeImage from '../assets/Images/about-me-img.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const AboutMe = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 30vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>

                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticleComponent theme='dark' />

                <AboutMe>
                    <img src={AboutMeImage} alt="spaceman" />
                </AboutMe>
                <Main>
                    I have been passionate about software development since a young age and continued to pursue this interest in my education.
                    <br></br>
                    In 2024, I graduated from Kocaeli University with a degree in Information Systems Engineering. During my studies, I gained experience in various fields and projects.
                    <br></br>
                    I am particularly interested in web and mobile programming and actively develop projects in these areas.
                </Main>

                <BigTitle text="ABOUT ME" top="10%" left="5%" />


            </Box>

        </ThemeProvider>

    )
}

export default AboutPage
