import { Card } from "@/components/ui/card";
import { users } from "@/utils/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import DeactivateGuest from "../DeactivateSwitch";
import { loyalEmblem } from "@/utils/constants/assets";
import { BookUser } from "lucide-react";
import { useNavigate } from "react-router-dom";
import routePath from "@/router/routePath";

function UserCard({ name, email, phoneNumber, userId }) {
  const navigate = useNavigate();
  return (
    <Card className="flex  gap-y-8 justify-between items-center p-4">
      <div className="flex flex-col lg:flex-row gap-x-4 gap-y-4 justify-center items-start lg:items-center">
        <div className="flex justify-center items-center gap-x-4">
          <Avatar className="size-14 lg:size-16">
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
          <img src={loyalEmblem} className="size-6" />
          <span className="text-yellow-600 font-semibold">4345+</span>
        </div>
      </div>
      <div className="flex lg:gap-x-4 flex-col gap-y-6">
        <Button
          className="space-x-2 "
          variant="outline"
          onClick={() => navigate(`${routePath.guestManagement}/${userId}`)}
        >
          <BookUser /> <span>View In Detail</span>
        </Button>
        <DeactivateGuest />
      </div>
    </Card>
  );
}
const GuestList = () => {
  return users.map((user) => <UserCard key={user.userId} {...user} />);
};

export default GuestList;
