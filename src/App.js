import { useEffect, useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Table } from "./components/Table";

function App() {
  const [coins, setCoins] = useState([]);
  const [result, setResult] = useState("");
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((r) => r.json())
      .then((r) => {
        setCoins(r);
      });
  }, []);
  return (  
    <div className="App">
      <Input setResult={setResult} />
      <Table result={result} coins={coins} />
    </div>
  );
}

export default App;
