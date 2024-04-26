import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import React from "react";

const DeactivateGuest = () => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="deactivate" className="data-[state=checked]:bg-slate-600" />
      <Label htmlFor="deactivate">Deactivate/Activate</Label>
    </div>
  );
};

export default DeactivateGuest;
