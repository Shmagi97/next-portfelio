'use client'

import React from 'react';
import { Input, Space } from 'antd';
import { SearchProps } from 'antd/es/input';

import style from './search.module.css'
import { LogoutOutlined } from '@ant-design/icons';

const SearchComponent = () => {

const { Search } = Input;


const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value, _e);


    return <section className={style.searchSection}>

    <div className={style.searchSectionDiv}>

    <Search placeholder="input search text" onSearch={onSearch} enterButton />

   </div>
   <div className={style.SearchModal}>

    <span className={style.span1}></span>
    <span className={style.span2}></span>
    <span className={style.span3}></span>
    <LogoutOutlined />
   </div>

   </section>
}

export default SearchComponent 




// const SearchComponent: React.FC = () => (
 

// TypeScript-სა და React-ში React.FCტიპი არის ზოგადი ტიპი, რომელიც ნიშნავს "ფუნქციურ კომპონენტს".
// ეს არის ფუნქციური კომპონენტის ტიპის განმარტება, რომელიც არგუმენტად იღებს რეკვიზიტებს და 
// აბრუნებს JSX ელემენტს.

// როდესაც თქვენ აცხადებთ კომპონენტს const SearchComponent: React.FC = () => {...}, 
// თქვენ აკონკრეტებთ, რომ ეს SearchComponentარის ფუნქციური კომპონენტი, რომელიც აშკარად არ იღებს საყრდენებს.
// ეს არის სტენოგრამა ფუნქციური კომპონენტების განსაზღვრისთვის. ეს უდრის:

// const SearchComponent: React.FC = () => {
//   // Component logic
// };

// გამოყენება React.FCარ არის მკაცრად საჭირო და თქვენ შეგიძლიათ განსაზღვროთ ფუნქციური კომპონენტები მის გარეშე.
// თუმცა, ის იძლევა გარკვეულ სარგებელს:

// ტიპის დასკვნა რეკვიზიტებისთვის : გამოყენებისას React.FCTypeScript ავტომატურად ადგენს პარამეტრის ტიპს props. 
// ამის გარეშე, თქვენ უნდა მკაფიოდ განსაზღვროთ props.

// ბავშვების მართვა : React.FCირიბად მოიცავს childrenსაყრდენს, რაც აადვილებს იმ კომპონენტებთან მუშაობას,
// რომლებსაც შეიძლება ჰყავდეთ ბავშვები.

// ნაგულისხმევი რეკვიზიტები და ნაგულისხმევი პროპები : React.FCმოიცავს defaultPropsდა propTypes,
// რომელიც შეიძლება იყოს გამოსადეგი ნაგულისხმევი მნიშვნელობებისა და საყრდენი ტიპების დოკუმენტაციისთვის.

// );

// export default SearchComponent;