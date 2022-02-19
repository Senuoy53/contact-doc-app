import { ButtonWrapper } from "./ButtonWrapper";

const Button = ({ type, value, className, name, id, onClick }: ButtonProps) => {
  return (
    <ButtonWrapper
      type={type}
      value={value}
      className={className}
      name={name}
      id={id}
      onClick={onClick}
    />
  );
};

export default Button;
