import { List, Avatar } from "antd";
import React, { useContext } from "react";
import { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import searchUserApi from "../../api/searchUserApi";
import { GithubContext } from "../../context/context";
import Loading from "../Loading";
import Noti from "../Noti";
const ListResult = (props) => {
  const { items } = props;
  const history = useHistory();
  const context = useContext(GithubContext);
  const [isLoading, setIsLoading] = useState(false);
  const clickDetail = async (item) => {
    try {
      setIsLoading(true);
      const userRes = await searchUserApi.getUser(item.login);
      context.user.set(userRes.data);
      setIsLoading(false);
      history.push("/detail");
    } catch (err) {
      Noti("error", "Error", err.message);
    }

  };
  return (
    <div>
      {isLoading && <Loading />}
      <List
        header={
          <div className="grid grid-cols-3 gap-4 mx-8">
            <span className="font-bold text-2xl text-left">Avatar</span>
            <span className="font-bold text-2xl text-center">User name</span>
            <span className="font-bold text-2xl text-right">Options</span>
          </div>
        }
        pagination
        bordered
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <div className="grid grid-cols-3 gap-4 w-full mx-8">
              <Avatar size={64} src={item.avatar_url} />
              <span className="truncate font-bold text-lg flex justify-center items-center">
                {item.login}
              </span>
              <div className="flex justify-end items-center">
                <button
                  onClick={() => clickDetail(item)}
                  className="bg-blue-500 hover:bg-blue-700 font-bold rounded-lg inline-flex items-center mr-4 p-2"
                >
                  <span className="text-white font-bold ">Repositories</span>
                </button>
                <button className="bg-black hover:bg-gray-700 font-bold rounded-full inline-flex items-center ">
                  <a
                    className="text-white font-bold w-8 h-8"
                    href={item.html_url}
                    target="blank"
                  >
                    <AiOutlineGithub className="w-full h-full" />
                  </a>
                </button>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListResult;
