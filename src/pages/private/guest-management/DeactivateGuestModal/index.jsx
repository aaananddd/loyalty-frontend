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
import React from "react";

const DeactivateGuestDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Deactivate Guest</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <CardTitle className="flex justify-center">Remove Guest</CardTitle>
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
          <Button className="bg-yellow-500 text-zinc-950 hover:bg-yellow-600">
            Add Guest
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeactivateGuestDialog;
