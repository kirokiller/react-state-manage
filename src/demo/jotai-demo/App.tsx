import { useState } from "react";
import useCouter from "./hooks/useCouter";

function App() {
  const { count, increment, decrement, incrementByAmount, incrementAsync } =
    useCouter();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <h2>Jotai Demo</h2>
      <div>
        <button onClick={increment}>+</button>
        <span>{count.value}</span>
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
        disabled={count.status !== "idle"}
        onClick={() => incrementAsync(Number(incrementAmount) || 0)}
      >
        Add Async
      </button>
    </div>
  );
}

export default App;
