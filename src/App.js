// import logo from './logo.svg';
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const getCountriesData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const countries = await res.json();
      setData(countries);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <div className="containerStyle">
      {data.map((item) => {
        return (
          <div className="cardStyle">
            <img
              src={item.flags.png}
              alt={`flag of ${item.name.common}`}
              className="imagesStyle"
            />
            <h2>{item.name.common}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
