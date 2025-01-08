import { ButtonBaseProps } from "./types";
import { button } from "./variants";

type ButtonProps = ButtonBaseProps;

export default function Button ({
  disabled = false,
  size = "medium",
  children
}: ButtonProps) {
  return (
    <button disabled={disabled} className={button({size, disabled })}>
      {children}
    </button>
  )
}
