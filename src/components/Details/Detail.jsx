import React, { useContext, useEffect, useState } from "react";
import Info from "./Info";
import UserInfo from "./UserInfo";
import UserRepos from "./UserRepos";
import { GithubContext } from "../../context/context";
import searchUserApi from "../../api/searchUserApi";
import Loading from "../Loading";
import Noti from "../Noti";
const Detail = (props) => {
  const context = useContext(GithubContext);
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [reposPub, setReposPub] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [gists, setGists] = useState(0);
  const user = context.user.get;
  useEffect(() => {
    const getRepos = async () => {
      setIsLoading(true);
      try {
        const params = {
          per_page: 100,
        };
        const reposRes = await searchUserApi.getRepos(user.login, params);
        setRepos(reposRes.data);
        setReposPub(user.public_repos);
        setFollowers(user.followers);
        setFollowing(user.following);
        setGists(user.public_gists);
      } catch (err) {
        Noti("error", "Error", err.response.data.message);
      }
      setIsLoading(false);
    };

    getRepos();

  }, [user]);
  return (
    <div className="bg-gray-100 flex flex-col items-center w-full">
      {isLoading && <Loading />}
      <UserInfo user={user} />
      <Info
        reposPub={reposPub}
        followers={followers}
        following={following}
        gists={gists}
      />
      <UserRepos repos={repos} user={user} />
    </div>
  );
};

export default Detail;
