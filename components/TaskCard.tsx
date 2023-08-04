"use client";
import { Edit, Trash } from "lucide-react";
import { Button } from "./ui/button";
import useTask from "@/providers/TaskProvider";
import { Task } from "@/types";
import useUpdateTaskModal from "@/hooks/useUpdateTaskModal";

interface TaskCardProps {
  data: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ data }) => {
  const task = useTask();
  const updateTaskModal = useUpdateTaskModal();
  const onRemove = () => {
    task.deleteTask(data.id);
  };

  const onEdit = () => {
    task.setActiveTask(data.id);
    updateTaskModal.onOpen();
  };
  return (
    <div
      className="flex  flex-col justify-items-end border border-neutral-400/40 
     w-4/5 h-full rounded-lg p-3 shadow-lg m-4"
    >
      <h3 className="text-2xl font-semibold truncate">{data.name}</h3>
      <p className="text-neutral-400 text-md mt-3">{data.description}</p>
      <div className="flex justify-end gap-4 mt-auto">
        <Button variant="outline" onClick={onEdit}>
          <Edit size={15} />
        </Button>
        <Button variant="outline" onClick={onRemove}>
          <Trash size={15} />
        </Button>
      </div>
    </div>
  );
};

export default TaskCard;
