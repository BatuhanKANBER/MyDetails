import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import { Develope } from './AllSvgs';
import MySkillsImage from '../assets/Images/myskills-img.png'


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`
const MySkills = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 30vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>

                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Software Developer
                    </Title>
                    <Description>
                        <strong>Skills and Tools</strong>
                        <ul>
                            <li>Java</li>
                            <li>Spring Boot</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>SQL</li>
                            <li>VSCode</li>
                            <li>Intellij</li>
                            <li>Git</li>
                        </ul>
                    </Description>
                </Main>
                <MySkills>
                    <img src={MySkillsImage} alt="spaceman" />
                </MySkills>
                <BigTitle text="MY SKILLS" top="80%" right="30%" />
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage
