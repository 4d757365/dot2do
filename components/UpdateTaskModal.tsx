"use client";

import Modal from "./Modal";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { Task } from "@/types";
import useTask from "@/providers/TaskProvider";
import updateTaskModal from "@/hooks/useUpdateTaskModal";
import { Textarea } from "./ui/textarea";

const UpdateTaskModal = () => {
  const { isOpen, onClose } = updateTaskModal();
  const task = useTask();
  const data = task.activeTask;
  const { register, handleSubmit, reset, setValue } = useForm<FieldValues>({
    defaultValues: {
      ...data,
    },
  });

  useEffect(() => {
    if (data) {
      const fields = ["name", "description"]; // Fields to set in the form
      fields.forEach((field) => setValue(field, data[field]));
    }
  }, [data]);

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
      id: data.id,
      name,
      description,
    };
    task.editTask(data.id, newTask);

    reset();
    onClose();
    task.setActiveTask(data.id);
  };
  return (
    <div>
      <Modal
        title="Update Task"
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
              className="col-span-3 h-[120px]"
              {...register("description", { required: true })}
            />
            {/* <Input
              type=""
              id="description"
              placeholder="Description of Task"
              className="col-span-3"
              {...register("description", { required: true })}
            /> */}
          </div>
          <Button className="">Update Task</Button>
        </form>
      </Modal>
    </div>
  );
};

export default UpdateTaskModal;
