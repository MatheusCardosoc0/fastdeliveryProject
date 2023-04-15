'use client'

import { ReactNode, useEffect, useState } from "react"

interface ClientOnlyProps {
  children: ReactNode
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
  children
}) => {

  const [hasMounted, setHasMouunted] = useState(false)

  useEffect(() => {
    setHasMouunted(true)
  }, [])

  if (!hasMounted) return null

  return (
    <>
      {children}
    </>
  )
}

export default ClientOnly