import gitHubIcon from "./github1.svg";

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blanck" className="btn-outline">
      <img src={gitHubIcon} alt="github" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
