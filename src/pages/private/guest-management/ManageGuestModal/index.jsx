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

const ManageGuestModal = ({
  id,
  guestName,
  address,
  phoneNumber,
  checkIn,
  checkOut,
  amount,
}) => {
  return (
    <Dialog className="">
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
              <Input id="id" type="text" value={id} />
            </div>
            <div className="flex flex-col">
              <Label className="mb-3" htmlFor="name">
                GUEST NAME
              </Label>
              <Input id="name" type="text" value={guestName} />
            </div>
            <div className="flex flex-col">
              <Label className="mb-3" htmlFor="address">
                ADDRESS
              </Label>
              <Input id="address" type="text" value={address} />
              <Label className="mb-3" htmlFor="phonenumber">
                PHONE NUMBER
              </Label>
              <Input id="phoneNumber" type="text" value={phoneNumber} />
            </div>
            <div className="flex flex-row">
              <Label className="mb-3" htmlFor="checkIn">
                CHECK IN
              </Label>
              <Input id="checkIn" type="text" value={checkIn} />
              <Label className="mb-3" htmlFor="CheckOut">
                CHECK OUT
              </Label>
              <Input id="checkOut" type="text" value={checkOut} />
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

        <DialogFooter className="flex justify-center">
          <Button className="bg-green-500 text-white hover:bg-green-600">
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ManageGuestModal;
