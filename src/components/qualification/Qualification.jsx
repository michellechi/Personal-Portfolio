import { useState } from "react";
import "./qualification.css";
import workData from "./WorkData";
import educationData from "./EducationData";
import PropTypes from "prop-types";

const Qualification = ({ theme, setModalOpen }) => {
  Qualification.propTypes = {
    theme: PropTypes.bool.isRequired,
    setModalOpen: PropTypes.func.isRequired,
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const darkMode = theme === "dark_theme";

  const [toggleState, setToggleState] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <section className="qualification section" id="qualification">
        <h2 className="section__title">
          Qualifications
        </h2>
        {/* <span className="section__subtitle">My Journey</span> */}

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={`qualification__button button--flex ${
                toggleState === 1 ? "qualification__active" : ""
              } ${darkMode ? "qualification-button-dark" : ""}`}
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
              Education
            </div>

            <div
              className={`qualification__button button--flex ${
                toggleState === 2 ? "qualification__active" : ""
              } ${darkMode ? "qualification-button-dark" : ""}`}
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
              Experience
            </div>
          </div>

          <div
            className={
              darkMode
                ? "qualification__sections sections-dark"
                : "qualification__sections"
            }
          >
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {educationData.map((edu, idx) => (
                <div className="qualification__data" key={idx}>
                  {idx % 2 === 0 ? (
                    <>
                      <div>
                        <h3 className="qualification__title">{edu.title}</h3>
                        <span className="qualification__subtitle">{edu.subtitle}</span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i> {edu.date}
                        </div>
                      </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                      <div>
                        <h3 className="qualification__title">{edu.title}</h3>
                        <span className="qualification__subtitle">{edu.subtitle}</span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i> {edu.date}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {workData.map((exp, idx) => (
                <div className="qualification__data" key={idx}>
                  {idx % 2 === 0 ? (
                    <>
                      <div>
                        <h3 className="qualification__title">{exp.title}</h3>
                        <span className="qualification__subtitle">
                          {exp.org}
                        </span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i> {exp.date}
                        </div>

                        <button
                          className="qualification__details-button"
                          onClick={() => {
                            setSelectedExperience(idx);
                            setShowModal(true);
                            openModal();
                          }}
                        >
                          Show Details
                        </button>

                        {showModal && selectedExperience === idx && (
                          <div className="modal-overlay">
                            <div className="modal-content">
                              <button
                                className="close-button"
                                onClick={() => {
                                  setShowModal(false);
                                  closeModal(); 
                              }}
                                aria-label="Close"
                              >
                                &times;
                              </button>
                              <h3>{exp.title}</h3>
                              <span className="qualification__details-subtitle">
                                {exp.org}
                              </span>
                              <br />
                              <span className="qualification__details-subtitle">
                                {exp.date}
                              </span>
                              <br />
                              {exp.tech.map((detail, i) => (
                                <li
                                  key={i}
                                  className="qualification__details-tag"
                                >
                                  {detail}
                                </li>
                              ))}
                              <ul className="qualification__details-list">
                                {exp.details.map((detail, i) => (
                                  <li key={i}>{detail}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                      <div></div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                      <div>
                        <h3 className="qualification__title">{exp.title}</h3>
                        <span className="qualification__subtitle">
                          {exp.org}
                        </span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i> {exp.date}
                        </div>

                        <button
                          className="qualification__details-button"
                          onClick={() => {
                            setSelectedExperience(idx);
                            setShowModal(true);
                            openModal();
                          }}
                        >
                          Show Details
                        </button>

                        {showModal && selectedExperience === idx && (
                          <div className="modal-overlay">
                            <div className="modal-content">
                              <button
                                className="close-button"
                                onClick={() => {
                                  setShowModal(false)
                                  closeModal();
                                }} 
                                aria-label="Close"
                              >
                                &times;
                              </button>
                              <h3>{exp.title}</h3>
                              <span className="qualification__details-subtitle">
                                {exp.org}
                              </span>
                              <br />
                              <span className="qualification__details-subtitle">
                                {exp.date}
                              </span>
                              <br />
                              {exp.tech.map((detail, i) => (
                                <li
                                  key={i}
                                  className="qualification__details-tag"
                                >
                                  {detail}
                                </li>
                              ))}
                              <ul className="qualification__details-list">
                                {exp.details.map((detail, i) => (
                                  <li key={i}>{detail}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Qualification;
