// import btnLink from "./github1.svg";
import btnLink from "./link_90379.png";

const BtnLink = ({ link }) => {
  return (
    <a href={link} target="_blanck" className="btn-outline">
      <img src={btnLink} alt="btnLink" className="link-btn" />
     Link
    </a>
  );
};

export default BtnLink;
