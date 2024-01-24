import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
} from "./store/counterSlice";

function App() {
  const [incrementAmount, setIncrementAmount] = useState("2");

  const count = useAppSelector(selectCount);
  const status = useAppSelector((state) => state.counter.status);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Redux Toolkit Demo</h2>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="number"
        onChange={(e) => setIncrementAmount(e.target.value)}
        value={incrementAmount}
      />
      <button
        onClick={() =>
          dispatch(incrementByAmount(Number(incrementAmount) || 0))
        }
      >
        Add Amount
      </button>
      <button
        disabled={status !== "idle"}
        onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
      >
        Add Async
      </button>
    </div>
  );
}

export default App;
