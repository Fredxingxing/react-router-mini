import React from "react";
import { Router, Route, useHistory } from './router-mini'

const Foo = () => 'foo'
const Bar = () => 'bar'

const Links = () => {
    const history = useHistory();
    const go = (path) => {
        const state = { name: path };
        history.push(path, state);
    };
    return (
        <div>
            <button onClick={() => go('foo')}>foo</button>
            <button onClick={() => go('bar')}>bar</button>
        </div>
    )
};

export default () => {
    return (
        <div>
            <Router>
                <Links />
                <Route path="foo">
                    <Foo />
                </Route>
                <Route path="bar">
                    <Bar />
                </Route>
            </Router>
        </div>
    )
}
