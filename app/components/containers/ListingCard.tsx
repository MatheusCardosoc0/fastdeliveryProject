import { Listing } from "@prisma/client"

interface ListingCardProps {
  listing: Listing
}

const ListingCard: React.FC<ListingCardProps> = ({
  listing
}) => {
  return (
    <div>
      {listing.title}
    </div>
  )
}

export default ListingCard