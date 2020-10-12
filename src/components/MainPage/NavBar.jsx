import { Menu } from "antd";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
const NavBar = () => {
  const [current, setCurrent] = useState("1");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="flex flex-col items-center mb-8 w-full justify-center">
      <Menu
        mode="horizontal"
        theme="light"
        onClick={handleClick}
        selectedKeys={[current]}
      >
        <Menu.Item key="1" className="text-lg">
          Search by User
        </Menu.Item>
        <Menu.Item disabled key="2" className="text-lg">
          Search by Repo
        </Menu.Item>
        <Menu.Item disabled key="3" className="text-lg">
          Contact
        </Menu.Item>
        <Menu.Item disabled key="4" className="text-lg">
          About
        </Menu.Item>
      </Menu>
      <div className="flex flex-row h-24 items-center mt-4">
        <AiFillGithub className="h-24 w-24 pr-4" />
        <span className="text-3xl font-bold">Github Search User</span>
      </div>
    </div>
  );
};

export default NavBar;
