import star from "../img/star.svg";
import ellipse from "../img/ellipse.svg";

export default function Card({openSpots, img, rating, reviewCount, country, title, price}) {
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (country === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            <div className="photo-container" style={{backgroundImage: `url(./img/${img})`}}>
                {badgeText && <p className="badge">{badgeText}</p>}
            </div>
            <div className="info">
                <img src={star} alt="rating star" className="star" />
                <p className="rating">{rating}</p>
                <p className="review-count">({reviewCount})</p>
                <img
                    src={ellipse}
                    alt="dot in the center"
                    className="ellipse"
                />
                <p className="country">{country}</p>
                <p className="description">{title}</p>
                <p className="price">
                    From ${price} <span className="per">/ person</span>
                </p>
            </div>
        </div>
    );
}
