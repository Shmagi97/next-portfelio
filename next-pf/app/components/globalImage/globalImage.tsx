import { useGlobalContext } from "@/app/context/context"
import backGround from '@/public/image/backGround.jpg'
import img2 from '@/public/image/img2.jpg'
import photo1 from '@/public/image/photo1.jpg'
import { StaticImageData } from "next/image"
import { useEffect } from "react"

// type imgTp = {
//     backImageMasiv : StaticImageData;
// }

const GlobalImage = () => {

    const {dataimg, setDataimg} = useGlobalContext()
    const backImageMasiv = [backGround, img2, photo1]
    setDataimg (backImageMasiv )

    useEffect(()=> {
        // console.log(dataimg)
    }, [])
  
    
    return null
    
    
}

// export default GlobalImage