import star from "../img/star.svg";
import ellipse from "../img/ellipse.svg";

export default function Card({title, price, coverImg, stats, location, openSpots}) {
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            <div className="photo-container" style={{backgroundImage: `url(./img/${coverImg})`}}>
                {badgeText && <p className="badge">{badgeText}</p>}
            </div>
            <div className="info">
                <img src={star} alt="rating star" className="star" />
                <p className="rating">{stats.rating}</p>
                <p className="review-count">({stats.reviewCount})</p>
                <img
                    src={ellipse}
                    alt="dot in the center"
                    className="ellipse"
                />
                <p className="country">{location}</p>
                <p className="description">{title}</p>
                <p className="price">
                    From ${price} <span className="per">/ person</span>
                </p>
            </div>
        </div>
    );
}
