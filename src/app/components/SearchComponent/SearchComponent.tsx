"use client";
import { useState } from "react";
import { redirect } from "next/navigation";

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("");
  const [numberValue, setNumberValue] = useState<string>("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    redirect(`/recipes?query=${searchValue}&cuisine=${selectValue}&maxReadyTime=${numberValue}`);
  };

  const changeNumberValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) >= 0) setNumberValue(e.target.value);
  };

  return (
    <div className="h-[100svh] flex items-center justify-center bg-blue-500 p-4">
      <form className="flex gap-2 w-full" onSubmit={submitForm}>
        <input
          type="search"
          placeholder="Type your food"
          className="p-1 bg-blue-300 text-black rounded w-full"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <select
          className="px-4 py-2 bg-blue-300 text-black rounded"
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value="">Choose cuisine</option>
          <option value="chinese">Chinese</option>
          <option value="italian">Italian</option>
          <option value="mexican">Mexican</option>
        </select>
        <input
          className="px-4 py-2 bg-blue-300 text-black rounded w-30"
          placeholder="prep time"
          type="number"
          value={numberValue}
          onChange={changeNumberValue}
        />
        <button
          className="bg-blue-300 text-black px-4 py-1 rounded cursor-pointer disabled:cursor-default disabled:bg-gray-300"
          disabled={searchValue === '' && selectValue === '' && numberValue === ''}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
