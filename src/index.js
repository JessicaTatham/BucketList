import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BucketList from './BucketList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BucketList />, document.getElementById('root'));
registerServiceWorker();
