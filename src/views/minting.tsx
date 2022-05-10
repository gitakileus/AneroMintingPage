import { useRef, useEffect, useState } from 'react'
import MintingLayout from '../layouts/MintingLayout'
import MintingModal from '../components/modal'

import Bigimage from '../resources/background.png'
import Smallimage from '../resources/background_small.png'
import {
  SalePhase,
  useContract,
  useMaxSupply,
  useMintDutchAuction,
  useMintPublic,
  useMintWhitelist,
  useNFTPrice,
  useSalePhase,
  useTotalSupply,
} from '../hook'
import { useEtherBalance, useEthers } from '@usedapp/core'
import { toast } from 'react-toastify'
import { getWhiteListInfo } from '../utils/whitelist'

export default function Minting() {
  let startRef = useRef<HTMLSpanElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const { account, active, library } = useEthers()
  const balance = useEtherBalance(account)
  const totalCount = useMaxSupply()
  const price = useNFTPrice()
  const mintedCount = useTotalSupply()
  const salePhase = useSalePhase()
  console.log('salePhase: ', salePhase)
  const { state: stateForMintNormal, send: mintNormal } = useMintPublic()
  const {
    state: stateForMintWhitelist,
    send: mintWhitelist,
  } = useMintWhitelist()
  const {
    state: stateForAuction,
    send: mintDutchAuction,
  } = useMintDutchAuction()

  useEffect(() => {
    if (stateForMintNormal) {
      stateForMintNormal.status === 'Exception' &&
        toast.error(stateForMintNormal.errorMessage)
      stateForMintNormal.status === 'Success' && toast.success('Mint success!')
    }
    if (stateForMintWhitelist) {
      stateForMintWhitelist.status === 'Exception' &&
        toast.error(stateForMintWhitelist.errorMessage)
      stateForMintWhitelist.status === 'Success' &&
        toast.success('Mint success!')
    }
    if (stateForAuction) {
      stateForAuction.status === 'Exception' &&
        toast.error(stateForAuction.errorMessage)
      stateForAuction.status === 'Success' && toast.success('Mint success!')
    }
  }, [stateForMintNormal, stateForMintWhitelist, stateForAuction])

  const mintNow = async (count: number) => {
    try {
      if (!active || !account) {
        toast.warning('Please connect your wallet!')
        return
      } else if (balance?.lt(price?.mul(count))) {
        toast.error('Not enough ETH to mint!')
        return
      }

      let result
      if (salePhase === SalePhase.PreSale) {
        const data = await getWhiteListInfo(account)
        console.log('signature: ', data.signature)
        if (!data.success) {
          toast.warning('You are not Whitelist member.')
          return
        }
        result = await mintWhitelist(count, data.signature, {
          value: price.mul(count),
        })
      } else if (salePhase == SalePhase.AuctionSale) {
        result = await mintDutchAuction(count, {
          value: price.mul(count),
        })
      } else if (salePhase == SalePhase.PublicSale) {
        result = await mintNormal(count, {
          value: price.mul(count),
        })
      } else {
        toast.warning('Sale is not started yet.')
        return
      }
    } catch (err:any) {
      const errStr = JSON.stringify(err)
      toast.warning(err)
      console.log('mintErr: ', errStr)
    }
  }

  const openModal = () => {
    setIsOpen(true)
    startRef.current?.classList.remove('animate-ping')
  }

  return (
    <MintingLayout>
      <img
        src={Bigimage}
        alt="Background"
        className="h-screen w-screen absolute right-0 -z-50 hidden md:block"
      />
      <img
        src={Smallimage}
        alt="Background"
        className="h-screen w-screen -z-50 block md:hidden"
      />

      <button
        type="button"
        onClick={() => {
          openModal()
        }}
        className="group transition ease-in-out modal_btn absolute top-[calc(100vh/2.31)] w-[calc(100vw/2.22)] h-[calc(100vh/20.6)] right-0 md:right-[calc(100vw/5)] md:top-[calc(100vh/2.13)] md:w-[calc(100vw/9.2)] md:h-[calc(100vh/21.6)] border-4 md:border-[6px] border-[#5765F1] hover:border-[#3e49c5d0] duration-200"
      >
        <p className="group transition delay-150 ease-in-out scale-x-[2] md:scale-x-[1.7] text-[calc(100vw/20)] leading-[calc(100vh/42.2)] md:text-[calc(100vw/78)] md:tracking-[calc(100vw/500)] italic font-[900] font-['Sequel 100 Black'] text-white group-hover:text-[22px] group-hover:leading-[calc(100vh/41)] duration-200">
          START
          <span
            className="absolute text-[#e9e9e9] left-1/4 animate-ping group-hover:animate-none group-hover:invisible group-active:invisible"
            ref={startRef}
          >
            START
          </span>
        </p>
      </button>

      <MintingModal
        isOpen={isOpen}
        onMint={mintNow}
        price={price}
        totalCount={totalCount}
        mintedCount={mintedCount}
        changeOpen={(val: boolean) => {
          setIsOpen(val)
          startRef.current?.classList.add('animate-ping')
        }}
      />
    </MintingLayout>
  )
}
