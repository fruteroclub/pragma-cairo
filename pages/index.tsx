import Image from 'next/image'
import { Inter } from 'next/font/google'
import { WidoWidget } from 'wido-widget'
import { useEffect, useState } from 'react'
import { getSupportedTokens } from 'wido'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [fromTokens, setFromTokens] = useState<{ chainId: number; address: string }[]>([])
  const [toTokens, setToTokens] = useState<{ chainId: number; address: string }[]>([])

  useEffect(() => {
      getSupportedTokens({ chainId: [1] }).then(setFromTokens)
      getSupportedTokens({ chainId: [15366], protocol: ['jediswap.xyz'] }).then(setToTokens)
  }, [setFromTokens, setToTokens])
  return (
    
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <WidoWidget
           // onConnectWalletClick={handleConnectWalletClick}
       
    />

    </main>
  )
}
