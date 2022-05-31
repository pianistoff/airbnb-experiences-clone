import photo from "../img/photo-grid.png"

export default function Hero() {
    return (
        <div className="hero">
            <img src={photo} alt="A photo grid showing people doing different activities." className="photo-grid" />
            <h1 className="title">Online Experiences</h1>
            <p className="para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}