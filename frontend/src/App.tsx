import React from 'react';

export const App = () => {
    const [data, setData] = React.useState();

    React.useEffect(() => {

    })

    fetch('http://localhost:8090/games').then(response => console.error(response))
    return (<div>{data}</div>);
}