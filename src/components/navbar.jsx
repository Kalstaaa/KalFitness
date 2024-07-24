import '../css/navbar.css'


function Navbar () {
    return(
        <div className="navbar">
            <div className="nav-brand">
                <h2>Kal</h2>
                <h2>Fitness</h2>
            </div>
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#service">Service</a>
                <a href="#facility">Facility</a>
                <a href="#aboutus">About Us</a>
            </div>
            <div className="nav-button">
                <button>Join</button>
            </div>
        </div>

    )
}
export default Navbar