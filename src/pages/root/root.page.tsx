import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export const RootPage = ({ children }: Props) => {
  return (
    <>{children}</>
  )
}
