import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./pizzaData";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Claudia & Seb | Pizza Inc.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const pizzaCount = pizzaData.length;
  const storeDescription =
    "Authentic Italian cuisine. Six creative dishes to choose from. All baked in our solied stone oven, pure organic, pure delicious. ";

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaCount > 0 ? (
        <React.Fragment>
          <p>{storeDescription}</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.id} pizza={pizza} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <h1>We're sold out and maxed on deliveries!</h1>
      )}
    </main>
  );
}

function Pizza({ pizza }) {
  if (pizza.soldOut) {
    return null;
  }

  return (
    <li className={`pizza ${pizza.soldOut} ? 'sold-out' : ''`}>
      <img src={pizza.photoName} alt="Pizza" />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "We're all out!" : `$${pizza.price}`}</span>
      </div>
    </li>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;
  const localTime = new Date().toLocaleTimeString();

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>{localTime} - We're closed for the night~!</p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until 9:00PM.</p>
      <p>{closeHour}:00 for yall military folks.</p>
      <p>Comes visit us or place an order here.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
