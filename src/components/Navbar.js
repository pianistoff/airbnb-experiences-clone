import logo from "../img/logo.svg";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="airbnb logo" className="logo" />
        </nav>
    )
}