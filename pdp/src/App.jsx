import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import { Header } from 'host/Header';
import Footer from 'host/Footer';

const App = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    <Header />
    <div className='m-4'>pdp content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
