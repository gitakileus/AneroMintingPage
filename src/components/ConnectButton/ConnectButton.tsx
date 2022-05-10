import React from 'react'
import { useEtherBalance, useEthers } from '@usedapp/core'
import { BigNumber, ethers } from 'ethers'
import { displayAddress } from '../../utils/helpers'
import useOnboard from '../../hook/useOnboard'

const ConnectButton = () => {
  const { account, deactivate, activate, activateBrowserWallet } = useEthers()

  const onboardSubscriber = {
    wallet: async (wallet: any) => {
      console.log('wallet: ', wallet)
      await onboard.walletCheck()
      if (wallet && wallet.provider) {
        await activate(wallet.provider)
      }
    },
  }

  const etherBalance = useEtherBalance(account)
  console.log(
    'ethBalance: ',
    ethers.utils.formatEther(etherBalance || BigNumber.from(0)),
  )
  const onboard = useOnboard(onboardSubscriber)

  const connectWallet = async () => {
    await onboard.walletSelect()
  }

  return (
    <>
      {!account && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            connectWallet()
          }}
          type="button"
          className="flex items-center transition ease-in-out duration-300 bg-[#5765F1] hover:-translate-y-1  hover:bg-indigo-500
          hover:opacity-90 px-6 h-[40px] md:h-[35px] text-sm md:translate-x-0 font-mono text-white leading-[31px] rounded-md justify-center cursor-pointer"
        >
          CONNECT YOUR WALLET
        </button>
      )}

      {account && (
        <div
          onClick={(e) => {
            e.stopPropagation()
            deactivate()
          }}
          className="flex items-center transition ease-in-out duration-300 bg-[#5765F1] hover:-translate-y-1  hover:bg-indigo-500
          hover:opacity-90 px-6 h-[40px] md:h-[35px] text-sm md:translate-x-0 font-mono text-white leading-[31px] rounded-md justify-center cursor-pointer"
        >
          <img src={'/img/eth.png'} className="h-[28px] w-[28px]" alt="eth" />
          <div className="ml-3">
            {etherBalance && (
              <div className="balance leading-[15px]">
                {parseFloat(ethers.utils.formatEther(etherBalance)).toFixed(2)}
                ETH
              </div>
            )}
            <div className="account leading-[15px]">{displayAddress(account)}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default ConnectButton
