import React, { lazy, Suspense } from 'react';

const LazyMyBookings = lazy(() => import('./MyBookings'));

const MyBookings = props => (
  <Suspense fallback={null}>
    <LazyMyBookings {...props} />
  </Suspense>
);

export default MyBookings;
