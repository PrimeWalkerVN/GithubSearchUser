import React, { useContext, useState } from "react";
import searchUserApi from "../../api/searchUserApi";
import ListResult from "./ListResult";
import NavBar from "./NavBar";
import SearchUser from "./SearchUser";
import { Typography } from "antd";
import Loading from "../Loading";
import Noti from "../Noti";
import { GithubContext } from "../../context/context";

const DashBoard = (props) => {
  const context = useContext(GithubContext);
  const [items, setItems] = useState(context.searchItems.get);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchTerm) => {
    setIsLoading(true);
    const params = {
      q: searchTerm,
    };
    try {
      const response = await searchUserApi.searchUser(params);
      if (response.status === 200) {
        setItems(response.data.items);
        context.searchItems.set(response.data.items);
        Noti("success", "Search data", "Success!");
      }

    } catch (err) {
      Noti("error", "Error", err.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="m-8 max-w-full flex flex-col items-center">
      {isLoading && <Loading />}
      <NavBar />
      <div className="w-1/2">
        <SearchUser onSubmit={handleSearch} />
        {items.length > 0 ? (
          <div className="pt-8">
            <ListResult items={items} />
          </div>
        ) : (
            <Typography.Title className="text-center mt-20">
              No Information
            </Typography.Title>
          )}
      </div>
    </div>
  );
};

export default DashBoard;
