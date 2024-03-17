import { useEffect, useState } from "react";

interface Coin {
  id: string;
  name: string;
  rank: number;
  total_supply: number;
}
function App() {
  const [coins, setConins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchCoins()
      .then((data) => setConins(data))
      .then(() => setLoading(false));
  }, []);

  async function fetchCoins(): Promise<Coin[]> {
    const response = await fetch("https://api.coinpaprika.com/v1/tickers");
    const data = await response.json();
    return data;
  }

  return (
    <div>
      {loading ? (
        <h3>loading....</h3>
      ) : (
        <div>
          <ul>
            {coins.map((coin, index) => (
              <li key={index}>
                {coin.id} {coin.name} {coin.rank}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
