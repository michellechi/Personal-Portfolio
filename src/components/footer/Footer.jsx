import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Michelle Chi</h1>
                {/* <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#qualification" className="footer__link">Qualification</a>
                    </li>
                </ul> */}

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/michelle-chi/" className="footer__social-link">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/michelle_.chi/" className="footer__social-link">
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="mailto:michellechi38@yahoo.com" className="footer__social-link">
                        <i class="bx bx-envelope"></i>
                    </a>
                </div>

                <span className='footer__copy'>&copy; Michelle Chi. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;
