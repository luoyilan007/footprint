import type { FC } from 'react';
import { Card } from 'antd';
import styles from './style.less';

const Welcome: FC = () => {
  return (
    <Card>
      <div className={styles.hello}>hello</div>
    </Card>
  );
};
export default Welcome;
