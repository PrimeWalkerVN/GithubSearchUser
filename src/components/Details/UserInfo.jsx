import { Avatar } from "antd";
import React from "react";

const UserInfo = (props) => {
  const { user } = props;
  return (
    <div className="w-full flex justify-center items-center my-8">
      <Avatar size={64} src={user.avatar_url} />
      <span className="text-bold text-xl ml-8">{user.login}</span>
    </div>
  );
};

export default UserInfo;
