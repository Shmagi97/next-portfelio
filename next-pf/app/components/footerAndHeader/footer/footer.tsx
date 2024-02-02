'use client'


import style from './footer.module.scss'

const Footer = () => {
    return <footer className={style.footer}>
    
      <section className={style.footerSection}>
           <div>
            <span> Web Development `Next.js and TypeScript` </span>
           </div>
           <div>
             <span>შმაგი ნარსავიძე</span>
             <span>568 59 60 12</span>
           </div>
      </section>
    
    </footer>
}

export default Footer