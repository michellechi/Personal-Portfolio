import PropTypes from "prop-types";

const WorkItems = ({ item, theme }) => {
  WorkItems.propTypes = {
    item: PropTypes.object.isRequired,
    theme: PropTypes.bool.isRequired,
  };
  return (
    <div
      className={theme ? "work__card card-dark" : "work__card"}
      key={item.id}
    >
      <div className="work__img-container">
        <img src={item.image} className="work__img" />
      </div>

      <div className="work__text">
        <h3 className={theme ? "work__title title-dark" : "work__title"}>
          {item.title}
        </h3>

        <span className="work__description">{item.description}</span>

        <div className="work__check">
          <a
            href={item.code}
            className={theme ? "work__button button-dark" : "work__button"}
          >
            Code <i className="uil uil-github-alt"></i>
          </a>
          <a
            href={item.demo}
            className={theme ? "work__button button-dark" : "work__button"}
          >
            Demo <i className="uil uil-browser"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItems;