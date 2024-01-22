'use client'

import style from './loading.module.scss'
import React from 'react';
import { Spin } from 'antd';

export default ()=> {

    return <section className={style.sectionLoading}>
        

                <Spin size='large'/>

        
            </section>
    
       

}



