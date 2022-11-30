import { FC } from "react";
// extends HTMLProps<HTMLButtonElement>
interface BtnProps {
  className: string;
  color: "blue" | "light";
  click: any;
  content: string;
}

const Button: FC<BtnProps> = ({ content, click, className, color }) => {
  const space = " ";
  return (
    <input
      type="button"
      className={className + space + color}
      value={content}
      onClick={click}
    />
  );
};
export default Button;
