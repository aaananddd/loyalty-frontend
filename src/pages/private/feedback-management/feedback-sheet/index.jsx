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
import { Textarea } from "@/components/ui/textarea";

export function FeedbackSheet() {
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
          <div className="items-start gap-4 flex flex-col">
            <Label htmlFor="name" className="text-right">
              Username
            </Label>
            <Input id="name" value="" className="col-span-3" />
          </div>
          <div className="items-start gap-4 flex flex-col">
            <Label htmlFor="email" className=" ">
              Email
            </Label>
            <Input id="email" type="email" value="" className="col-span-3" />
          </div>
          <div className="items-start gap-4 flex flex-col ">
            <Label htmlFor="feedback" className="">
              Feedback
            </Label>
            <Textarea className="w-full"/>
          </div>
        </div>
        <SheetFooter>
          <div className="w-full">
            <div className=" items-start  gap-4 flex flex-col">
              <Label htmlFor="feedback" className="text-right">
                Reply
              </Label>
              <Textarea className="w-full"/>

             
            </div>
            <SheetClose className="mt-5"><Button type="submit">Submit</Button></SheetClose>
            
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
