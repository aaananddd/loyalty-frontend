import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import React from "react";

const DeactivateGuest = () => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="deactivate" />
      <Label htmlFor="deactivate">Deactivate/Activate</Label>
    </div>
  );
};

export default DeactivateGuest;
