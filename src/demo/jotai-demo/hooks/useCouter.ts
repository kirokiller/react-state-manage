import { useAtom } from "jotai";
import { countAtom } from "../store";
import { fetchCount } from "../../../api/counterAPI";
import { useCallback } from "react";

const useCouter = () => {
  const [count, setCount] = useAtom(countAtom);

  const incrementAsync = useCallback(
    async (amount: number) => {
      setCount((state) => {
        state.status = "loading";
      });
      const response = await fetchCount(count.value, amount);
      setCount((state) => {
        state.value = response.data;
        state.status = "idle";
      });
    },
    [count, setCount]
  );

  const increment = useCallback(() => {
    setCount((state) => {
      state.value += 1;
    });
  }, [setCount]);

  const decrement = useCallback(() => {
    setCount((state) => {
      state.value -= 1;
    });
  }, [setCount]);

  const incrementByAmount = useCallback(
    (amount: number) => {
      setCount((state) => {
        state.value += amount;
      });
    },
    [setCount]
  );

  return {
    count,
    setCount,
    increment,
    decrement,
    incrementByAmount,
    incrementAsync,
  };
};

export default useCouter;
