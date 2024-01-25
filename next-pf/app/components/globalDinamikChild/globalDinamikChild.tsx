'use client'


import { useGlobalContext } from '@/app/context/context';
import { RefObject, useEffect, useRef } from 'react';
import MyInfo from '../myInfo/myInfo';
import SearchComponent from '../serach/search';

const GlobalDinamikChaild = () => {

    const { setGlobalChildSection, clickGlobalDinamikChild} = useGlobalContext()

    const useRefElement : RefObject < HTMLDivElement > = useRef(null)

    useEffect(()=> {
        setGlobalChildSection(useRefElement)
    },[])
    

    return <section className='sectionNone' ref={useRefElement}>

{

  clickGlobalDinamikChild[0]==1 ? <MyInfo/> :  clickGlobalDinamikChild[1]==1 ? <SearchComponent/> : false

}

    </section>
}

export default GlobalDinamikChaild