import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Sushi } from '../../sushi'

export interface SushiContext {
  sushi?: typeof Sushi
}

export const Context = createContext<SushiContext>({
  sushi: undefined,
})

declare global {
  interface Window {
    sushisauce: any
  }
}

const SushiProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [sushi, setSushi] = useState<any>()

  // @ts-ignore
  window.sushi = sushi
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const sushiLib = new Sushi(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '32000',
        defaultGasPrice: '32000',
        accounts: [],
        ethereumNodeTimeout: 5,
      })
      setSushi(sushiLib)
      window.sushisauce = sushiLib
    }
  }, [ethereum])

  return <Context.Provider value={{ sushi }}>{children}</Context.Provider>
}

export default SushiProvider
