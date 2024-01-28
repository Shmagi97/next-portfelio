'use client'


import { useGlobalContext } from '@/app/context/context';
import { RefObject, useEffect, useRef } from 'react';
import MyInfo from '../myInfo/myInfo';
import SearchComponent from '../searach/search';

const GlobalDinamikChaild = () => {

    const { setGlobalChildSection, clickGlobaldNumber} = useGlobalContext()

    const useRefElement : RefObject < HTMLDivElement > = useRef(null)

    useEffect(()=> {
        setGlobalChildSection(useRefElement)
    },[])
    

    return <section className='sectionNone' ref={useRefElement}>

{

   clickGlobaldNumber[1].globalSectionChildren[0]==1 ? <MyInfo/> : 
   clickGlobaldNumber[1].globalSectionChildren[1]==1 ? <SearchComponent/> : false

}

    </section>
}

export default GlobalDinamikChaild