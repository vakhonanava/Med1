import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'i18next'

ReactDOM.render(
    <Suspense fallback={(<div>loading</div>)}>
    <App />
     </Suspense>
    ,document.getElementById('root'));
    