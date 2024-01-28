'use client'

import { useGlobalContext } from '@/app/context/context'
import styles from './paggination.module.scss'
import React from 'react'
import numberGlobalSection from '@/app/components/functionsFN/numberGlobalSection'

export default ()=> {

  const { clickGlobaldNumber, setClickGlobaldNumber } = useGlobalContext()
  // console.log(clickGlobaldNumber);

  function getValue (event : React.MouseEvent < HTMLDivElement > ){

       const valueDiv = event.currentTarget.getAttribute('aria-valuetext');
       if (valueDiv) numberGlobalSection(2, 'servisPageAnimNavigate', parseInt(valueDiv), setClickGlobaldNumber)
       
  }
  
    return <>
     
       <div className={styles.tag} aria-valuetext='0'  onClick={getValue} >
        <span>საპასუხო ვებ დიზაინი </span>
       </div>

        <div className={styles.tag}  aria-valuetext='1' onClick={getValue}>
          <span>მომხმარებელზე ორიენტირებული მიდგომა </span>
        </div>

        <div className={styles.tag} aria-valuetext='2' onClick={getValue}>
          <span>ჯვარედინი ბრაუზერის თავსებადობა </span>
        </div>

        <div className={styles.tag}  aria-valuetext='3' onClick={getValue}>
          <span>ოპტიმიზებული შესრულება</span>
        </div>

        <div className={styles.tag}  aria-valuetext='4' onClick={getValue}>
          <span>თანამედროვე ვებ ტექნოლოგიები</span>
        </div>

        <div className={styles.tag} aria-valuetext='5' onClick={getValue}>
          <span>კოდის ხარისხი და შენარჩუნება</span>
        </div>

        <div className={styles.tag} aria-valuetext='6' onClick={getValue}>
          <span>დიზაინერებთან თანამშრომლობა </span>
        </div>

        <div className={styles.tag}  aria-valuetext='7' onClick={getValue}>
          <span>პრობლემების გადაჭრის უნარები </span>
        </div>

        <div className={styles.tag}  aria-valuetext='0' onClick={getValue}>
        <span>საპასუხო ვებ დიზაინი </span>
       </div>

        <div className={styles.tag} aria-valuetext='1' onClick={getValue}>
          <span>მომხმარებელზე ორიენტირებული მიდგომა </span>
        </div>

        <div className={styles.tag}  aria-valuetext='2' onClick={getValue}>
          <span>ჯვარედინი ბრაუზერის თავსებადობა </span>
        </div>

        <div className={styles.tag}  aria-valuetext='3' onClick={getValue}>
          <span>ოპტიმიზებული შესრულება</span>
        </div>

        <div className={styles.tag}  aria-valuetext='4' onClick={getValue}>
          <span>თანამედროვე ვებ ტექნოლოგიები</span>
        </div>

        <div className={styles.tag}  aria-valuetext='5' onClick={getValue}>
          <span>კოდის ხარისხი და შენარჩუნება</span>
        </div>

        <div className={styles.tag}  aria-valuetext='6' onClick={getValue}>
          <span>დიზაინერებთან თანამშრომლობა </span>
        </div>

        <div className={styles.tag}  aria-valuetext='7' onClick={getValue}>
          <span>პრობლემების გადაჭრის უნარები </span>
        </div>
       
    </>
}