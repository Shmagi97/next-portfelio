'use client'

import React from 'react';
import { Input, Space } from 'antd';
import { SearchProps } from 'antd/es/input';
import styleSearch from './search.module.scss'
import { LogoutOutlined } from '@ant-design/icons';
import { useGlobalContext } from '@/app/context/context';
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

// AntdIconProps ირებს ყველა პროპს ანტ დიზაინიდან და ამ სინტაქსით 'React.FC < AntdIconProps >' გადასცემს 
// ყველა ანტ დიზაინის კომპონენტს იმ პროპეს რომელითაც ტაიპსკრიპტში განვსაზღვრათ ტიპებს საჭიროა ყველა კომპონენტ~
// გაეწეროს კონკრეტული პროპსი ანუ 'AntdIconProps' - იდან წამოღებული სტილი

// 'suppressHydrationWarning' ეს არის პროპი რპმელიც აგვარებს ვარნინგის პრობლემა ნექსტის იმეიგზე , ვარნინგი გამოწვეულია 
// იმით რომ ნექსტის იმეიგზე ოპტიმიზაციისტვის გაწერილი სერვერის მხარის სტილები შეუსაბამოა კლიენტის მხარეს 
//გაწერილ სტილებთან ''suppressHydrationWarning'' მუშაობს იმეიგზე მაგრამ არ მუშაობს ან დიზაინის კომპონენტებზე

const SearchComponent : React.FC < AntdIconProps > = () => {

    const {globalChildSection } = useGlobalContext()
    
    function clickSearchLogaut () {

        globalChildSection.current?.classList.replace('searchSection', 'sectionNone')
        document.body.classList.remove( 'bodyOverflovHidden')
    }  


const { Search } = Input;


const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value, _e);


    return <>


    <div className={styleSearch.searchSectionDiv} >

    <Search suppressHydrationWarning  placeholder="input search text" onSearch={onSearch} enterButton
      className={styleSearch.searchBacground}  />

    <div className={styleSearch.searchLogaut}  onClick={clickSearchLogaut}>
    <LogoutOutlined suppressHydrationWarning/>
    </div>

   </div>
   <div className={styleSearch.SearchModal}>

    <span className={styleSearch.span1}></span>
    <span className={styleSearch.span2}></span>
    <span className={styleSearch.span3}></span>
   </div>

   </>
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