import { useAuth } from "@/utils/provider/authProvider";
import { Button } from "../ui/button";
import Logo from "./Logo";
import { LogOut } from "lucide-react";
function AuthenticatedNavLinks(clearToken) {
  return (
    <div className="flex items-center md:gap-x-8 gap-x-2 ">

      <Button
        onClick={() => {
          clearToken();
          // navigate(routePath.login, { replace: true });
        }}
        className="bg-gray-600 hover:bg-gray-400 text-slate-200 "
      >
        <LogOut className="w-5 h-5" /> <h1>Logout</h1>
      </Button>
    </div>
  );
}
const Header = () => {
  const { token, clearToken } = useAuth();

  return (
    <header className="border-b sticky top-0 bg-white/80 z-10 backdrop-blur-lg">
      <div className="flex items-center justify-between py-4 px-4 md:px-8">
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        {token && AuthenticatedNavLinks(clearToken)}
      </div>
    </header>
  );
};

export default Header;
