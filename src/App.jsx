import { useState } from "react";
import "./App.css";
import AnimalSearch from "./components/Search";
import Animal from "./components/Animal"

function App() {
    const [animals, setAnimals] = useState([]);
    const search = async (q) => {
        const response = await fetch(
            "http://localhost:8080?" + new URLSearchParams({ q })
        );
        const data = await response.json();
        setAnimals(data);
    };
    return (
        <>
            <main className="app-wrapper">
                <h1>Animal Form</h1>

                <AnimalSearch placeholder={"search Animals here"} className="animal-search" search={search} />

                <section className="animal-list-container">
                    <ul>
                        {animals.map((animal) => (
                         <Animal key={animal.id} {...animal}/>
                        ))}
                        {animals.length === 0 && "No Animals Found"}
                    </ul>
                </section>
            </main>
        </>
    );
}




export default App;