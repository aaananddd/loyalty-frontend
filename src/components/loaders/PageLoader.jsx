import { Loader } from "lucide-react";

const PageLoader = () => {
  return (
    <div className=" w-2/3 flex items-center justify-center">
      <div className="text-4xl text-primary">
        <Loader className="animate-spin" />
      </div>
    </div>
  );
};

export default PageLoader;
