import { useEffect, useState } from 'react'
import MintingLayout from '../layouts/MintingLayout'
import MintingModal from '../components/modal'

import Bigimage from '../resources/background.png'
import Smallimage from '../resources/background_small.png'

import { Transition } from '@headlessui/react'

export default function Minting() {
  let [isOpen, setIsOpen] = useState(false)
  // start button position
  let [leftDis, setLeftDis] = useState(385)
  let [topDis, setTopDis] = useState(505)

  useEffect(() => {
    setLeftDis((385 / 1920) * window.innerWidth)
    setTopDis((505 / 1920) * window.innerHeight)
  })

  function openModal() {
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
          hover:opacity-90 top-[135px] w-[250px] h-[60.5px] text-[20px] py-[16px] right-1/2 translate-x-1/2 md:translate-x-0 md:w-[275px] md:top-10 md:right-11 md:px-6 md:py-4 font-mono text-lg text-white leading-5 rounded-md"
      >
        CONNECT YOUR WALLET
      </button>
      <button
        type="button"
        onClick={() => {
          openModal()
        }}
        className="transition duration-150 ease-in-out modal_btn absolute top-[427px] h-[39px] md:top-[605px] right-[0px]  md:right-[calc(100vw/5)] w-[170px] md:w-[96px] lg:w-[116px] lg:top-[355px] llg:top-[294px] llg:border-4 llg:w-[148px] llg:h-[28px] xl:w-[155px] xl:top-[418px]  xxl:w-[206px] xxl:top-[505px]  xl:h-[50px] italic font-[400] font-['Sequel 100 Black'] md:text-white border-4 md:border-8 border-[#5765F1] hover:border-[#3e49c5d0]"
      >
        <p className="transition duration-150 ease-in-out md:scale-x-[1.7] text-[22px] llg:text-[16px] llg:leading-[16px] xl:text-[20px] italic font-[400] font-['Sequel 100 Black'] text-white ">
          START
        </p>
      </button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300 delay-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <MintingModal closeModal={() => setIsOpen(false)} />
      </Transition>
    </MintingLayout>
  )
}
