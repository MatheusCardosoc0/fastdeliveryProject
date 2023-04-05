import Layout from './templates/Layout'
import './styles/globals.css'
import { Oswald } from 'next/font/google'
import getCurrentUser from './actions/getCurrentUser'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={font.className}>
        <Layout  currentUser={currentUser}>
          {children}
        </Layout>
      </body>
    </html>
  )
}
