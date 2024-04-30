import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const AddGuestDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Add Guest</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <CardTitle className="flex justify-center">Add New Guest</CardTitle>
          <CardDescription className="flex justify-center">
            Welcome Aboard: Register as a New User
          </CardDescription>
        </DialogHeader>
        <div className="grid gap-2 items-center space-y-2">
          <div className="flex flex-col ">
            <Label className="mb-3" htmlFor="email">
              Email
            </Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="flex flex-col">
            <Label className="mb-3" htmlFor="password">
              Password
            </Label>
            <Input id="password" type="password" />
          </div>
          <div className="flex flex-col">
            <Label className="mb-3" htmlFor="confirmPassword">
              Confirm Password
            </Label>
            <Input id="confirmPassword" type="password" />
          </div>
        </div>
        <DialogFooter className="flex justify-center">
          <Button
            onClick={handleClose}
            className="bg-red-500 text-white hover:bg-red-600"
          >
            Cancel
          </Button>
          <Button className="bg-green-500 text-white hover:bg-green-600">
            Add Guest
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddGuestDialog;
