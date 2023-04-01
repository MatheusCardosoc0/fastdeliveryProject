import { Footer, Navbar } from '@/templates/Layout'
import '../styles/globals.css'
import { Oswald } from 'next/font/google'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
