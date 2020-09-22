import React, { useState, useEffect } from 'react';
import { history } from './history';

export const RouterContext = React.createContext(null);

export const Router = ({ children }) => {
    const [location, setLocation] = useState(history.location);
    // 初始化的时候 订阅 history 的变化
    // 一旦路由发生改变 就会通知使用了 useContext(RouterContext) 的子组件去重新渲染

    useEffect(() => {
        const unlisten = history.listen(location => {
            setLocation(location);
        });
        return unlisten;
    }, []);
    console.log(111111111,location)
    return (
        <RouterContext.Provider value={{ history, location }}>
            {children}
        </RouterContext.Provider>
    )
};
