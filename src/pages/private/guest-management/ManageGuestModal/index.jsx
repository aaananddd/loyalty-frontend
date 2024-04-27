
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import VisitorsList from "../VisitorrsList";
import DeactivateGuest from "../DeactivateSwitch";
import { useState } from "react";
import { CheckInDatePicker } from "../CheckInDatePicker";
import { CheckOutDatePicker } from "../CheckOutDatePicker";

const ManageGuestModal = ({
  id,
  guestName,
  address,
  phoneNumber,
  checkIn,
  checkOut,
  amount,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog className="" open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button className="bg-gray-500 hover:bg-gray-600 text-white">
          Manage
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <CardTitle className="flex justify-center">
            Manage Details Of {guestName}
          </CardTitle>
          <CardDescription className="flex justify-center">
            Conveniently edit guest details for improved accuracy.
          </CardDescription>
          <div className="grid gap-2 items-center space-y-2">
            <div className="flex flex-col ">
              <Label className="mb-3" htmlFor="email">
                Guest ID
              </Label>
              <Input id="id" type="text"  value={id} />
            </div>
            <div className="flex flex-col">
              <Label className="mb-3" htmlFor="name">
                GUEST NAME
              </Label>
              <Input id="name" type="text"  value={guestName} />
            </div>
            <div className="flex flex-col ">
              <Label className="mb-3" htmlFor="address">
                ADDRESS
              </Label>
              <Input id="address" type="text"  value={address} />
              <Label className="mb-3 mt-3" htmlFor="phonenumber">
                PHONE NUMBER
              </Label>
              <Input id="phoneNumber" type="text" value={phoneNumber} />
            </div>
            <div className="flex w-[95%]">
            <div className="flex flex-col w-1/2 items-center justify-center text-center ">
            <label htmlFor="CheckIn" className="w-full text-left pl-3">CheckIn</label>
              <CheckInDatePicker/>
             
            </div>
            <div className="flex flex-col w-1/2 items-center justify-center text-center">
           
              <label htmlFor="checkout" className="w-full text-left pl-5">CheckOut</label>
              <CheckOutDatePicker/>
            </div>
            </div>
            <div className="flex flex-col ">
              <Label className="mb-3" htmlFor="amount">
                AMOUNT
              </Label>
              <Input id="amount" type="number" value={amount} />
            </div>
            <div>
              <DeactivateGuest />
            </div>
          </div>
        </DialogHeader>

        <DialogFooter className="flex justify-center w-full">
          <Button
            onClick={handleClose}
            className="bg-red-500 text-white hover:bg-red-600"
          >
            Cancel
          </Button>
          <Button className="bg-green-500 text-white hover:bg-green-600">
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ManageGuestModal;
