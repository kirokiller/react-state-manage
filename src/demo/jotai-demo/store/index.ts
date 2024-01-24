import { atomWithImmer } from "jotai-immer";

interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

export const countAtom = atomWithImmer<CounterState>({
  value: 0,
  status: "idle",
});
