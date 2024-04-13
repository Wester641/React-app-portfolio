import { useParams } from "react-router-dom";
import { projects } from "../components/helpers/projectList";
import BtnGitHub from "../components/btnGitHub/btnGitHub";
// import img from "../img/Projects/02-big.jpg";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];
  console.log(project);
  return (
    <>
      <Navbar />
      <main className="section">
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">{project.title}</h1>
            <img
              src={project.imgBig}
              alt="Link"
              className="project-details__img"
            />

            <div className="project-details__desc">
              <p>Skills: {project.skills}</p>
            </div>

            <BtnGitHub link="https://github.com" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Project;
