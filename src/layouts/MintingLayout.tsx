const MintingLayout = (props: mintingType) => {
  return (
    <div className="relative h-screen overflow-x-hidden">{props.children}</div>
  )
}

interface mintingType {
  children?: any
}

export default MintingLayout
