import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
    // <li>Mason's Creamery</li>,
    // <li>Mitchell's Ice Cream</li>,
    // <li>Margie's Candies</li>
    const [places, setPlaces] = useState([
        "Mason's Creamery",
        "Mitchell's Ice Cream",
        "Margie's Candies"
    ]);

    return (
        <div className="App">
            <h1>Favorite Ice Cream Places</h1>
          <ol>
            {places.map((item,i) => {
              console.log(`function run: ${i}, item: ${item}`);
              return <li>{item}</li>
                  }
            )
            
            }
            </ol>
        </div>
    );
}

export default App;
