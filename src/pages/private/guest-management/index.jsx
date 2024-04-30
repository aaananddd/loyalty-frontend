import AddGuestDialog from "./components/AddGuestModal";

import SearchBar from "./components/SearchBar";
import GuestList from "./components/GuestList";
const GuestManagementPage = () => {
  return (
    <div>
      <div>
        <div className="flex  justify-between p-4 lg:p-8">
          <h1></h1>
          <SearchBar />
          <AddGuestDialog />
        </div>
      </div>
      <div className="px-4 my-4 space-y-2 ">
        <GuestList />
      </div>
    </div>
  );
};

export default GuestManagementPage;
