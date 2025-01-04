import { create } from 'zustand';
interface Counter { 
    count:Number
}
interface CounterStore { 
    count: number;
    increment: (count: Counter) => void;
   decrement:(count:Counter)=>void
}
const useCounter = create<CounterStore>((set) =>( {
    count: 0,
    increment: () => set((state) => ({count:state.count+1})),
    decrement: () => set((state) => ({count:state.count-1})),
}))
 

export default useCounter;