"use client";

import useAddTaskModal from "@/hooks/useAddTaskModal";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import useTask from "@/providers/TaskProvider";

const PageContent = () => {
  const [isMounted, setIsMounted] = useState(false);

  const taskModal = useAddTaskModal();
  const task = useTask();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const handleClick = () => {
    return taskModal.onOpen();
  };

  return (
    <>
      <h1 className="text-4xl font-bold w-full p-4 text-center">My Tasks</h1>
      {task.tasks.length === 0 && (
        <p className="text-neutral-500 text-center text-xl">
          No tasks on todo list.
        </p>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-4 grid-cols-1 tems-center p-6 rounded-md justify-items-center">
        {task.tasks.map((task) => (
          <TaskCard key={task.id} data={task} />
        ))}
      </div>
      <div className="fixed bottom-2 right-2 md:bottom-4 md:right-4 z-30">
        <Button className="rounded-full h-16 w-16" onClick={handleClick}>
          <Plus size={24} />
        </Button>
      </div>
    </>
  );
};

export default PageContent;
