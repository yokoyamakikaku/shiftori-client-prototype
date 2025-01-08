import { PropsWithChildren } from "react";

export default function CalendarRow ({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-7">
      {children}
    </div>
  )
}
