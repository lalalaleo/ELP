import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';

import { Header } from '../../components/layout/header.js';
import { Learning } from '../learning/index.js';
import {  Row  } from 'antd'

function IndexPage(){
    return(
        <div>
            <Header type='index' />
            <Row type="flex" justify="center" align="top" className={styles.content}>
                <Learning />
            </Row>
        </div>
    );
}

// export default connect()(IndexPage);
export default { IndexPage };
// ReactDOM.render(<Index />,document.getElementById('root'));