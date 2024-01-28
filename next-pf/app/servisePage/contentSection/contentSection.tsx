'use client'

import style from './content.module.scss';
import { contentMasiv } from './contentMasiv/contentMasiv';


type propsTP = {

    clasName? : string;
}

export default (props : propsTP)=> {

    // console.log(contentMasiv[0].img);
    
    const dinamikClass = `${style.contentSection} ${props.clasName}`
   
    return <section className={dinamikClass}>

      {/* { contentMasiv.map((el, index) => el ) } */}
         
    </section>
}