import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import Start from './Start';
import Search from './Search';
import Favourite from './Favourite';
import Statistics from './Statistics';
import Info from './Info';
import NotFound from './NotFound';

import './App.scss';

function App() {
    return (
        <div className="app">
            <div className="menu">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Start</NavLink>
                        </li>
                        <li>
                            <NavLink to="/search">Search</NavLink>
                        </li>
                        <li>
                            <NavLink to="/favourite" exact>
                                Favourite
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics" exact>
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/info">Info</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <Switch>
                    <Route path="/" component={Start} exact />
                    <Route path="/search" component={Search} exact />
                    <Route path="/favourite" component={Favourite} exact />
                    <Route path="/info" component={Info} exact />
                    <Route path="/statistics" component={Statistics} exact />
                    <Route component={NotFound} />
                </Switch>
            </div>
            <div className="footer">Author - Łukasz Stefański</div>
        </div>
    );
}

export default App;
