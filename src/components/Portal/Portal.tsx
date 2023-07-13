import {FC, ReactNode} from "react";
import ReactDOM from "react-dom";

interface IProps {
  children: ReactNode;
}

export const Portal: FC<IProps> = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};
