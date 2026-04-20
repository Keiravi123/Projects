import { useState } from "react";

function ShoppingCart() {
  const [items, setItems] = useState([]);

  return (
    <div>
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
    </div>
  );
}

export default ShoppingCart;