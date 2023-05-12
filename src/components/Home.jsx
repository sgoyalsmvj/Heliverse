import React, { useState } from "react";
import HeliData from "../assets/heliverse_mock_data";
import Card from "./card";

import ReactPaginate from "react-paginate";
const Home = () => {
  const [query, setQuery] = useState(" ");

  const search = (data) => {
    return data;
  };
  const users = HeliData;
  const [pageNumber, setpageNumber] = useState(0);

  const usersPerPage = 20;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = users
    .filter(
      (item) =>
        item.first_name.toLowerCase().includes(query) ||
        item.domain.toLowerCase().includes(query) ||
        item.gender.toLowerCase().includes(query)
    )
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <Card
          key={user.id}
          first_name={user.first_name}
          last_name={user.last_name}
          email={user.email}
          gender={user.gender}
          avatar={user.avatar}
          domain={user.domain}
          id={user.id}
          available={user.available}
        />
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setpageNumber(selected);
  };

  return (
    <>
      <h1 className="text-center font-mono text-2xl mt-20">HeliVerse</h1>
      <form className="flex items-center justify-center mt-[50px]">
        <input
          className="border-2 rounded p-2 w-[500px]"
          type="text"
          placeholder="Seach Users"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </form>
      <div className="flex flex-wrap items-center justify-between p-10 m-10 ">
        {displayUsers}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"list-none flex justify-center items-center mb-20"}
        previousLinkClassName={"rounded m-2 p-2"}
        nextLinkClassName={"rounded border-2 p-2 m-2"}
        disabledClassName={"rounded border-2 m-2"}
        activeClassName={"prounded border-2 m-2 bg-shadow-indigo-500/40"}
        pageClassName={"rounded border-2 m-2 pl-4 pr-4 pt-2 pb-2 "}
      />
    </>
  );
};

export default Home;
