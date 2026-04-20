import "./styles.css";
import Card from "./Components/Card";
import { useState } from "react";

export default function App() {
  const [upvote, setUpvote] = useState(0);

  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  function like() {
    setUpvote(upvote + 1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setItems([...items, input]);
    setInput("");
  };

  const name = "Camila";

  return (
    <div className="App">
      {/* ✅ EVENT HANDLING */}
      <h2>Likes: {upvote}</h2>
      <button onClick={like}>👍</button>

      {/* ✅ FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {items.length === 0 ? (
        <p>No items</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      
      <button onClick={() => setItems([])}>Clear Items</button>

      <Card Name={name} Work="SWE" />
      <Card Name="Kay" Work="Chef" pics="/" />
      <Card Name="Sam" Work="President" />
      <Card Name="Kyley" Work="Hunter" />
    </div>
  );
}