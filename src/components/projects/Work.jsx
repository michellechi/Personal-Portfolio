import "./work.css";
import Works from "./Works";
import PropTypes from "prop-types";

const Work = ({ theme }) => {
  Work.propTypes = {
    theme: PropTypes.bool.isRequired,
  };
  return (
    <section className="work" id="projects">
      <div className="work__container section">
        <h2 className={theme ? "section__title title-dark" : "section__title"}>Projects</h2>
        {/* <span className="section__subtitle">My Personal Portfolio</span> */}

        <Works theme={theme} />
      </div>
    </section>
  );
};

export default Work;