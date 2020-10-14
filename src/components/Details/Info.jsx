import React from "react";
import InfoCard from "./InfoCard";
import {
  AiOutlineCodeSandbox,
  AiOutlineUserAdd,
  AiOutlineCode,
} from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
const Info = (props) => {
  const { reposPub, followers, following, gists } = props;
  return (
    <div className="sm:w-full lg:w-4/6 flex lg:flex-row sm:flex-col sm:items-center lg:justify-between">
      <InfoCard
        Icon={<AiOutlineCodeSandbox />}
        Num={reposPub}
        Desc="Repositories"
        Color="red"
      />
      <InfoCard
        Icon={<FiUsers />}
        Num={followers}
        Desc="Followers"
        Color="purple"
      />
      <InfoCard
        Icon={<AiOutlineUserAdd />}
        Num={following}
        Desc="Following"
        Color="green"
      />
      <InfoCard
        Icon={<AiOutlineCode />}
        Num={gists}
        Desc="Gists"
        Color="yellow"
      />
    </div>
  );
};

export default Info;
