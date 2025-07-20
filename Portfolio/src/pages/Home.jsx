import React from "react";
import Header from "../components/Header";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Jobprofile from "../components/Jobprofile";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section>
      <div>
        <Header />
        <Education />
        <Skills />
        <Jobprofile />
        <Projects />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
