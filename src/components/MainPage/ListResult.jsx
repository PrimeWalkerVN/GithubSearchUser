import { List, Avatar } from "antd";
import React, { useContext } from "react";
import { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import searchUserApi from "../../api/searchUserApi";
import { GithubContext } from "../../context/context";
import useWindowSize from "../../hooks/useWindowSize";
import Loading from "../Loading";
import Noti from "../Noti";
const ListResult = (props) => {
  const { items } = props;
  const history = useHistory();
  const context = useContext(GithubContext);
  const [isLoading, setIsLoading] = useState(false);
  const size = useWindowSize();
  const reposString = size.width > 768 ? "Repositories" : "Repos";
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
            <span className="font-bold sm:text-lg md:text-2xl text-left">Avatar</span>
            <span className="font-bold sm:text-lg md:text-2xl text-center">User name</span>
            <span className="font-bold sm:text-lg md:text-2xl text-right">Options</span>
          </div>
        }
        pagination={{ defaultPageSize: 5 }}
        bordered
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <div className="grid grid-cols-3 gap-4 sm:gap-2 w-full lg:mx-8">
              <Avatar size={64} src={item.avatar_url} />
              <span className="md:truncate sm:break-all sm:text-xs font-bold md:text-lg flex justify-center items-center">
                {item.login}
              </span>
              <div className="flex sm:flex-col justify-end items-center md:flex-row">
                <button
                  onClick={() => clickDetail(item)}
                  className="bg-blue-500 hover:bg-blue-700 font-bold rounded-lg inline-flex items-center md:mr-4 p-2"
                >
                  <span className="text-white font-bold">{reposString}</span>
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
