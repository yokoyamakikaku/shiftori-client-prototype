import { ReactNode } from "react"

export default function FeatureDescription ({
  title,
  body
}:{
  title: ReactNode
  body: ReactNode
}) {
  return (
    <section className="py-8">
      <h1 className="text-2xl mb-8">{title}</h1>
      <div>{body}</div>
    </section>
  )
}
