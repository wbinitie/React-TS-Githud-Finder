import { useReducer, createContext } from "react";
import alertReducer from "./AlertReducer";
import { AlertContextType } from "../../models/models";

const AlertContext = createContext<AlertContextType | null>(null);

interface AlertContextInterface {
  children: React.ReactNode;
}

export const AlertProvider: React.FC<AlertContextInterface> = ({
  children,
}) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });
    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
export default AlertContext;
