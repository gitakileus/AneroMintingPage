import { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar'
import SideBar from '../SideBar'
import ConnectButton from '../ConnectButton/ConnectButton'
import './style.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <div className="fixed top-0 left-0 w-screen text-white z-10">
        <nav
          className={`absolute w-screen md:selection:bg-black/50 ${
            !toggle ? 'h-screen' : ''
          } h-min md:backdrop-blur-sm border-gray-200 px-2.5 py-2.5`}
        >
          <div className="flex flex-wrap justify-start">
            <div className="flex w-screen justify-between md:max-w-fit">
              <Link
                to="#"
                className="float-left flex items-center justify-between py-1"
              >
                <img
                  src={'/img/logo.png'}
                  alt="logo"
                  className="min-w-[114px] min-h-[29px] max-w-[114px] max-h-[29px]"
                />
              </Link>

              <div className='top-[10px] flex'>
                <div
                  onClick={() => {
                    setToggle(!toggle)
                  }}
                  className="cursor-pointer md:hidden  w-[30px] flex flex-col gap-[7px] ml-3 mt-1"
                >
                  <span className="w-full h-[4px] rounded-full bg-white" />
                  <span className="w-full h-[4px] rounded-full bg-white" />
                  <span className="w-full h-[4px] rounded-full bg-white" />
                </div>
              </div>
            </div>

            <div className='absolute top-[calc(100vh/7)] left-1/2 -translate-x-1/2 md:hidden ml-auto min-w-[195px]'><ConnectButton /></div>

            {toggle && (
            <div
              className="fixed w-screen h-screen top-0 left-0 bg-black/50"
              onClick={() => setToggle(false)}
            ></div>)}

            <SideBar
              isOpen={toggle}
              closeSideBar={(val: any) => {
                setToggle(val)
              }}
            />
            
            <MenuBar />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
