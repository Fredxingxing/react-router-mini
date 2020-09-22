import { useContext } from 'react';
import { RouterContext } from "./router";

export const useHistory = () => {
    const { history } = useContext(RouterContext);
    console.log(111,history)
    return history || null;
};
export const useLocation = () => {
    const { location } = useContext(RouterContext);
    console.log(222,location)
    return location || null;
};
