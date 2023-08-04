import { Task } from '@/types';
import { create } from 'zustand';
// import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware"; 

interface TaskStore {
  tasks: Task[];
  setActiveTask: (id: String) => void;
  activeTask: Task
  activeTaskId: string;
  setActiveTaskId: (id: string) => void;
  editTask: (id: string, updatedTask: Task) => void;
  addTask: (data: Task) => void;
  deleteTask: (id: string) => void;
}

const useTask = create(
  persist<TaskStore>((set, get) => ({
    tasks: [],
    addTask: (data: Task) => {
      const currentTasks = get().tasks;
      const exisitingTask = currentTasks.find((task) => task.id === data.id);
      if(exisitingTask) {
        return;
      }
      set({tasks: [...get().tasks, data]});
      
    },
    deleteTask: (id: string) => {
      set({tasks: [...get().tasks.filter((task) => task.id !== id)]});
    },
    editTask: (id: string, updatedTask: Task) => {
    
      set((state) => ({
        tasks: state.tasks.map((task)=>
        task.id == id ? {...task, ...updatedTask} : task)
      }))
      console.log(id, updatedTask);
    },
    activeTaskId: "",
    setActiveTaskId: (id: string) => {

        set({ activeTaskId: id });
        
    },
    activeTask: {id: "", name: "", description: ""},
    setActiveTask: (id: String) => {
      const tasks = get().tasks
      const task = tasks.find((task) => task.id === id);
      if (task) {
        set({ activeTask: task });
      }
    }

  }), {
    name: "my-tasks-dot2do",
    storage: createJSONStorage(() => localStorage)
  }));

  export default useTask;