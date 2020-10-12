import React, { useState } from "react";
import mockUser from "./MockUser";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const defaultUser = JSON.parse(localStorage.getItem("user"));
  const defaultSearchItems = JSON.parse(localStorage.getItem("searchItems"));
  const [user, setUser] = useState(defaultUser ? defaultUser : mockUser);
  const [searchItems, setSearchItems] = useState(defaultSearchItems ? defaultSearchItems : []);

  const setUserStore = (item) => {
    setUser(item);
    localStorage.setItem("user", JSON.stringify(item));
  }
  const setSearchItemsStore = (items) => {
    setSearchItems(items);
    localStorage.setItem("searchItems", JSON.stringify(items));
  }
  const store = {
    user: { get: user, set: setUserStore },
    searchItems: { get: searchItems, set: setSearchItemsStore }
  }

  return (
    <GithubContext.Provider
      value={store}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
