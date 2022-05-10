import Navbar from "../components/navbar"

const MintingLayout = (props: mintingType) => {
  return (
    <div className="relative h-screen overflow-x-hidden">
      <Navbar />  
      {props.children}
    </div>
  )
}

interface mintingType {
  children?: any
}

export default MintingLayout
