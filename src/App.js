import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
    const [places, setPlaces] = useState([
        <li>"Mason's Creamery</li>,
        <li>Mitchell's Ice Cream</li>,
        <li>Margie's Candies</li>,
    ]);

    return (
        <div className="App">
            <h1>Favorite Ice Cream Places</h1>

            <ul>{places}</ul>
        </div>
    );
}

export default App;
