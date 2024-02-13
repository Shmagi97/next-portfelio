'use client'

import React, { useState } from 'react';
import type { CascaderProps } from 'antd';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  notification,
} from 'antd';

import style from './registerAnt.module.scss'
import axios from 'axios';

const { Option } = Select;

// interface DataNodeType {
//   value: string;
//   label: string;
//   children?: DataNodeType[];
// }

// const residences: CascaderProps<DataNodeType>['options'] = [
//   {
//     value: 'zhejiang',
//     label: 'Zhejiang',
//     children: [
//       {
//         value: 'hangzhou',
//         label: 'Hangzhou',
//         children: [
//           {
//             value: 'xihu',
//             label: 'West Lake',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: 'jiangsu',
//     label: 'Jiangsu',
//     children: [
//       {
//         value: 'nanjing',
//         label: 'Nanjing',
//         children: [
//           {
//             value: 'zhonghuamen',
//             label: 'Zhong Hua Men',
//           },
//         ],
//       },
//     ],
//   },
// ];

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

  const onFinish = async (values: any) => {

   
    const email = values.email
    const password = values.password
    const confirm = values.confirm
    const nickname = values.nickname
    const prefix = values.prefix
    const phone = values.phone
    const agreement = values.agreement

    const response = await fetch(" http://localhost:4000/register ", {
     method: "POST",

     headers: {
      'Content-Type': 'application/json',
     },

     body: JSON.stringify( {email, password, confirm, nickname, prefix, phone , agreement } )

    });

    if (response.ok){
      console.log('succes');
      
      const errorData = await response.json()
      notification.success({
      message: 'წარმატებული რეგისტრაცია',
      description:`გილოცავთ ${errorData.message}` ,
     })
      
    } else {
      console.log('error');
     const errorRespons = await response.json()
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
            message: 'გთხოვთ შეიყვანეთ ტქვენი გიმეილი',
          },

          {
            pattern: /^[a-zA-Z0-9._%+-]+@(mail|gmail)\.[a-zA-Z]{2,}/,
            message: 'სავალდებულოა: (mail | gmail) და ინგლისური ასოები ',
          },
        ]}
        className={style.formItems}
      >
        <Input   className={style.formItemsInput} />

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
        name="nickname"
        label="Nickname"
        tooltip="როგორც გინდათ რომ გამოჩნდეს თქვენი სახელი"
        rules={[
          { 
            required: true, message: 'გთხოვთ შეიყვანეთ სახელი', whitespace: true
          },
          {
            min: 7,
            message: 'მინიმუმ 7 სიმბოლო',
          },
        ]}
        className={style.formItems}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          
           { 
            required: true, message: 'გთხოვთ შეიყვანეთ ტელეფონის ნომერი' 
           } ,
       
          
          ]}
        
        className={style.formItems}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
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
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </section> ;
};
