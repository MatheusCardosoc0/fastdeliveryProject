import getListings from "./actions/getListings";
import EmptyState from "./components/EmptyState";
import ClientOnly from "./components/containers/ClientOnly";
import Container from "./components/containers/Container";
import ListingCard from "./components/containers/ListingCard";

export default async function Home() {

  const listings = await getListings()

  if(listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }


  return (
    <ClientOnly>
      <Container>
        <div
          className="
            pt-40
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-8
          ">
          <div>
            {listings.map(listing => (
              <ListingCard 
                listing={listing}
              />
            ))}
          </div>
        </div>
      </Container>
    </ClientOnly>
  )
}
