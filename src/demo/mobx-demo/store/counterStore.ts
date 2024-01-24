import { makeAutoObservable, runInAction } from "mobx";
import { fetchCount } from "../../../api/counterAPI";

type Status = "idle" | "loading" | "failed";

export default class CounterStore {
  value = 0;
  status: Status = "idle";

  constructor() {
    makeAutoObservable(this);
  }

  incrementAsync = async (amount: number) => {
    this.status = "loading";
    const response = await fetchCount(this.value, amount);
    runInAction(() => {
      this.status = "idle";
      this.value = response.data;
    });
  };

  increment = () => {
    this.value += 1;
  };

  decrement = () => {
    this.value -= 1;
  };

  incrementByAmount = (amount: number) => {
    this.value += amount;
  };
}
