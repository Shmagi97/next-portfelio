'use client'

import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  notification,
} from 'antd';

import style from './registerAnt.module.scss'
import { useGlobalContext } from '@/app/context/context';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

// component 

export const RegisterAnt: React.FC = () => {
  const [form] = Form.useForm();
  const [inputNoValid, setInputNoValid] = useState('')
  const [submitDisabled, setSubmitDisabled] = useState (true)

  const { setIdentifier } = useGlobalContext()
  
  const { setRegisterUserInfo} = useGlobalContext()

  function  cheingedValue  (values: any, allValues: any) {

     const allFieldsFilled = Object.values(allValues).every((fieldValue) => {

    if (typeof fieldValue === 'string') return fieldValue.length > 0;
  
     else if (typeof fieldValue === 'boolean')   return true; 
    
     else return false; 

  });

  const emailValid =  /^[a-zA-Z0-9._%+-]+@(mail|gmail)\.[a-zA-Z]{2,}/.test(allValues.email)
  const passwordValid =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(allValues.password)
  const phoneValid =  /^[0-9]+$/.test(allValues.phone)

  if ( phoneValid && passwordValid && emailValid && allValues.agreement && allFieldsFilled)  setSubmitDisabled(false);
   else setSubmitDisabled(true);
     
  }

  const onFinish = async (values: any) => {

   
    const email = values.email
    const password = values.password
    const confirm = values.confirm
    const identifier = values.identifier
    const prefix = values.prefix
    const phone = values.phone
    const agreement = values.agreement

    setIdentifier(identifier)

    const response = await fetch(" http://localhost:4000/register ", {
     method: "POST",

     headers: {
      'Content-Type': 'application/json',
     },

     body: JSON.stringify( {email, password, confirm, identifier, prefix, phone , agreement } )

    });

    if (response.ok){
    
      const errorData = await response.json()
      notification.success({
      message: 'წარმატებული რეგისტრაცია',
      description:`გილოცავთ ${errorData.message}` , 
     })
    //  form.resetFields();

     setRegisterUserInfo(true)
      
    } else {
     
     const errorRespons = await response.json()
     setInputNoValid(errorRespons.error.slice(4,10).trim())
 
      notification.error({
        message: 'წარუმატებელი რეგისტრაცია',
        description: `${errorRespons.error}. გთხოვთ ცადოთ ხელახლა.`,
      })
      
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="995">+995</Option>
        <Option value="557">+557</Option>
      </Select>
    </Form.Item>
  );

  return  <section className={ style.registerAnstSection }>
    <Form
      {...formItemLayout}
      form={form}
      action={'/register'}
      method='post'
      name="register"
      onFinish={onFinish}
      initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '557' }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
      layout='vertical'
      requiredMark = {false}
      className={ style.antForm }
      onValuesChange={cheingedValue}
     
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'ეს არ არის სწორი ფორმატი',
          },
          {
            required: true,
            message: 'გთხოვთ შეიყვანეთ თქვენი გიმეილი',
          },

          {
            pattern: /^[a-zA-Z0-9._%+-]+@(mail|gmail)\.[a-zA-Z]{2,}/,
            message: 'სავალდებულოა: (mail | gmail) და ინგლისური ასოები ',
          },
        ]}
        className={style.formItems}
      >
    
        <Input  disabled = {inputNoValid === 'მეილით' || inputNoValid === '' ? false 
          : true}   className={style.formItemsInput} />

      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'გთხოვთ შეიყვანეთ პაროლი',
          },
          {
            min: 10,
            message: 'მინიმუმ 10 სიმბოლო',
          },
          {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
            message: 'აუცილენელია მინიმუმ ერთი: ასობგეგა, ციფრი და დიდი ასობგეგა',
          },
        ]}
        hasFeedback
        className={style.formItems}
      >
        <Input.Password />

      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'გაიმეორეთ პაროლი',
          },

      
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('პაროლი არ ემთხვევა'));
            },
          }),
        ]}
        className={style.formItems}
      >

        <Input.Password />

      </Form.Item>

      <Form.Item
        name="identifier"
        label="identifier"
        tooltip="'identifier'- არის უნიკალური იდენთიფიკატორი თქვენს პირად მონაცემებზე უსაფრთხო წვდომისათვის"
        rules={[
          { 
            required: true, message: 'გთხოვთ შექმენით  იდენთიფიკატორი', whitespace: true
          },
          {
            min: 7,
            message: 'მინიმუმ 10 სიმბოლო',
          },
        ]}
        className={style.formItems}
      >
        <Input  disabled = {inputNoValid === 'ნტიფიკ' || inputNoValid === '' ? false : true} />
      </Form.Item>


      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          
           { 
            required: true, message: 'გთხოვთ შეიყვანეთ ტელეფონის ნომერი' 
           } ,

           {
            pattern: /^[0-9]+$/,
            message: 'შეიყვანეთ მხოლოდ ციფრები'
           }
       
          
          ]}
        
        className={style.formItems}
      >
        <Input  disabled = {inputNoValid === 'ნომრით' || inputNoValid === '' ? false 
           : true} addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>



      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
        wrapperCol={ { offset: 0 } }
        className={style.formItemsCheckbox}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>


      <Form.Item {...tailFormItemLayout} wrapperCol={ { offset : 6 } }   className={style.formItemsRegister}>
        <Button type="primary" htmlType="submit" disabled={submitDisabled}>
          Register
        </Button>
      </Form.Item>
    </Form>
    </section> ;
};

