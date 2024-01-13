'use client'


import { useGlobalContext } from '@/app/context/context';
import { RefObject, useEffect, useRef } from 'react';
import MyInfo from '../myInfo/myInfo';
import SearchComponent from '../serach/search';

const GlobalDinamikChaild = () => {

    const { setGlobalChildSection, clickedFixedImage, clickedSearch} = useGlobalContext()

    const useRefElement : RefObject < HTMLDivElement > = useRef(null)

    useEffect(()=> {
        setGlobalChildSection(useRefElement)
    },[])
    

    return <section className='sectionNone' ref={useRefElement}>

{

   clickedFixedImage === true ? <MyInfo/> : clickedSearch === true ? <SearchComponent/> : false

}

    </section>
}

export default GlobalDinamikChaild