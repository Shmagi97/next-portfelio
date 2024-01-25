'use client'

import style from './paggination.module.scss'

export const PaginationSerivise = () => {
    


    const masivElements = ['rame1', 'rame2', 'rame3']


    
  
    return(  

      masivElements.map((el, index)=> {

        
        return <div key={index}  className={ style.pagServiseDiv }  >
      
        <span>{el} </span>
        <p>
          mesame
        </p>

      </div>

      })

    )
}

