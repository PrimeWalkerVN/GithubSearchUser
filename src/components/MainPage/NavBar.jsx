import { Avatar, Menu } from "antd";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import Noti from "../Noti";
import Loading from "../Loading";
const NavBar = () => {
  const [current, setCurrent] = useState("1");
  const { logout, user, isAuthenticated, isLoading, error } = useAuth0();
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  if (error) Noti("error", "Error", error.message);
  return (
    <div className="flex flex-col items-center mb-8 w-full justify-center">
      {isLoading && <Loading />}
      {isAuthenticated &&
        <div className="flex justify-end w-full items-center">
          <Avatar src={user.picture} alt={user.name}></Avatar>
          <span className="sm:text-sm lg:text-xl font-bold pl-2">{user.name}</span>
          <button className="bg-green-600 rounded hover:bg-blue-600 p-2 mx-4 text-white" onClick={() => logout({ returnTo: window.location.origin })}>
            Log out
        </button>
        </div>
      }
      <Menu
        mode="horizontal"
        theme="light"
        onClick={handleClick}
        selectedKeys={[current]}
        className="sm:hidden"
      >
        <Menu.Item key="1" className="lg:text-lg sm:text-sm">
          Search by User
        </Menu.Item>
        <Menu.Item disabled key="2" className="lg:text-lg sm:text-sm">
          Search by Repo
        </Menu.Item>
        <Menu.Item disabled key="3" className="lg:text-lg sm:text-sm">
          Contact
        </Menu.Item>
        <Menu.Item disabled key="4" className="lg:text-lg sm:text-sm">
          About
        </Menu.Item>
      </Menu>
      <div className="flex flex-row h-24 items-center mt-4">
        <AiFillGithub className="h-24 w-24 pr-4" />
        <span className="sm:text-xl lg:text-3xl font-bold">Github Search User</span>
      </div>
    </div>
  );
};

export default NavBar;
