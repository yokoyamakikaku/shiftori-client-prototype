import { PropsWithChildren } from "react";

export interface ButtonBaseProps extends PropsWithChildren {
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}
