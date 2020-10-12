import { Avatar, List } from 'antd';
import React from 'react';
import { AiOutlineGithub } from "react-icons/ai";
const ListCommit = (props) => {
    const { items } = props;
    return (
        <div>
            <List
                header={
                    <div className="w-full text-center">
                        <span className="text-2xl font-bold">Top 10 commits</span>
                    </div>
                }
                bordered
                pagination={{ defaultPageSize: 5 }}
                dataSource={items}
                renderItem={(item) => (
                    <List.Item>
                        <div className="flex flex-row items-center w-full">
                            <div style={{ flex: 0.8 }} className="flex flex-col justify-self-start truncate">
                                <div className="flex flex-row justify-start">
                                    <Avatar size={32} src={item.author ? item.author.avatar_url : ""} />
                                    <span className="ml-2 font-bold">{item.commit.author.name}</span>
                                </div>
                                <span className="justify-self-center font-bold text-lg truncate">{item.commit.message}</span>
                            </div>
                            <div style={{ flex: 0.2 }} className="flex flex-row justify-end items-center">
                                <button className="bg-black hover:bg-gray-700 font-bold rounded-full inline-flex items-center ">
                                    <a href={item.html_url} target="blank" className="text-white font-bold w-6 h-6">
                                        <AiOutlineGithub className="w-full h-full" />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </List.Item>
                )}
            >
            </List>
        </div>
    );
};

export default ListCommit;