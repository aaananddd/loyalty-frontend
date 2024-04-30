import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleKeyDown } from "@/utils/functions/ctrlKSearch";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", (event) =>
      handleKeyDown(event, inputRef),
    );
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search for:", searchValue);
  };

  return (
    <form
      className="flex items-center  justify-center  -z-20  relative lg:mr-4 w-80 lg:w-96"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        className="pl-2 lg:w-96 pr-20"
        placeholder="Search Users...   (Ctrl+K)"
        ref={inputRef}
        value={searchValue}
        onChange={handleChange}
      />
      <Button
        type="submit"
        onClick={() => inputRef.current.blur()}
        className="absolute right-0 top-0"
      >
        <Search />
      </Button>
    </form>
  );
};

export default SearchBar;
