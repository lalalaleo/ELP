import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import { Header, SegmentCtrl } from '../../components/layout/header';

function App(){
    return(
        <div>
            <Header />
            <SegmentCtrl />
        </div>
    );
}
ReactDOM.render(<App />,document.getElementById('root'));