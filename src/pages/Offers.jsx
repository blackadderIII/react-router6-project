import { useState } from "react";

export default function Offers() {
  const [items] = useState([
    { title: "Son Of krypton", price: "10.00" },
    { title: "Man of Steel", price: "20.00" },
    { title: "Smallville", price: "30.00" },
  ]);

  return (
    <div>
      <h1>Offers</h1>
      <p>Below is Our List Of Offers</p>
      <div className="offers">
        {items.map((item) => (
          <div key={item.title}>
            <img src="https://via.placeholder.com/350x200" alt="product" />
            <h3>{item.title}</h3>
            <p>¢ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
