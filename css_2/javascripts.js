import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const [name, setName] = useState("");

  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${name}`);
    setName("");
  };

  return (
    <div style={{ padding: "20px" }}>
      
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <button onClick={() => setItems([...items, "New Item"])}>
        Add Item
      </button>

      <hr />

      <h2>Available Products</h2>
      <ul>
        {[
          { id: 1, name: "Laptop", available: true },
          { id: 2, name: "Phone", available: false },
          { id: 3, name: "Tablet", available: true },
        ]
          .filter(product => product.available)
          .map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
      </ul>

      <hr />

      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>

      <hr />

      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

    </div>
  );
}

export default App;