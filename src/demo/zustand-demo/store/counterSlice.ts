import { StateCreator } from "zustand";
import { createSelectors } from "./selectors";
import { createWithEqualityFn } from "zustand/traditional";
import { immer } from "zustand/middleware/immer";
import { devtools, subscribeWithSelector } from "zustand/middleware";
import { fetchCount } from "../../../api/counterAPI";
import { shallow } from "zustand/shallow";

interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
};

export const counterSlice: StateCreator<CounterState> = () => ({
  ...initialState,
});

export const useCouterStore = createSelectors(
  createWithEqualityFn<CounterState>()(
    immer(
      devtools(subscribeWithSelector(counterSlice), {
        enabled: import.meta.env.DEV,
        name: "counter store",
      })
    ),
    shallow
  )
);

export const incrementAsync = async (amount: number) => {
  const { value } = useCouterStore.getState();
  useCouterStore.setState({
    status: "loading",
  });
  const response = await fetchCount(value, amount);
  useCouterStore.setState({
    status: "idle",
    value: response.data,
  });
};

export const increment = () => {
  useCouterStore.setState((state) => {
    state.value += 1;
  });
};

export const decrement = () => {
  useCouterStore.setState((state) => {
    state.value -= 1;
  });
};

export const incrementByAmount = (amount: number) => {
  useCouterStore.setState((state) => {
    state.value += amount;
  });
};
