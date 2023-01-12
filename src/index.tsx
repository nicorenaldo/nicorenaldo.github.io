import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { setupStore } from './app/Redux/store';
import './fonts.css';
import './index.css';
import ScrollToTop from './utils/scrollToTop';

const container = document.getElementById('root')!;
const root = createRoot(container);

const store = setupStore();

root.render(
  <HashRouter>
    <Provider store={store}>
      <ScrollToTop />
      <App />
    </Provider>
  </HashRouter>
);
