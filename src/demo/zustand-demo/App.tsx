import { useState } from "react";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  useCouterStore,
} from "./store";

function App() {
  const [count, status] = useCouterStore((state) => [
    state.value,
    state.status,
  ]);

  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <h2>Zustand Demo</h2>
      <div>
        <button onClick={increment}>+</button>
        <span>{count}</span>
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
        disabled={status !== "idle"}
        onClick={() => incrementAsync(Number(incrementAmount) || 0)}
      >
        Add Async
      </button>
    </div>
  );
}

export default App;
