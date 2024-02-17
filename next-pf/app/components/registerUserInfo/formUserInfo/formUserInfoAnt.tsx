'use client'

import style from './formUser.module.scss'

import React, { useState } from 'react';
import { FacebookFilled, GithubOutlined, LinkOutlined, LinkedinOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  Upload,
} from 'antd';
import FileUpload from '../fileUpload/fileUpload';
import SelectProfesion from '../selectProfesion/selectProfesion';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) { 
    return e;
  }
  return e?.fileList;
};

const FormDisabledDemo: React.FC = () => {

  const [nowWorking, setNowWorking] = useState ('თავისუფალი')
  const [sliderNumber, setSliderNumber] = useState(1)
  const [radioInfo, setRadioInfo] = useState ('employable')

  const positionClass = `${style.myClass} ${style.position}`
  const upload = `${style.myClass} ${style.upload}`

  const getFromChangeValue = (changeValues: any, allValues: any) => {
   
    if ('workingValueChange' in changeValues){

      setNowWorking( changeValues.workingValueChange ? 'დასაქმებული' : 'თავისუფალი' )

    } else if("radioInfo" in changeValues){
     
      setRadioInfo(changeValues.radioInfo == 'employable'  ? 'employable' : 'employer')

      
    }
  }

  function clickSlider (){
    setSliderNumber((prev)=> prev+1)
  }

  return (
    <>
      <Form
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 15 }}
        layout="vertical"
        onValuesChange={getFromChangeValue}
      >

        <Form.Item label="მიუთითეთ პოზიცია" className={positionClass} name="radioInfo" initialValue={'employable'}>
          <Radio.Group >
            <Radio value="employer"  > დამსაქმებელი </Radio>
            <Radio value="employable"> დასასაქმებელი </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="სახელი და გვარი" className={style.myClass}>
          <Input />
        </Form.Item>

        {radioInfo == 'employer' ? (
            <Form.Item label="კომპანიის სახელი" className={style.myClass}>
              <Input />
            </Form.Item> ) : false
        }

        <Form.Item label="მისამართი" className={style.myClass}>
          <Input />
        </Form.Item>
       
       {radioInfo == 'employer' ? (

        <Form.Item label="კომპანიის საქმიანობა" className={style.myClass}>
          <Select>
            <Select.Option value="Tech Startups">Tech Startups</Select.Option>
            <Select.Option value="Software Development Companies">Software Development Companies</Select.Option>
            <Select.Option value="Technology Consultancies">Technology Consultancies</Select.Option>
            <Select.Option value="E-commerce Companies">E-commerce Companies</Select.Option>
            <Select.Option value="Social Media Platforms">Social Media Platforms</Select.Option>
            <Select.Option value="Game Development Studios">Game Development Studios</Select.Option>
            <Select.Option value="Hardware Manufacturers">Hardware Manufacturers</Select.Option>
            <Select.Option value="Cloud Computing Providers">Cloud Computing Providers</Select.Option>
            <Select.Option value="Telecommunication Companies">Telecommunication Companies</Select.Option>
            <Select.Option value="Cybersecurity Firms">Cybersecurity Firms</Select.Option>
            <Select.Option value="Data Analytics Companies">Data Analytics Companies</Select.Option>
            <Select.Option value="AI Companies">AI Companies</Select.Option>
            <Select.Option value="Robotics Companies">Robotics Companies</Select.Option>
            <Select.Option value="IoT Companies">IoT Companies</Select.Option>
            <Select.Option value="Biotechnology Companies">Biotechnology Companies</Select.Option>
            <Select.Option value="Tech Research Institutions">Tech Research Institutions</Select.Option>
            <Select.Option value="EdTech Companies">EdTech Companies</Select.Option>
            <Select.Option value="HealthTech Companies">HealthTech Companies</Select.Option>
            <Select.Option value="FinTech Companies">FinTech Companies</Select.Option>
            <Select.Option value="AR/VR Companies">AR/VR Companies</Select.Option>
            <Select.Option value="Open Source Projects">Open Source Projects</Select.Option>
            <Select.Option value="Government Tech Departments">Government Tech Departments</Select.Option>
            <Select.Option value="Nonprofit Tech Organizations">Nonprofit Tech Organizations</Select.Option>
            <Select.Option value="Freelancers and Independent Contractors">Freelancers and Independent Contractors</Select.Option>
          </Select>
        </Form.Item>

         ) : ( <div className={style.selectProfesionDiv}>
         <p className={style.workingSpan}>აირჩიეთ პროფესია</p>
           <SelectProfesion  />
         </div> )
        } 
        {/* <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item> */}

        <Form.Item label="დაბადების თარიღი" className={style.birthday}>
          <DatePicker />
        </Form.Item>

        <Form.Item label={ radioInfo == 'employer' ? "კომპანიის არსებობის ხანგრძლივობა" : "გამოცდილების ხანგრძლივობა"} className={style.birthday}>
          <RangePicker />
        </Form.Item>
 
       { radioInfo == 'employer' ? (
          <Form.Item label="კომპანიის სესახებ" className={style.myClass}>
            <TextArea rows={4} />
          </Form.Item>) : (
         <>
          <Form.Item label="განათლება" className={style.myClass}>
          <TextArea rows={4} />
          </Form.Item>

          <Form.Item label="გამოცდილება" className={style.myClass}>
          <TextArea rows={4} />
          </Form.Item>

          
        <div className={style.chekidChangDiv}>
          <Form.Item label="ამჟამად" valuePropName="checked" className={style.working} name="workingValueChange">
            <Switch />
          </Form.Item>
         <span className={style.workingSpan}> {nowWorking} </span> 
        </div>

        <div className={style.skilss}>
        <p className={style.workingSpan}>შენი უნარები</p>
          {
            [...Array(sliderNumber)].map((_, index)=> (
            
            <div key={index}>

             <Input placeholder='უნარის დასახელება' className={style.skillInput}/>

              <Form.Item  className={style.skilssFormItem}>
                <Slider />
              </Form.Item>

            </div>

            ))
          }
        <Button  onClick={clickSlider} style={{background:' rgba(0, 0, 0, 0.5)', color:'#809ab9'}}>უნარის დამატება</Button>
        </div>

        <div  className={style.skilss} >

          <p className={style.workingSpan}>სოციალური საიტები</p>
          
            <div className={style.contactLinkDiv}>
            <FacebookFilled style={{fontSize: '25px', color: '#69B1FF'}}/>
            <LinkOutlined style={{color: ' #809ab9'}}/>
            <Input style={{background: ' rgba(0, 0, 0, 0.5)', color: ' #809ab9'}}/>
            </div >

            <div className={style.contactLinkDiv}>
              <LinkedinOutlined style={{fontSize: '25px', color: '#69B1FF' }}/>
              <LinkOutlined style={{color: ' #809ab9'}}/>
              <Input style={{background: ' rgba(0, 0, 0, 0.5)', color: ' #809ab9' }}/>
            </div>

            <div className={style.contactLinkDiv}>
              <GithubOutlined style={{fontSize: '25px', color: '#69B1FF'}}/>
              <LinkOutlined style={{color: ' #809ab9'}}/>
              <Input style={{background: ' rgba(0, 0, 0, 0.5)', color: ' #809ab9'}}/>
            </div>
         
        </div>
          </>
          )
       }

        <Form.Item label="პროფილის ფოტო" valuePropName="fileList" getValueFromEvent={normFile} className={upload}>
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 , color: '#809ab9' }}>ატვირთვა</div>
            </button>
          </Upload>
        </Form.Item>

        <div className={style.fileUpload}>
          <p className={style.workingSpan}>{  radioInfo == 'employer' ? 'დოცუმენტაცია' : 'დიპლომი და რეზიუმე'}</p>
          <FileUpload/>
        </div>

        <Form.Item className={style.myClass} style={{marginTop:'30px'}}>
          <Button style={{background:' rgba(0, 0, 0, 0.5)', color:'#69B1FF'}}> დასრულება </Button>
        </Form.Item>

      </Form>
    </>
  );
};

export default FormDisabledDemo ;