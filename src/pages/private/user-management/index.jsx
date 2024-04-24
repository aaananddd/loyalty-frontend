import SearchBar from "./SearchBar";
import UsersList from "./UsersList";
import CreateUserDialog from "./CreateUserDialog";
const UserManagementPage = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between p-8">
          <h1 className="font-semibold text-2xl  ">Users</h1>
          <SearchBar />
          <CreateUserDialog />
        </div>
      </div>
      <div className="px-4 my-4 space-y-2 mb-24">
        <UsersList />
      </div>
    </div>
  );
};

export default UserManagementPage;
