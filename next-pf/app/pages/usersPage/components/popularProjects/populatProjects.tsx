'use client'

import NewUserPagination from '../newUsersProjects/newUserPagination/newUserPagination'
import style from './popularProjects.module.scss'

const PopularProjects = () => {

    return <section className={style.popularProjectsSection}>

        <NewUserPagination>
             Popular Projects
        </NewUserPagination>
         
    </section>
}

export default PopularProjects