
import Navigate from "../../button/navigate/navigate"
import ShareClickBtn from "../../button/shareButtons/shareBrn"
import FixedImage from "../../fixedImage/fixedImage"
import style from './header.module.css'
import share from '@/public/icons/share.png'
import search from '@/public/icons/search.png'

const Header = () => {


    return <header className={style.layoutHeader}>

       <FixedImage/>
       <Navigate/>

       <div className={style.shareBtnDiv}>

         <ShareClickBtn
          img = {share}
          hoverShare = {'acrive'}
         />
           <ShareClickBtn
          img = {search}
         />

       </div>

    </header>
}

export default Header