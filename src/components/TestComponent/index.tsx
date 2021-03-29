import React from 'react';
import { Switch } from 'antd';
import { ComponentWrapper } from './index.styled';
import './switch.less';

const TestComponent: React.FC = () => {
  function onChange(checked: boolean) {
    // eslint-disable-next-line
    console.log(`switched to ${checked}`);
  }

  return (
    <ComponentWrapper>
      <Switch
        checkedChildren="да"
        unCheckedChildren="нет"
        onChange={onChange}
      />
    </ComponentWrapper>
  );
};

export default TestComponent;
