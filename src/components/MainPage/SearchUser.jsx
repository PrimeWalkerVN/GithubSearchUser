import React from "react";
import PropTypes from "prop-types";
import Search from "antd/lib/input/Search";

const SearchUser = (props) => {
  const { onSubmit } = props;
  const handleSubmit = (value) => {
    if (value !== "") {
      onSubmit(value);
    }
  };
  return (
    <Search
      placeholder="Search User here"
      enterButton="Search"
      size="large"
      onSearch={(value) => handleSubmit(value)}
    ></Search>
  );
};

SearchUser.propTypes = {
  onSubmit: PropTypes.func,
};

SearchUser.defaultProps = {
  onSubmit: null,
};

export default SearchUser;
