import React from 'react';
import ReactDOM from 'react-dom';

import {SpeechProvider} from '@speechly/react-client';
import App from './App';
import './index.css';
import {Provider} from './context/context';

ReactDOM.render(
<SpeechProvider appId='bfafa026-d425-4c08-b120-756618b3eece' language='en-US'>
  <Provider>
  <App />
</Provider>
</SpeechProvider>
, document.getElementById('root'));
