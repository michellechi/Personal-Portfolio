const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitile">Tech Grad</span>
      </div>
      <div className="about__box">
        <i class="bx bxs-graduation about__icon"></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitile">B.S. CS</span>
      </div>
      <div className="about__box">
        <i class="bx bx-code-alt about__icon"></i>
        <h3 className="about__title">Data</h3>
        <span className="about__subtitile">Scientist</span>
      </div>
    </div>
  );
};

export default Info;
