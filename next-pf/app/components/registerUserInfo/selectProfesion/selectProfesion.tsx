'use client'

import React from 'react';
import type { SelectProps } from 'antd';
import { Select, Space } from 'antd';
import style from './select.module.scss'
import { useGlobalContext } from '@/app/context/context';

const SelectProfesion: React.FC = () => {

  const { setSendRegisterUserInNode } = useGlobalContext()

  const handleChange = (value: string[]) => {

    setSendRegisterUserInNode( [ {selectedProfesion: value } ]  )
  };
  
  const options: SelectProps['options'] = [
    {
      label: 'Software Developer/Engineer',
      value: 'SoftwareDeveloper',
      desc: 'Software Developer/Engineer ',
    },
    {
      label: 'Web Developer',
      value: 'WebDeveloper',
      desc: 'Web Developer',
    },
    {
      label: 'Mobile App Developer',
      value: 'AppDeveloper',
      desc: 'Mobile App Developer',
    },
    {
      label: 'Backend Developerr',
      value: 'BackendDeveloper',
      desc: 'Backend Developerr',
    },
    {
      label: 'Frontend Developer',
      value: 'FrontendDeveloper',
      desc: 'Frontend Developer',
    },
    {
      label: 'DevOps Engineer',
      value: 'DevOpsEngineer',
      desc: 'DevOps Engineer',
    },
    {
      label: 'Database Administrator (DBA)',
      value: 'DatabaseAdministrator',
      desc: 'Database Administrator (DBA)',
    },
    {
      label: 'System Administrator',
      value: 'SystemAdministrator',
      desc: 'System Administrator',
    },
    {
      label: 'Cloud Engineer/Architect',
      value: 'CloudEngineer',
      desc: 'Cloud Engineer/Architect',
    },
    {
      label: 'Security Engineer',
      value: 'SecurityEngineer',
      desc: 'Security Engineer',
    },
    {
      label: 'Data Scientist',
      value: 'DataScientist',
      desc: 'Data Scientist',
    },
    {
      label: 'Machine Learning Engineer',
      value: 'MachineLearningEngineer',
      desc: 'Machine Learning Engineer',
    },
    {
      label: 'Game Developer',
      value: 'GameDeveloper',
      desc: 'Game Developer',
    },
    {
      label: 'UI/UX Designer',
      value: 'UI/UXDesigner',
      desc: 'UI/UX Designer',
    },
    {
      label: 'QA Engineer/Tester',
      value: 'QAEngineer/Tester',
      desc: 'QA Engineer/Tester',
    },
    {
      label: 'Embedded Systems Developer',
      value: 'EmbeddedSystemsDeveloper',
      desc: 'Embedded Systems Developer',
    },
    {
      label: 'Blockchain Developer',
      value: 'BlockchainDeveloper',
      desc: 'Blockchain Developer',
    },
    {
      label: 'Network Engineer',
      value: 'NetworkEngineer',
      desc: 'Network Engineer',
    },
    {
      label: 'AI Enginee',
      value: 'AIEnginee',
      desc: 'AI Enginee',
    },
  ];

 return <Select
   className={style.select}
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="აირჩიეთ პროფესია"
    onChange={handleChange}
    optionLabelProp="label"
    options={options}
    optionRender={(option) => (
      <Space>
        <span role="img" aria-label={option.data.label}>
          {option.data.emoji}
        </span>
        {option.data.desc}
      </Space>
    )}
  />
    };

export default SelectProfesion;