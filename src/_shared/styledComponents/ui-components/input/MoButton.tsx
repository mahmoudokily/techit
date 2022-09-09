import { PropsWithChildren } from "react";
import { Button } from "../../BaseUi";
import { AllProps } from "../../types";

export const MoButton: React.FC<PropsWithChildren<AllProps>> = ({
  children,
  ...props
}) => {
  return <Button {...props}>{children}</Button>;
};
