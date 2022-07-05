import React, { lazy, Suspense } from 'react';

const LazyForgotpassword = lazy(() => import('./Forgotpassword'));

const Forgotpassword = props => (
  <Suspense fallback={null}>
    <LazyForgotpassword {...props} />
  </Suspense>
);

export default Forgotpassword;
