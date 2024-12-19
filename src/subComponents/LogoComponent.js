import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import cvFile from "../assets/batuhan_kanber_cv.pdf";




const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`

const LogoComponent = (props) => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Batuhan_Kanber_CV.pdf"; // İndirme sırasında görünen dosya adı
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Logo onClick={handleDownload} color={props.theme} style={{ cursor: "pointer" }}>
      BK
    </Logo>
  )
}

export default LogoComponent
