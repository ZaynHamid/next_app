import Image from "next/image"
import JuiceWrld from '../../public/images/3543.webp'
const LearnUseImage = () => {
  return (
    <div>
        <Image src={JuiceWrld} quality={1}/>
    </div>
  )
}

export default LearnUseImage