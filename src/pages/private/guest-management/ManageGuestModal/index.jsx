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

const ManageGuestModal = () => {
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
            Manage Guest Details
          </CardTitle>
          <CardDescription className="flex justify-center">
            Conveniently edit guest details for improved accuracy.
          </CardDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-center">
          <Button className="bg-green-500 text-white hover:bg-green-600">
            Save Changes
          </Button>
          <Button className="bg-red-500 text-white hover:bg-red-600">
            Deactivate
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ManageGuestModal;
