import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"

export default function App() {
    const cards = data.map(c => 
        <Card 
        key={c.id}
        badge={c.badge}
        img={c.coverImg}
        rating={c.stats.rating}
        reviewCount={c.stats.reviewCount}
        country={c.location}
        title={c.title}
        price={c.price}
        openSpots={c.openSpots}
        />
        )
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <div className="cards-list">
            {cards}
            </div>
        </div>
    );
}
