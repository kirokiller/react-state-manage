import { proxy } from "valtio";
import { fetchCount } from "../../../api/counterAPI";

interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
};

export const store = proxy<CounterState>({
  ...initialState,
});

export const incrementAsync = async (amount: number) => {
  store.status = "loading";
  const response = await fetchCount(store.value, amount);
  store.status = "idle";
  store.value = response.data;
};

export const increment = () => {
  store.value += 1;
};

export const decrement = () => {
  store.value -= 1;
};

export const incrementByAmount = (amount: number) => {
  store.value += amount;
};
