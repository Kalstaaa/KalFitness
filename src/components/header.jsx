import '../css/header.css';

// Asset Image
import P1 from '../images/P1.jpeg';
import P2 from '../images/P2.jpeg';
import P3 from '../images/P3.jpeg';
import P4 from '../images/P4.jpeg';
import P5 from '../images/P5.jpeg';

function Header() {
    return (
        <header>
            <div className="header"></div>
            <div className="overlay"></div>
            <div className="section">
                <div className="section-text">
                    <h1>Unleash Your</h1>
                    <h1>Inner Athlete</h1>
                    <p>We are dedicated to helping you transform your <br /> body and mind through the power of fitness</p>
                    <div className="button-section">
                        <button>Join now</button>
                        <button>49/Month</button>
                    </div>
                </div>
                <div className="review">
                    <div className="image-review">
                        <img src={P1} alt="P1" />
                        <img src={P2} alt="P2" />
                        <img src={P3} alt="P3" />
                        <img src={P4} alt="P4" />
                        <img src={P5} alt="P5" />
                    </div>
                    <div className="review-text">
                        <h1>500+</h1>
                        <p>Members happy</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;