import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header.js";
import ChampSelect from "./components/ChampSelect";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <ChampSelect />
            </div>
        );
    }
}

export default App;
