'use client'

import { Listing, Reservation } from "@prisma/client"
import { SafeUser } from "../../types/safeUser"
import { useRouter } from "next/navigation"
import useCountries from "../../hooks/useCountries"
import { useCallback, useMemo } from "react"
import { format } from "date-fns"
import Image from "next/image"
import HeartButton from "../buttons/HeartButton"

interface ListingCardProps {
  listing: Listing
  reservation?: Reservation
  onAction?: (id: string) => void
  disabled?: boolean
  actionLabel?: string
  actionId?: string
  currentUser?: SafeUser
}

const ListingCard: React.FC<ListingCardProps> = ({
  listing,
  actionId = "",
  actionLabel,
  currentUser,
  disabled,
  onAction,
  reservation
}) => {

  const router = useRouter()
  const { getByValue } = useCountries()

  const location = getByValue(listing.locationValue)

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()

      if (disabled) {
        return
      }

      onAction?.(actionId)
    }, [onAction, actionId, disabled]
  )

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice
    }

    return listing.price
  }, [reservation, listing.price])

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null
    }

    const start = new Date(reservation.startDate)
    const end = new Date(reservation.endDate)

    return `${format(start, 'PP')} - ${format(end, 'PP')}`
  }, [reservation])

  return (
    <div
      onClick={() => router.push(`/listings/${listing.id}`)}
      className="
        col-span-1 cursor-pointer group
      "
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square
            w-full
            relative
            overflow-hidden
            rounded-xl
          ">
          <Image
            fill
            alt="Listing"
            src={listing.imageSrc}
            className="
              object-cover
              h-full
              w-full
              group-hover:scale-110
              transition
            "
          />
          <div className="absolute top-3 right-3">
            <HeartButton
              currentUser={currentUser}
              listingId={listing.id}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingCard