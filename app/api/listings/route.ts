import { NextResponse } from 'next/server'
import getCurrentUser from '../../actions/getCurrentUser'

import prisma from '../../libs/prismadb'

export async function POST(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const body = await request.json()

  const {
    ImageSrc,
    category,
    description,
    guestCount,
    location,
    price,
    roomCount,
    title,
    bathroomCount
  } = body

  const listing = await prisma.listing.create({
    data: {
      bathroomCount,
      category,
      imageSrc: ImageSrc,
      description,
      guestCount,
      locationValue: location.value,
      price: parseInt(price, 10),
      roomCount,
      title,
      userId: currentUser.id
    }
  })

  return NextResponse.json(listing)
}
