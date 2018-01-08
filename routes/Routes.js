import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EShop from '../components/EShop';
import Cart from '../components/Cart';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class Routes extends React.Component {
    constructor(props) {
        super();
        // console.log(props.userName);
    }
    render() {
        return (
            <Switch>
                <Route exact path="/" component={EShop} />
                <Route exact path="/cart" component={Cart} history={history}/>
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        );
    }
}

export default Routes;