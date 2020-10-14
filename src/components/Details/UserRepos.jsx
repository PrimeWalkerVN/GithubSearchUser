import React from "react";

import { List, Card, Modal } from "antd";
import { AiFillStar, AiOutlineIssuesClose } from "react-icons/ai";
import CommitPage from "../Commits/CommitPage";
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

const UserRepos = (props) => {
  const { repos, user } = props;
  const [openModal, setOpenModal] = useState(false);
  const [itemFullName, setItemFullName] = useState("");
  const size = useWindowSize();
  const column = size.width > 1024 ? 3 : 1;

  const openCommitPage = (item) => {
    setOpenModal(true);
    setItemFullName(item.full_name);
  }
  return (
    <div className="w-4/6 my-8">
      <span className="font-bold text-3xl inline-block text-center w-full mb-8">
        {`${user.login}'s depositories`}
      </span>
      <List
        grid={{ gutter: 12, column: column }}
        dataSource={repos}
        pagination={{ defaultPageSize: 6 }}
        renderItem={(item) => (
          <List.Item onClick={() => openCommitPage(item)}>
            <Card
              title={item.name}
              headStyle={{ fontSize: "1.5rem" }}
              className="h-48"
              hoverable
              style={{ textAlign: "center" }}
            >
              <div className="flex flex-col h-full w-full justify-between items-center px-8 ">
                <div className="w-full truncate">{item.description}</div>
                <div className="flex flex-row items-center">
                  <AiFillStar className="text-yellow-500" />
                  <span className="font-bold mx-2">Star: </span>
                  {item.stargazers_count}
                </div>
                <div className="flex flex-row items-center">
                  <AiOutlineIssuesClose className="text-red-500" />
                  <span className="font-bold mx-2">Issues: </span>
                  {item.open_issues_count}
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
      <Modal width={600} destroyOnClose centered closable={false} visible={openModal} onOk={() => setOpenModal(false)} cancelButtonProps={{ disabled: true }}>
        <CommitPage itemFullName={itemFullName} />
      </Modal>
    </div>
  );
};

export default UserRepos;
