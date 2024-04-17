import routePath from "@/router/routePath";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to={routePath.dashboard} className="">
      <h1 className="font-extrabold text-2xl md:text-4xl text-primary">
        Loyalty
      </h1>
    </Link>
  );
};

export default Logo;
