import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Skills, Experience, Education, Cv, Contact } from "./index";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
