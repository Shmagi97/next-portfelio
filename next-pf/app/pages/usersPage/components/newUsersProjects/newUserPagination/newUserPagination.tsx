'use client'

import style from './newUserPagin.module.scss'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

type propsTP = {
    children: string,
}

const NewUserPagination = ( props : propsTP )=> {

  return  <div className={style.newUserDiv}>
            <div>
                <h2> {props.children} </h2>
                 
                <article></article>
            </div>

            <div>
                <article> 
                    <LeftOutlined/> 
                </article>
                <article> 
                    <RightOutlined/> 
                </article>
            </div>

           </div>
}

export default NewUserPagination