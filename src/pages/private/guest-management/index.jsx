import AddGuestDialog from "./AddGuestModal";
import DeactivateGuestDialog from "./DeactivateGuestModal";
import SearchBar from "./SearchBar";
import VisitorsList from "./VisitorrsList";
const GuestManagementPage = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between p-8">
          <h1 className="font-semibold text-2xl  ">Recent Visitor Log</h1>
          <SearchBar />
          <AddGuestDialog />
        </div>
      </div>
      <div className="px-4 my-4 space-y-2 mb-24">
        <VisitorsList />
        {/* <DeactivateGuestDialog /> */}
      </div>
    </div>
  );
};

export default GuestManagementPage;
