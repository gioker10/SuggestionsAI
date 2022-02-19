import React from 'react';
import { getRequest } from './apiUtils/api';

export const App = () => {
    const [data, setData] = React.useState();

    React.useEffect(() => {
        getRequest('http://localhost:8090/games').then(res => setData(res))
    }, [])

    return (<div>{data}</div>);
}