import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const UserManagementPage = () => {
  return (
    <div className="w-[79%] flex min-h-screen">
      <div className="w-[38.333%]">
        <Card className="w-[400px] ml-6 ">
          <CardHeader>
            <CardTitle className="flex justify-center">
              Create New User
            </CardTitle>
            <CardDescription className="flex justify-center">
              Welcome Aboard: Register as a New User
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-yellow-500 text-zinc-950 hover:bg-yellow-600">
              Create Account
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className=" w-[46%] h-1/3">
        <Card className="w-[700px]">
          <CardHeader>
            <CardTitle className="flex justify-center">
              Manage User Details
            </CardTitle>
            <CardDescription className="flex justify-center">
              Click the button to modify user information.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button className="bg-yellow-500 text-zinc-950 hover:bg-yellow-600">
              Create Account
            </Button>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>

        <Card className="w-[700px]">
          <CardHeader>
            <CardTitle className="flex justify-center">Revoke Users</CardTitle>
            <CardDescription className="flex justify-center">
              Click the button to revoke user authorization.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button className="bg-yellow-500 text-zinc-950 hover:bg-yellow-600">
              Create Account
            </Button>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default UserManagementPage;
