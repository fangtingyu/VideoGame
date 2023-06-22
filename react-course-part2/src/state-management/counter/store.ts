import { create } from "zustand";

// The shape of the store
interface CounterStore {
    counter: number;
    increment: () => void;
    reset: () => void;
};

// create returns a custom hook that we can use anywhere we want -> 
// this is actually creating a set function
const useCounterStore = create<CounterStore>(set => ({
    counter: 0,
    increment: () => set(store => ({ counter: store.counter + 1 })),
    reset: () => set(() => ({ counter: 0 }))
}));

export default useCounterStore;