import React, { lazy, Suspense } from 'react';

const LazySignup = lazy(() => import('./Form'));

const Form = props => (
    <Suspense fallback={null}>
        <LazySignup {...props} />
    </Suspense>
);

export default Form;
