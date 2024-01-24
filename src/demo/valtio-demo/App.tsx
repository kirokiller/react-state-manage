import { useState } from "react";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  store,
} from "./store";
import { useSnapshot } from "valtio";

function App() {
  const snap = useSnapshot(store);
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <h2>Valtio Demo</h2>
      <div>
        <button onClick={increment}>+</button>
        <span>{snap.value}</span>
        <button onClick={decrement}>-</button>
      </div>
      <input
        type="number"
        onChange={(e) => setIncrementAmount(e.target.value)}
        value={incrementAmount}
      />
      <button onClick={() => incrementByAmount(Number(incrementAmount) || 0)}>
        Add Amount
      </button>
      <button
        disabled={snap.status !== "idle"}
        onClick={() => incrementAsync(Number(incrementAmount) || 0)}
      >
        Add Async
      </button>
    </div>
  );
}

export default App;
