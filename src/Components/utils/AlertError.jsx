import { Alert, Space } from "antd";
import { actions } from "./global.context";

export const initialStateVisible = {
  nameFirstVal: false,
  nameSecordVal: false,
  emailFirstVal: false,
  emailSecondVald: false,
};

export const actionsVisible = {
  setInitialState: "initialStateVisible",
  setNameFirstVal: "setNameFirstVal",
  setNameSecordVal: "setNameSecordVal",
  setEmailFirstVal: "setEmailFirstVal",
  setEmailSecondVald: "setEmailSecondVald",
};

export const validationReducer = (state, action) => {
  switch (action.type) {
    case actionsVisible.setInitialState: {
      return initialStateVisible;
    }
    case actionsVisible.setNameFirstVal: {
      return { ...state, nameFirstVal: action.payload };
    }
    case actionsVisible.setNameSecordVal: {
      return { ...state, nameSecordVal: action.payload };
    }
    case actionsVisible.setEmailFirstVal: {
      return { ...state, emailFirstVal: action.payload };
    }
    case actionsVisible.setEmailSecondVald: {
      return { ...state, emailSecondVald: action.payload };
    }
  }
};

export const AlertError = ({ message, actionName, setVisible }) => {
  const handleClose = () => {
    setVisible({ type: actionName, payload: false });
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Alert message={message} type="error" closable afterClose={handleClose} />
    </Space>
  );
};

export default AlertError;
