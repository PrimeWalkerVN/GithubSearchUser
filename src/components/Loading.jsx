import React from "react";

import { Spin, Modal } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

const Loading = (props) => {
  return (
    <Modal
      centered
      confirmLoading
      visible
      width={200}
      closable={false}
      footer={null}
      bodyStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      wrapClassName="modal-loading"
    >
      <Spin indicator={antIcon} />
    </Modal>
  );
};

Loading.propTypes = {};

export default Loading;
