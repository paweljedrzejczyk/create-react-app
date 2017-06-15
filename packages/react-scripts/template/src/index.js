import React from 'react';
import ReactDOM from 'react-dom';
// react-hot-loader is a dependecy of this react-scripts fork
// remove this comment after ejecting
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';

import App from 'components/App';
import registerServiceWorker from 'utils/registerServiceWorker';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line global-require
    const nextApp = require('./components/App').default;
    render(nextApp);
  });
}

registerServiceWorker();
