import React from 'react'; // React needs to be imported
import { Route } from 'react-router-dom';

export function getAllRoutes(routes) {
    return (
        <>
            {routes.map((route, index) => {
                const Component = route.component;
                return Component ? (
                    <Route
                        key={index}
                        path={route.path}
                        name={route.name}
                        element={<Component />}
                    />
                ) : null;
            })};
        </>
    )
}