import { PropsWithChildren, ReactNode } from "react"

export default function FormSection ({
  title,
  children
}: {
  title: ReactNode
} & PropsWithChildren) {
  return (
    <div className="px-2 mb-8">
      <div className="text-2xl font-bold mb-4">{title}</div>
      <div className="bg-white rounded-xl overflow-hidden">
        {children}
      </div>
    </div>
  )
}
