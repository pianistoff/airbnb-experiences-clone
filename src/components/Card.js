import star from "../img/star.svg";
import ellipse from "../img/ellipse.svg";

export default function Card({badge, img, rating, reviewCount, country, title, price}) {
    let display
    if (badge) {
        display="block"
    } else {
        display="none"
    }
    return (
        <div className="card">
            <div className="photo-container" style={{backgroundImage: `url(./img/${img})`}}>
                <p className="badge" style={{display: display}}>{badge}</p>
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
