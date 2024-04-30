import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import React from "react";

const DeactivateGuest = () => {
  return (
    <div className="flex flex-col items-center space-x-2">
      <Switch id="deactivate" className="data-[state=checked]:bg-red-400"  />
      <Label htmlFor="deactivate" className="text-xs font-normal ">
        Deactivate/Activate
      </Label>
    </div>
  );
};

export default DeactivateGuest;
