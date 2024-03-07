'use client'

import NewUserPagination from './newUserPagination/newUserPagination'
import ProjectInfo from './newUserProjectInfo/projectInfo'
import style from './newUserProjects.module.scss'

const NewUsersProjects = () => {
   // gaakette serverze bcrypt-it parolis dashifrva
    return <section className={style.newUserSection}>
      
      <NewUserPagination>
         New Users Projects 
      </NewUserPagination>
      <ProjectInfo/>

    </section>
}

export default NewUsersProjects