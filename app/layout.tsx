"use client"
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../theme/Theme"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>

        {children}
        </ChakraProvider>
        </body>
    </html>
  )
}
