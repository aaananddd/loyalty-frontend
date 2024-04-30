import { RecentSales } from "./RecentSales";
import { Overview } from "./Overview";
import UsersActivity from "./UsersActivity";
const DashBoardPage = () => {
  return (
    <div className="p-4 space-y-4 w-full">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <UsersActivity />
      <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4">
        <Overview />
        <RecentSales />
      </div>
    </div>
  );
};

export default DashBoardPage;
