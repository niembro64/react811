import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Place from "./components/Place";

function App() {
    // <li>Mason's Creamery</li>,
    // <li>Mitchell's Ice Cream</li>,
    // <li>Margie's Candies</li>
    const [places, setPlaces] = useState([
        "Mason's Creamery",
        "Mitchell's Ice Cream",
        "Margie's Candies",
    ]);

    const [form, setForm] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();

        // console.log(form)
        const newState = [...places, form];
        setPlaces(newState);
        setForm("");
    };

    return (
        <div className="App">
            <h1>Favorite Ice Cream Places</h1>
            <form action="" onSubmit={onSubmitHandler}>
                <input
                    value={form}
                    onChange={(event) => {
                        setForm(event.target.value);
                    }}
                    type="text"
                    className="w-50 mx-auto form-control"
                    placeholder="what's your fave ice cream?"
                />

                <input
                    type="submit"
                    className="btn btn-primary btn-lgl d-block mx-auto my-2"
                />
            </form>
            <ol>
                {places.map((item, i) => {
                    console.log(`function run: ${i}, item: ${item}`);
                    return <Place key={i} name={item} />;
                })}
            </ol>
        </div>
    );
}

export default App;
