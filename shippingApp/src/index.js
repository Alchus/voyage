import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

// Layouts
import App from './App';

// Redux Store
import store from './store';

// Config

//const history = createHistory();

ReactDOM.render((
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" component={App} />
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root')
);
