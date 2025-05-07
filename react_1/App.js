import "./styles.css";
import Card from "./Components/Card";
import { useState } from "react";

export default function App() {
    const [upvote, setUpvote] = useState(0);  // Correct use of hooks

    function like() {
        setUpvote(upvote + 1);  // Update state properly
    }

    const name = "Camila";  // Declare the 'name' variable correctly

    return (
        <div className="App">
            {upvote}
            <button onClick={like}>👍</button>
            <Card Name={name} Work="SWE" />
            <Card Name="Kay" Work="Chef" pics="/" />
            <Card Name="Sam" Work="President" />
            <Card Name="Kyley" Work="Hunter" />
        </div>
    );
}
