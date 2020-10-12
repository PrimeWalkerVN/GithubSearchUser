import { notification } from "antd";
const Noti = (type, title, desc) => {
  notification[type]({
    message: title,
    description: desc,
  });
};

export default Noti;
