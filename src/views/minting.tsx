import { Fragment, useState } from 'react'
import MintingLayout from '../layouts/MintingLayout'
import MintingModal from '../components/modal'

import Bigimage from '../resources/background.png'
import Smallimage from '../resources/background_small.png'

export default function Minting() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
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
        className="absolute transition ease-in-out delay-150 bg-[#5765F1] hover:-translate-y-1  hover:bg-indigo-500 duration-300
          hover:opacity-90 top-[calc(100vh/7.8)] w-[250px] h-[60.5px] text-[20px] py-[16px] right-1/2 translate-x-1/2 md:translate-x-0 md:w-[275px] md:top-10 md:right-11 md:px-6 md:py-4 font-mono text-lg text-white leading-5 rounded-md"
      >
        CONNECT YOUR WALLET
      </button>
      <button
        type="button"
        onClick={() => {
          openModal()
        }}
        className="transition ease-in-out modal_btn absolute top-[calc(100vh/2.31)] w-[calc(100vw/2.22)] h-[calc(100vh/20.6)] right-0 md:right-[calc(100vw/5)] md:top-[calc(100vh/2.13)] md:w-[calc(100vw/9.2)] md:h-[calc(100vh/21.6)] border-4 md:border-[6px] border-[#5765F1] hover:border-[#3e49c5d0] duration-200"
      >
        <p className="transition delay-150 ease-in-out scale-x-[2] md:scale-x-[1.7] text-[calc(100vw/20)] leading-[calc(100vh/42.2)] md:text-[calc(100vw/78)] md:tracking-[calc(100vw/500)] italic font-[900] font-['Sequel 100 Black'] text-white hover:text-[22px] hover:leading-[calc(100vh/41)] duration-200">
          START
        </p>
      </button>

      <MintingModal
        isOpen={isOpen}
        changeOpen={(val: boolean) => setIsOpen(val)}
      />
    </MintingLayout>
  )
}
