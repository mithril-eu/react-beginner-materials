import { create } from "zustand";

type CounterStoreType = {
  count: number;
  increment: () => void;
};

export const useCounterStore = create<CounterStoreType>()((set) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
