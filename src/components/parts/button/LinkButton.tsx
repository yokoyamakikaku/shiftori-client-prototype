import { Link } from "react-router-dom";
import { ButtonBaseProps } from "./types";
import { button } from "./variants";

interface LinkButtonProps extends ButtonBaseProps {
  to: string
}

export default function LinkButton ({
  children,
  to,
  ...props
}: LinkButtonProps) {
  if (props.disabled) {
    return (
      <div className={button(props)}>
        {children}
      </div>
    )
  }

  return (
    <Link to={to} className={button(props)}>
      {children}
    </Link>
  )
}
