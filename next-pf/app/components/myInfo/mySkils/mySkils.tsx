'use client'

import mySkils from './mySkils.module.scss'

const MySkils = () => {


    return <section className={mySkils.sectionAnimation}>
    <div>
        <span>HTML <span> ( 100% )</span> </span>
        <div> <span className={mySkils.spanWidth1}></span> </div>
    </div>

    <div>
        <span>CSS  <span>  ( 65% )</span> </span>
        <div> <span className={mySkils.spanWidth3}></span> </div>
    </div>

    <div>
        <span>JavaScript <span> ( 30% )</span> </span>
        <div> <span className={mySkils.spanWidth4}></span> </div>
    </div>

    <div>
        <span>Responsive <span> ( 100% )</span> </span>
        <div> <span  className={mySkils.spanWidth5}></span> </div>
    </div>

    <div>
        <span>Git  <span> ( 100% )</span> </span>
        <div> <span  className={mySkils.spanWidth6}></span> </div>
    </div>

    <div>
        <span>ბრაუზერებთან თავსებადობა <span> ( 90% )</span> </span>
        <div> <span  className={mySkils.spanWidth7}></span> </div>
    </div>

    <div>
        <span>გამართვა/ტესტირება <span> ( 75% )</span> </span>
        <div> <span  className={mySkils.spanWidth8}></span> </div>
    </div>

    <div>
        <span>SEO  <span> ( 20% )</span> </span>
        <div> <span  className={mySkils.spanWidth9}></span> </div>
    </div>
    
 </section>
}

export default MySkils