import { useState } from "react";
import "./qualification.css";
import PropTypes from "prop-types";

const Qualification = ({ theme }) => {
  Qualification.propTypes = {
    theme: PropTypes.bool.isRequired,
  };

  const [toggleState, setToggleState] = useState(1);

  const [showModal, setShowModal] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <section className="qualification section" id="qualification">
        <h2 className={theme ? "section__title title-dark" : "section__title"}>Qualifications</h2>
        {/* <span className="section__subtitle">My Journey</span> */}

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                `qualification__button button--flex ${
                  toggleState === 1 ? "qualification__active" : ""
                } ${theme ? "qualification-button-dark" : ""}`
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>{" "}Education</div>

            <div
              className={
                `qualification__button button--flex ${
                  toggleState === 2 ? "qualification__active" : ""
                } ${theme ? "qualification-button-dark" : ""}`

              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}Experience</div>
          </div>

          <div
            className={
              theme
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

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">California Polytechnic State University, San Luis Obispo</h3>
                  <span className="qualification__subtitle">San Luis Obispo, CA</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - 2025
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Golden West Community College -</h3>
                  <h3 className="qualification__title">Dual Enrollment</h3>
                  <span className="qualification__subtitle">Huntington Beach, CA</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title"> Marina High School </h3>
                  <span className="qualification__subtitle">Huntington Beach, CA</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2017 - 2021
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }>

              <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Data Science Intern</h3>
                <span className="qualification__subtitle">California Department of Public Health</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> February 2025 - <br />June 2025
                </div>

                <button
                  className="qualification__details-button"
                  onClick={() => setShowModal(true)}
                >
                  Show Details
                </button>

                {showModal && (
                  <div className="modal-overlay">
                    <div className="modal-content">
                      <button
                        className="close-button"
                        onClick={() => setShowModal(false)}
                        aria-label="Close"
                      >
                      x
                      </button>
                      <h3>Data Science Intern - California Department of Public Health</h3>
                      <ul className="qualification__details-list">
                        <li>Built Power BI dashboards to track public health metrics.</li>
                        <li>Cleaned and joined multiple datasets using Power Query.</li>
                        <li>Collaborated with epidemiologists to translate data into insights.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>


              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Data Platform Assistant</h3>
                  <span className="qualification__subtitle">Cal Poly College of Engineering</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> April 2024 - <br />June 2025
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>  

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Software Engineer Intern</h3>
                  <span className="qualification__subtitle">JackRabbit Marketplace</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> September 2024 - March 2025
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">IT Intern</h3>
                  <span className="qualification__subtitle">Terumo Neuro</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> June 2024 - <br />August 2024
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Information Technology Assistant</h3>
                  <span className="qualification__subtitle">Cal Poly Information Technology Services</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> May 2023 - <br />April 2024
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Grocery Associate</h3>
                  <span className="qualification__subtitle">Amazon Fresh</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> June 2022 - <br />August 2022
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Math and Reading Tutor</h3>
                  <span className="qualification__subtitle">Kumon Math and Reading Center</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> October 2020 - <br />August 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Qualification;
