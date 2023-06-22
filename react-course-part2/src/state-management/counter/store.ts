import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools"

// The shape of the store
interface CounterStore {
    counter: number;
    max: number;
    increment: () => void;
    reset: () => void;
};

// create returns a custom hook that we can use anywhere we want -> 
// this is actually creating a set function
const useCounterStore = create<CounterStore>(set => ({
    counter: 0,
    max: 5,
    increment: () => set(store => ({ counter: store.counter + 1 })),
    reset: () => set(() => ({ max: 10 }))
}));

// Check if we are in develop environment
if (process.env.NODE_ENV === 'development')
    mountStoreDevtool('Counter Store', useCounterStore)

export default useCounterStore;