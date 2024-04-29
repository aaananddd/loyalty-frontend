import { Card } from "@/components/ui/card";
import { users } from "@/utils/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const UserFeedacks = () => {
  function UserCard({ name, email, phoneNumber }) {
    return (
      <Card className="flex justify-between items-center p-4">
        <div className="flex justify-center items-center gap-x-4">
          <Avatar className="size-16">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h1>{name}</h1>
            <p className="text-sm text-black/50">{email}</p>
            <p className="text-sm text-black/50">Phone: {phoneNumber}</p>
          </div>
        </div>
        <div className="space-x-4">
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">View</Button>
        </div>
      </Card>
    );
  }
  return users.map((user) => <UserCard key={user.userId} {...user} />);
};

export default UserFeedacks;
