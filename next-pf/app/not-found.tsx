'use client'


import React from 'react';
import { Button, Result } from 'antd';

const NotFoundPage: React.FC = () => {

 return <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={()=> history.back()}> go back</Button>}
    style={{marginTop : '100px'}}
  />
};

export default NotFoundPage;