import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import reduxs from './page/reduxs';

const RootRouter = () => (
    <BrowserRouter>
        <div className="App">
            <Switch>
                <Route exact path="/" component={reduxs} />
                <Route exact path="/reduxs" component={reduxs} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default RootRouter;