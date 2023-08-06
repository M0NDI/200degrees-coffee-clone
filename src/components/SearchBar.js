import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center outline pt-6 w-full">
      <form className="">
        <div className="outline outline-red-900">
          <input type="text" placeholder="Search" className="text-center" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
