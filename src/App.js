import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectsPage";
import MySkillsPage from "./components/MySkillsPage";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence mode='wait'>
          <Routes key={location.pathname} location={location} >
            <Route path="/" element={<Main />} />
            <Route path="/about-me" element={<AboutPage />} />
            <Route path="/my-projects" element={<ProjectPage />} />
            <Route path="/my-skills" element={<MySkillsPage />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
