import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import image from '../../resources/art.png'

export default function MintingModal({ closeModal }: { closeModal: any }) {
  const [amount, setAmount] = useState(1)

  const increaseAmount = () => {
    setAmount(amount + 1)
  }

  const decreaseAmount = () => {
    setAmount(amount - 1 < 0 ? 0 : amount - 1)
  }

  return (
    <Dialog
      as="div"
      className="relative z-10"
      open
      onClose={() => {
        closeModal()
      }}
    >
      <div className="fixed inset-0 bg-black bg-opacity-60" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center md:p-4 text-center">
          <Dialog.Panel className="absolute top-0 md:relative w-full md:max-w-[893px] transform overflow-hidden md:rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <div className="m-2">
              <div className="md:columns-2">
                <div>
                  <img
                    src={image}
                    alt="art"
                    className="md:w-[406px] md:h-[405px]"
                  ></img>
                </div>
                <form className="md:w-[375px] text-center">
                  <p className="mt-[33px] md:mt-[8px] scale-x-[1.7] text-[38px] leading-[45px] italic font-[800] font-['Sequel 100 Black']">
                    1/7777
                  </p>
                  <p className="text-[28px] leading-[36px] font-['Abel']">
                    RIDERS
                  </p>
                  <p className="mt-[16px] text-[28px] leading-[36px] font-['Abel']">
                    1 Rider = .3ETH
                  </p>
                  <p className="mt-[47px]  text-[32px] leading-[40px] font-['Abel']">
                    How many?
                  </p>
                  <div className="mt-[15px] flex justify-center">
                    <div>
                      <input
                        className="h-[63.5px] w-[105px] border-black border focus:outline-none text-[38px] leading-[48px] font-['Abel'] text-center"
                        id="amount"
                        type="text"
                        pattern="[0-9]*"
                        name="amount"
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
                        className="cursor-pointer"
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
                        className="rotate-180 cursor-pointer"
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
                    className="transition delay-100 duration-150 ease-in-out mt-[18px] w-full h-[80px] bg-[#5765F1] text-white rounded-2xl text-[38px] leading-[48px] font-bold font-['Abel'] -bottom-[10px] appearance-none hover:bg-[#6c78ff] cursor-pointer"
                    value="MINT"
                  />
                </form>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}
