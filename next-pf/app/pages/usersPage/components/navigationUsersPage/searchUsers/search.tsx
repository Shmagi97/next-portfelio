'use client'

import style from './search.module.scss'

import {    SearchOutlined }  from '@ant-design/icons'

const Search = () => {

    return <div>
                <input type="search" placeholder='search...'/>
                <SearchOutlined
                className={style.searchIqon}
                />
            </div>
}

export default Search