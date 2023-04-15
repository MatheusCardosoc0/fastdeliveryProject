'use client'

import { User } from "@prisma/client"
import { SafeUser } from "../../types/safeUser"

interface HeartButtonProps{
  listingId: string
  currentUser: SafeUser | undefined
}

const HeartButton: React.FC<HeartButtonProps> = ({
  currentUser,
  listingId
}) => {

  const hasVavorite = false
  const toggleFavorite = () => {}

  return (
    <div>HeartButton</div>
  )
}

export default HeartButton