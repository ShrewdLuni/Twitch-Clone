"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { useState, useTransition } from "react";
import { updateStream } from "@/actions/stream";
import { toast } from "sonner";

interface InfoModalProps{
  initialName: string;
  initialThumbnailUrl: string | null;
}

export const InfoModal = ({initialName,initialThumbnailUrl} : InfoModalProps) => {
  const [isPending, startTransition] = useTransition();
  const [name, setName] =useState(initialName);
  
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      updateStream({name: name})
      .then(() => toast.success("Stream updated"))
      .catch(() => toast.error("Something went wrong"))
    })
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary" size="sm" className="ml-auto font-semibold">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Edit Stream Info
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-14">
          <div className="space-y-2">
            <Label>
              Name
            </Label>
            <Input placeholder="Stream name" onChange={onChange} value={name} disabled={isPending}/>
          </div>
          <div className="flex justify-between">
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={isPending} variant="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}