import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './styles/index.scss';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element is missing');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
