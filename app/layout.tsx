import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hekto Ecommerce App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
