'use client'

import React from 'react';
import styles from './paggination.module.scss'

type propsTP = {

  clasName : string,
  mouseEnter? : ( event : React.MouseEvent < HTMLDivElement , MouseEvent > ) => void,
  mouseLeave? : ( event : React.MouseEvent < HTMLDivElement , MouseEvent > ) => void,
  mouseMove? :   ( event : React.MouseEvent < HTMLDivElement , MouseEvent > ) => void,
}

export const PaginationSerivise = (props : propsTP) => {
    
  const dinamikClass = `${styles.tagList} ${props.clasName}`
  
    return <div className={dinamikClass} onMouseEnter={props.mouseEnter} onMouseMove={props.mouseMove}
                                          onMouseLeave={props.mouseLeave}>
           
    <div className='innerServisPageNavigate'>

       <div className={styles.tag}>
        <span>საპასუხო ვებ დიზაინი </span>
       </div>

        <div className={styles.tag}>
          <span>მომხმარებელზე ორიენტირებული მიდგომა </span>
        </div>

        <div className={styles.tag}>
          <span>ჯვარედინი ბრაუზერის თავსებადობა </span>
        </div>

        <div className={styles.tag}>
          <span>ოპტიმიზებული შესრულება</span>
        </div>

        <div className={styles.tag}>
          <span>თანამედროვე ვებ ტექნოლოგიები</span>
        </div>

        <div className={styles.tag}>
          <span>კოდის ხარისხი და შენარჩუნება</span>
        </div>

        <div className={styles.tag}>
          <span>დიზაინერებთან თანამშრომლობა </span>
        </div>

        <div className={styles.tag}>
          <span>პრობლემების გადაჭრის უნარები </span>
        </div>

        <div className={styles.tag}>
        <span>საპასუხო ვებ დიზაინი </span>
       </div>

        <div className={styles.tag}>
          <span>მომხმარებელზე ორიენტირებული მიდგომა </span>
        </div>

        <div className={styles.tag}>
          <span>ჯვარედინი ბრაუზერის თავსებადობა </span>
        </div>

        <div className={styles.tag}>
          <span>ოპტიმიზებული შესრულება</span>
        </div>

        <div className={styles.tag}>
          <span>თანამედროვე ვებ ტექნოლოგიები</span>
        </div>

        <div className={styles.tag}>
          <span>კოდის ხარისხი და შენარჩუნება</span>
        </div>

        <div className={styles.tag}>
          <span>დიზაინერებთან თანამშრომლობა </span>
        </div>

        <div className={styles.tag}>
          <span>პრობლემების გადაჭრის უნარები </span>
        </div>
        

    </div>
    
        
</div>

}

