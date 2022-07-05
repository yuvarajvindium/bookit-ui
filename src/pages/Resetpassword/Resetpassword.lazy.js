import React, { lazy, Suspense } from 'react';

const LazyResetpassword = lazy(() => import('./Resetpassword'));

const Resetpassword = props => (
  <Suspense fallback={null}>
    <LazyResetpassword {...props} />
  </Suspense>
);

export default Resetpassword;
