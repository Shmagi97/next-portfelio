'use client'

import Image from 'next/image'
import style from './sliderPoster.module.scss'
import image1 from '@/public/image/img2.webp'
import image2 from '@/public/image/images6.webp'
import image3 from '@/public/image/images5.webp'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const UsersNameAnim = styled.h1 < { $startAndStop: string } > `

    font-size: 25px;
    color: black;
    position: absolute;

    bottom: 150px;
    left: 2%;
    animation:  ${(props)=> props.$startAndStop} 6s cubic-bezier(0.68, -0.55, 0.27, 1.55) ;

    @keyframes animUserSlideName {
        from{
            left: -130%;
            visibility: hidden;
        }

        to{
            left: 2%;
        
        }
    }
`

const UserDescriptionAnim = styled.article < { $startAndStop: string } >`

    position: absolute;

    bottom: 100px;
    left: 2%;
    animation: ${(props)=> props.$startAndStop } 7s cubic-bezier(0.68, -0.55, 0.27, 1.55) ;

    @keyframes animUserSlideName {
        from{
            left: -180%;
            visibility: hidden;
        }

        to{
            left: 2%;
        
        }
    }

`

 const SliderPoster = () => {

    const [usefectRerender, setUsefectRerender] = useState(0)
    const [animUserName , setAnimUserName] = useState('')

    useEffect(()=> {

        const container = document.querySelector(`.${style.silderDiv}`)
        const clearTimeaut = setTimeout(()=> {
           
            const last = container?.firstChild;
            // last?.remove();
            if(last)  container.appendChild(last) 
            // bagia gasasworebeli
            setAnimUserName('')
            setUsefectRerender(usefectRerender < 1 ? usefectRerender + 1 : usefectRerender - 1)

        }, 10 * 1000)

        return ()=> {
            clearTimeout(clearTimeaut)
            setAnimUserName('animUserSlideName')
        }
        
    }, [usefectRerender])

    return <section className={style.sliderPosterSection}>

        <div className={style.silderDiv}>

            <div  className={style.sliderItem}>
                <Image
                alt={'imagesSliderPoster'}
                src={image1}
                className={style.sliderItemImage}
                />

                <UsersNameAnim  $startAndStop = {animUserName}>
                   shmagi narsavidze 111111
                </UsersNameAnim>

                <UserDescriptionAnim $startAndStop = {animUserName}>
                    <p>პროფესია: </p>
                    <p> -: descrifshen adddd ddadadd dadddd   addadd</p>
                </UserDescriptionAnim>
            </div>

            <div  className={style.sliderItem}>
                <Image
                alt={'imagesSliderPoster'}
                src={image2}
                className={style.sliderItemImage}
                />

                <UsersNameAnim  $startAndStop = {animUserName}>
                   shmagi narsavidze 222222
                </UsersNameAnim>

                 <UserDescriptionAnim $startAndStop = {animUserName} >
                    <p>პროფესია: </p>
                    <p> -: descrifshen adddd ddadadd dadddd   addadd</p>
                </UserDescriptionAnim>
            </div>

            <div  className={style.sliderItem}>
                <Image
                alt={'imagesSliderPoster'}
                src={image3}
                className={style.sliderItemImage}
                />
                
                <UsersNameAnim  $startAndStop = {animUserName}>
                   shmagi narsavidze 33333
                </UsersNameAnim>

                <UserDescriptionAnim $startAndStop = {animUserName}>
                    <p>პროფესია: </p>
                    <p> -: descrifshen adddd ddadadd dadddd   addadd</p>
                </UserDescriptionAnim>

            </div>

        </div>

    </section>
}

export default SliderPoster