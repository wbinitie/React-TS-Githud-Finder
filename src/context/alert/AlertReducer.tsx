// import { AlertContextType } from "../../models/models";

interface CountAction {
  type: string;
  payload?: { msg: string; type: string };
}

const alertReducer = (state: any, action: CountAction) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload;
    case "REMOVE_ALERT":
      return null;
    default:
      return state;
  }
};

export default alertReducer;
