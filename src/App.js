import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

export default function App() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(function (response) {
        setItem(response.data.slice(0, 19));
      });
  });

  return (
    <div className="App">
      <ItemList items={items} />
    </div>
  );
}
