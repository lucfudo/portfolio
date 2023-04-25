import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

const App = () => {
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Navigate to="/portfolio" />} />
            <Route path="*" element={<Navigate to="/portfolio" />} />
            <Route path="/portfolio" element={<HomePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    )
};

export default App;