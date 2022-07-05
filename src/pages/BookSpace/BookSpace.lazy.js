import React, { lazy, Suspense } from 'react';

const LazyBookSpace = lazy(() => import('./BookSpace'));

const BookSpace = props => (
  <Suspense fallback={null}>
    <LazyBookSpace {...props} />
  </Suspense>
);

export default BookSpace;
