import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"

export default function App() {
    const card = data.map(c => 
        <Card 
        badge={c.badge}
        img={c.coverImg}
        rating={c.stats.rating}
        reviewCount={c.stats.reviewCount}
        country={c.location}
        title={c.title}
        price={c.price}
        />
        )
    return (
        <div className="app">
            <Navbar />
            <Hero />
            {card}
        </div>
    );
}
