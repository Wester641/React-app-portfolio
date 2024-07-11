import Project from "../components/project/Project";
import { projects } from "../components/helpers/projectList";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Projects = () => {
  return (
    <>
      <Navbar />
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  title={project.title}
                  subtitle={project.subtitle}
                  img={project.img}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
