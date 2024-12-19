import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";
import img from "../assets/Images/github-bg.jpeg"

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import Card from "../subComponents/Card";
import BigTitlte from "../subComponents/BigTitlte";
import { data } from "../data/data";

const Box = styled.div`

  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  overflow-y: auto;
`;

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height:auto;

position: relative;
padding-bottom: 5rem;
`
const Main = styled(motion.div)`
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 2rem; 
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin: 5rem;
`;


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchRepos = async () => {
      const formattedProjects = data.map((repo, index) => ({
        id: index + 1,
        name: repo.name,
        date: new Date(repo.created_at).toLocaleDateString(),
        link: repo.html_url,
        description: repo.description,
        language: repo.language,
      }));

      setProjects(formattedProjects);

    };

    fetchRepos();
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <Container>
          <Main variants={container} initial="hidden" animate="show">
            {projects.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </Main>
        </Container>
        <BigTitlte text="MY PROJECTS" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default ProjectPage;
