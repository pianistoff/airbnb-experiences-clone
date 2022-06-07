import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
    const cards = data.map((card) => <Card key={card.id} {...card} />);
    return (
        <div className="app">
            <Navbar />
            <main className="main">
                <Hero />
                <div className="cards-list">{cards}</div>
            </main>
        </div>
    );
}
