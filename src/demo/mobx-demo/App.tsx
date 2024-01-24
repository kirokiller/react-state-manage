import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "./hooks";

const App = observer(() => {
  const store = useStores();
  const { counterStore } = store;

  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <h2>Mobx Demo</h2>
      <div>
        <button onClick={counterStore.increment}>+</button>
        <span>{counterStore.value}</span>
        <button onClick={counterStore.decrement}>-</button>
      </div>
      <input
        type="number"
        onChange={(e) => setIncrementAmount(e.target.value)}
        value={incrementAmount}
      />
      <button
        onClick={() =>
          counterStore.incrementByAmount(Number(incrementAmount) || 0)
        }
      >
        Add Amount
      </button>
      <button
        disabled={counterStore.status !== "idle"}
        onClick={() =>
          counterStore.incrementAsync(Number(incrementAmount) || 0)
        }
      >
        Add Async
      </button>
    </div>
  );
});

export default App;
