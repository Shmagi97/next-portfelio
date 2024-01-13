

import style from './layout.module.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/footerAndHeader/footer/footer'
import Background from './components/background/background'
import { GlobalContextProvider } from './context/context'
import Header from './components/footerAndHeader/header/header'
import SearchComponent from './components/serach/search'
import GlobalDinamikChaild from './components/globalDinamikChild/globalDinamikChild'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
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

      <main className={style.layoutMain}>
 
      <GlobalContextProvider>
          {/* 1. GlobalDinamikChaild- ში ივენთზე დინამიურად იცვლება შვილი კომპპონენტები */}
           <GlobalDinamikChaild/>

           <Background/>

           <Header/>

                {children}
 
           <Footer/>

      </GlobalContextProvider>

       </main>
      </body>
    </html>
 
  )
}
