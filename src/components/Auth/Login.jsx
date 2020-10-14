import React from "react";
import Title from "antd/lib/typography/Title";
import { AiFillGithub } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";

const Login = (props) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="sm:w-full lg:w-1/2 xl:w-1/5 box-border shadow-2xl flex flex-col justify-center items-center py-32">
        <AiFillGithub size={90} />
        <Title>Welcome</Title>
        <span className="text-xl">Github search user</span>
        <button onClick={() => loginWithRedirect()} className="text-xl bg-black hover:bg-white hover:text-black text-white cursor-pointer transition duration-500 p-3 mt-8">LOGIN / REGISTER</button>
      </div>
    </div>

  );
};

export default Login;
