import React from 'react'
import DomainARoute from '../Routes/DomainARoute';
import DomainBRoute from '../Routes/DomainBRoute';
import DomainCRoute from '../Routes/DomainCRoute';

function RouteMiddleware() {
    // console.log(window.location)
    
    const hostName = window.location.hostname;
    
    console.log(hostName, process.env);
    switch (hostName) {
        case process.env.REACT_APP_HOST_ONE:
            return (
            <>
                <DomainARoute />
            </>
            );
        case process.env.REACT_APP_HOST_TWO:
            return (
            <>
                <DomainBRoute />
            </>
            );
        case process.env.REACT_APP_HOST_THREE:
            return (
            <>
                <DomainCRoute/>
            </>
            );
        default:
            return (<>
            <h1>Invalid Request</h1>
            </>);
    }
}

export default RouteMiddleware