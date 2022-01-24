import { ButtonWrapper } from "./ButtonWrapper";

const Button = ({ type, value, className, onClick }: ButtonProps) => {
  return (
    <ButtonWrapper
      type={type}
      value={value}
      className={className}
      onClick={onClick}
    />
  );
};

export default Button;
