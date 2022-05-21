import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ProgressBar from '../src';

const progress = new ProgressBar({
  size: 4,
  color: '#3B82F6',
  className: 'progress-bar',
  delay: 100,
});

const App = () => {
  progress.start();
  setTimeout(() => {
    progress.finish();
  }, 1000);

  return <p>Progress Bar Demo</p>;
};

ReactDOM.render(<App />, document.getElementById('root'));
