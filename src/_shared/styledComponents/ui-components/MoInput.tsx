import { Input, InputProps } from "../element";
import { AllProps } from "../types";
import { PropsWithChildren } from "react";

type MoInputProps = InputProps & {};

export const MoInput: React.FC<MoInputProps> = ({ ...props }) => {
  return <Input {...props} />;
};
