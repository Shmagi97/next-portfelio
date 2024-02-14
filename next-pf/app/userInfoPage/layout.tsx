

import style from './layout.module.scss'
import Footer from '../components/footerAndHeader/footer/footer'
import Header from '../components/footerAndHeader/header/header'

import RecoilWrapper from '../components/recoilWrapper/recoilWrapper'
import React, { ReactNode } from 'react'

type propsTP = {
  children: React.ReactNode
}

export default (props : propsTP)=> {

  return  <section className={style.userInfoSection}>

   

        <RecoilWrapper>

            {props.children}

        </RecoilWrapper>

   


    </section>
}
