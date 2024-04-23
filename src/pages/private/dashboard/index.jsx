import { RecentSales } from "./RecentSales";
import { Overview } from "./Overview";
import UsersActivity from "./UsersActivity";
const DashBoardPage = () => {
  return (
    <div className="p-4 space-y-4">
      <UsersActivity />
      <div className="flex gap-x-4">
        <Overview /> 
        <RecentSales />
      </div>
    </div>
  );
};

export default DashBoardPage;
