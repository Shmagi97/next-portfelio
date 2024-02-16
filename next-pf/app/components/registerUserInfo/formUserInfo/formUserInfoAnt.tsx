'use client'

import style from './formUser.module.scss'

import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
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
  const positionClass = `${style.myClass} ${style.position}`
  const upload = `${style.myClass} ${style.upload}`

  const getFromChangeValue = (changeValues: any, allValues: any) => {
   
    if ('workingValueChange' in changeValues){

      setNowWorking( changeValues.workingValueChange ? 'დასაქმებული' : 'თავისუფალი' )
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

        <Form.Item label="მიუთითეთ პოზიცია" className={positionClass}>
          <Radio.Group>
            <Radio value="employer"> დამსაქმებელი </Radio>
            <Radio value="employable"> დასასაქმებელი </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="სახელი და გვარი" className={style.myClass}>
          <Input />
        </Form.Item>

        <Form.Item label="მისამართი" className={style.myClass}>
          <Input />
        </Form.Item>

        <Form.Item label="პროფესია" className={style.myClass}>
          <Select>
            <Select.Option value="SoftwareDeveloper">Software Developer/Engineer</Select.Option>
            <Select.Option value="WebDeveloper">Web Developer</Select.Option>
            <Select.Option value="AppDeveloper">Mobile App Developer</Select.Option>
            <Select.Option value="FullStackDeveloper">Full Stack Developer</Select.Option>
            <Select.Option value="BackendDeveloper">Backend Developerr</Select.Option>
            <Select.Option value="FrontendDeveloper">Frontend Developer</Select.Option>
            <Select.Option value="DevOpsEngineer">DevOps Engineer</Select.Option>
            <Select.Option value="DatabaseAdministrator">Database Administrator (DBA)</Select.Option>
            <Select.Option value="SystemAdministrator">System Administrator</Select.Option>
            <Select.Option value="CloudEngineer">Cloud Engineer/Architect</Select.Option>

            <Select.Option value="SecurityEngineer">Security Engineer</Select.Option>
            <Select.Option value="DataScientist">Data Scientist</Select.Option>
            <Select.Option value="MachineLearningEngineer">Machine Learning Engineer</Select.Option>
            <Select.Option value="GameDeveloper">Game Developer</Select.Option>
            <Select.Option value="UI/UXDesigner">UI/UX Designer</Select.Option>
            <Select.Option value="QAEngineer/Tester">QA Engineer/Tester</Select.Option>
            <Select.Option value="EmbeddedSystemsDeveloper">Embedded Systems Developer</Select.Option>
            <Select.Option value="BlockchainDeveloper">Blockchain Developer</Select.Option>
            <Select.Option value="NetworkEngineer">Network Engineer</Select.Option>
            <Select.Option value="AIEnginee">AI Enginee</Select.Option>
          </Select>
        </Form.Item>

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

        <Form.Item label="გამოცდილების ხაბგრძლივობა" className={style.birthday}>
          <RangePicker />
        </Form.Item>

        {/* <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item> */}

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

        <Form.Item label="პროფილის ფოტო" valuePropName="fileList" getValueFromEvent={normFile} className={upload}>
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 , color: '#809ab9' }}>ატვირთვა</div>
            </button>
          </Upload>
        </Form.Item>

        <div className={style.fileUpload}>
          <p className={style.workingSpan}>დიპლომი და რეზიუმე</p>
          <FileUpload/>
        </div>

        <div className={style.skilss}>
        <p className={style.workingSpan}>შენი უნარები</p>
          {
            [...Array(sliderNumber)].map((_, index)=> (

            <div key={index}>

             <Input placeholder='უნარის სახელი' style={{background:' rgba(0, 0, 0, 0.5)', color:'#809ab9'}}/>

              <Form.Item  className={style.skilssFormItem}>
                <Slider />
              </Form.Item>

            </div>

            ))
          }
        <Button  onClick={clickSlider} style={{background:' rgba(0, 0, 0, 0.5)', color:'#809ab9'}}>უნარის დამატება</Button>
        </div>

        <Form.Item className={style.myClass} style={{marginTop:'30px'}}>
          <Button style={{background:' rgba(0, 0, 0, 0.5)', color:'#809ab9'}}> დასრულება </Button>
        </Form.Item>

        {/* <Form.Item label="ColorPicker">
          <ColorPicker />
        </Form.Item> */}

      </Form>
    </>
  );
};

export default FormDisabledDemo ;