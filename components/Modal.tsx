"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onChange: (open: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-zinc-200/40 backdrop-blur-lg fixed inset-0">
          <Dialog.Content
            className="fixed border bg-white dark:bg-black border-neutral-400/40 top-[50%] 
            left-[50%] max-h-full h-full drop-shadow-md w-full md:w-[90vw]
            md:max-w-[450px]  translate-x-[-50%] translate-y-[-50%] md:h-auto md:max-h-[85vh] rounded-md p-[25px] focus:outline-none"
          >
            <Dialog.Title className="text-xl font-bold">{title}</Dialog.Title>
            <Dialog.Description className="text-sm">
              {description}
            </Dialog.Description>
            <div>{children}</div>
            <Dialog.Close asChild>
              <button
                className="text-neutral-400 hover:text-neutral-900 absolute inline-flex top-[10px] right-[10px] h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
                aria-label="Close"
              >
                <X size={15} />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
