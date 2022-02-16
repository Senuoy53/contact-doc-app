import ErrorCompWrapper from "./ErrorCompWrapper";

const ErrorComp = ({ children }: ErrorCompProps) => {
  return <ErrorCompWrapper>{children}</ErrorCompWrapper>;
};

export default ErrorComp;
