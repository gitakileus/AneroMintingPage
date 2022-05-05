import { Transition } from '@headlessui/react'
import React, { useState } from 'react'
import image from '../../resources/art.png'

export default function MintingModal({
  isOpen,
  changeOpen,
}: {
  isOpen: boolean
  changeOpen: any
}) {
  const [amount, setAmount] = useState(1)

  const increaseAmount = () => {
    setAmount(amount + 1)
  }

  const decreaseAmount = () => {
    setAmount(amount - 1 < 0 ? 0 : amount - 1)
  }

  const handleKeyEvent = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    event = event || window.event

    console.log(typeof event, event.code)
    if (event.code === 'ArrowUp') {
      setAmount(amount + 1)
    }

    if (event.code === 'ArrowDown') {
      setAmount(amount - 1 < 0 ? 0 : amount - 1)
    }
  }

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let count = parseInt(event.target.value)
    setAmount(count >= 1 ? count : 1)
  }

  return (
    <Transition
      show={isOpen}
      enter="transition-all duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed top-0 left-0 w-screen h-screen">
        <div
          className="fixed w-screen h-screen top-0 left-0"
          onClick={() => changeOpen(false)}
        ></div>
        <div className="absolute top-0 md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 w-full md:max-w-[893px] md:rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
          <div className="md:m-2">
            <div className="md:columns-2" onKeyDown={handleKeyEvent}>
              <div className="flex justify-center">
                <img
                  src={image}
                  alt="art"
                  className="w-[calc(100vw/1.3)] md:w-[406px] md:h-[405px]"
                ></img>
              </div>
              <form className="md:w-[375px] text-center">
                <p className="mt-[calc(100vh/60)] text-[calc(100vh/20)] md:mt-[8px] scale-x-[1.7] md:text-[38px] leading-[45px] italic font-[800] font-['Sequel 100 Black']">
                  1/7777
                </p>
                <p className="text-[28px] leading-[36px] font-['Abel']">
                  RIDERS
                </p>
                <p className="mt-[calc(1vh)] md:mt-[16px] text-[28px] leading-[36px] font-['Abel']">
                  1 Rider = .3ETH
                </p>
                <p className="mt-[calc(1vh)] md:mt-[47px]  text-[32px] leading-[40px] font-['Abel']">
                  How many?
                </p>
                <div className="mt-[calc(100vh/70)] md:mt-[15px] flex justify-center">
                  <div>
                    <input
                      className="h-[calc(100vh/20)] md:h-[63.5px] w-[105px] border-black border focus:outline-none text-[calc(100vh/26)] leading-[calc(100vh/26)] md:text-[38px] md:leading-[48px] font-['Abel'] text-center"
                      id="amount"
                      type="text"
                      name="amount"
                      onChange={inputHandler}
                      value={amount}
                    />
                  </div>
                  <div className="self-center ml-[18px]">
                    <svg
                      version="1.2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 56 39"
                      width="25"
                      height="20"
                      className="cursor-pointer h-[15px] md:h-[20px] transition ease-in-out delay-100 hover:scale-125 duration-200"
                      onClick={() => {
                        increaseAmount()
                      }}
                    >
                      <title>image</title>
                      <defs>
                        <image
                          width="51"
                          height="33"
                          id="img1"
                          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAhCAMAAABDYWOIAAAAAXNSR0IB2cksfwAAADxQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0C8mMAAAABR0Uk5TAECPv69gIP/fMO9/EM9wn5AfoIB+vb7kAAAAs0lEQVR4nJXUyQ7DIAxFUVNKoJQMLf//r82gIggGP+4uIkchXpiITT20fpqJP2SbtD1zBiYvb/+9xwmKCoKhG0FQRWSUEQeijJgwQygnRBAqCYTuBEA1ERFHBMSTLmqRDmqTJuqRBuoTFkmEQZOTSIGW4xkgBdoXi0JIjlaiDSIZ8kQaIxn6JOPkkvna0QIto0Tv16wXTb/jxwc/pM+BxBEyh2uKxsnvXvkY0uxVXIE2c4kfIkMbaKPyaRUAAAAASUVORK5CYII="
                        />
                      </defs>
                      <style></style>
                      <use id="Background" href="#img1" x="3" y="2" />
                    </svg>

                    <svg
                      version="1.2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 56 39"
                      width="25"
                      height="20"
                      onClick={() => {
                        decreaseAmount()
                      }}
                      className="rotate-180 cursor-pointer h-[15px] md:h-[20px] transition ease-in-out delay-100 hover:scale-125 duration-200"
                    >
                      <title>image</title>
                      <defs>
                        <image
                          width="51"
                          height="33"
                          id="img1"
                          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAhCAMAAABDYWOIAAAAAXNSR0IB2cksfwAAADxQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0C8mMAAAABR0Uk5TAECPv69gIP/fMO9/EM9wn5AfoIB+vb7kAAAAs0lEQVR4nJXUyQ7DIAxFUVNKoJQMLf//r82gIggGP+4uIkchXpiITT20fpqJP2SbtD1zBiYvb/+9xwmKCoKhG0FQRWSUEQeijJgwQygnRBAqCYTuBEA1ERFHBMSTLmqRDmqTJuqRBuoTFkmEQZOTSIGW4xkgBdoXi0JIjlaiDSIZ8kQaIxn6JOPkkvna0QIto0Tv16wXTb/jxwc/pM+BxBEyh2uKxsnvXvkY0uxVXIE2c4kfIkMbaKPyaRUAAAAASUVORK5CYII="
                        />
                      </defs>
                      <style></style>
                      <use id="Background" href="#img1" x="3" y="2" />
                    </svg>
                  </div>
                </div>
                <input
                  type="submit"
                  className="transition delay-100 duration-150 ease-in-out mt-[calc(100vh/60)] md:mt-[18px] w-[calc(100vw/1.2)] h-[calc(100vh/14)] md:w-full md:h-[80px] bg-[#5765F1] text-white rounded-2xl text-[calc(100vh/26)] leading-[calc(100vh/26)] md:text-[38px] md:leading-[38px] font-bold font-['Abel'] -bottom-[10px] appearance-none hover:bg-[#6c78ff] cursor-pointer"
                  value="MINT"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}
