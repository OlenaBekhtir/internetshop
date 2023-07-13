import { FC } from "react";

import "./Button.scss";

interface IProps {
  btnFunction?: () => void;
  btnText?: string;
  btnClasses?: string;
  btnCross?: boolean;
  [restProps: string]: any;
}

export const Button: FC<IProps> = ({
  btnClasses,
  btnText,
  btnFunction,
  btnCross,
  ...restProps
}) => {
  return (
    <button className={btnClasses} onClick={btnFunction} {...restProps}>
      {btnText && <span>{btnText}</span>}
      {btnCross && <p>X</p>}
    </button>
  );
};
