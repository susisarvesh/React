import { create } from "zustand";

interface Task { 
    id: string;
    task: string;
    description: string;
    status: string;

}
interface TaskStore { 
    tasks: Task[],
    addtask: (task: Task) => void,
}
export const useTask = create<TaskStore>((set) => ({
    tasks: [],
    addtask: (task:Task) => { 
        set((state) => ({tasks:[...state.tasks,task]}))
    }
})) 