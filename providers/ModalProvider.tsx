"use client";

import AddTaskModal from "@/components/AddTaskModal";
import UpdateTaskModal from "@/components/UpdateTaskModal";
import { useEffect, useState } from "react";

interface ModalProviderProps {}

export const ModalProvider: React.FC<ModalProviderProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <AddTaskModal />
      <UpdateTaskModal />
    </div>
  );
};
