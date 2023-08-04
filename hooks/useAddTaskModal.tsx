import { create } from "zustand";

interface AddTaskModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddTaskModal = create<AddTaskModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddTaskModal;
