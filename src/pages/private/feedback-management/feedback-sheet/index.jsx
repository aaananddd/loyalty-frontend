import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TextareaDemo } from "./textarea";

export function FeedbackSheet({ name, email }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
          View
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>User Feedback</SheetTitle>
          <SheetDescription>
            Admin Response: Provide your valuable feedback to our users here.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Username
            </Label>
            <Input id="name" value={name} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="feedback" className="text-right">
              Feedback
            </Label>
            <Input
              id="textarea"
              type="textarea"
              value={email}
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <div className="grid grid-cols-4 items-center gap-4 ">
              <Label htmlFor="feedback" className="text-right">
                Reply
              </Label>
              <Input id="textarea" value={email} className="col-span-3" />
              <Button type="submit">Submit</Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
