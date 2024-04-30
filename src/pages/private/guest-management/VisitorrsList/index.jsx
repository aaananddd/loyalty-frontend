import { Card } from "@/components/ui/card";
import { users } from "@/utils/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import DeactivateGuestModal from "../DeactivateGuestModal";
import DeactivateGuest from "../DeactivateSwitch";
import { loyalEmblem } from "@/utils/constants/assets";

const Guests = () => {
  function UserCard({ name, email, phoneNumber }) {
    return (
      <Card className="flex justify-between items-center p-4">
        <div className="flex gap-x-4 justify-center items-center">
          <div className="flex justify-center items-center gap-x-4">
            <Avatar className="size-16">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className=" w-42">
              <h1 className="w-40 truncate">{name}</h1>
              <p className="text-sm text-black/50">{email}</p>
              <p className="text-sm text-black/50">Phone: {phoneNumber}</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-1">
            <img src={loyalEmblem} className="size-6" />{" "}
            <span className="text-yellow-600 font-semibold">4345+</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <Button className="bg-slate-500 text-white hover:bg-slate-600">
            View In Detail
          </Button>
          {/* <Button className="bg-red-500 text-white hover:bg-red-600">
            <DeactivateGuestModal />
          </Button> */}
          <DeactivateGuest />
        </div>
      </Card>
    );
  }
  return users.map((user) => <UserCard key={user.userId} {...user} />);
};

export default Guests;
