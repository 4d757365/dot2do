"use client";

import useAddTaskModal from "@/hooks/useAddTaskModal";
import Modal from "./Modal";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { Task } from "@/types";
import useTask from "@/providers/TaskProvider";
import { Textarea } from "./ui/textarea";

const AddTaskModal = () => {
  const { isOpen, onClose } = useAddTaskModal();
  const task = useTask();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const handleChange = (open: boolean) => {
    if (!open) {
      reset();
      onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (values) => {
    const name = values.name;
    const description = values.description;
    const newTask: Task = {
      id: Date.now().toString(),
      name,
      description,
    };
    task.addTask(newTask);
    reset();
    onClose();
  };
  return (
    <div>
      <Modal
        title="Create a Task"
        description=" Become focused & organized."
        isOpen={isOpen}
        onChange={handleChange}
      >
        <form
          className="flex flex-col gap-y-6 mt-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-3">
            <Label htmlFor="name" className="text-right text-md">
              Task Name
            </Label>
            <Input
              id="name"
              placeholder="Task Name"
              className="col-span-3"
              {...register("name", { required: true })}
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="description" className="text-right text-md">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Description of Task"
              className="col-span-3"
              {...register("description", { required: true })}
            />
          </div>
          <Button className="">Create Task</Button>
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
