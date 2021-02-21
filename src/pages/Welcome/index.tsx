import React, { FC } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import styles from './style.less';

const Welcome: FC = () => {
  return (
    <PageContainer>
      <Card>
        <div className={styles.hello}>hello</div>
      </Card>
    </PageContainer>
  );
};
export default Welcome;
