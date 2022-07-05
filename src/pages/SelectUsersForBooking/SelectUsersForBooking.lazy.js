import React, { lazy, Suspense } from 'react';

const LazySelectUsersForBooking = lazy(() => import('./SelectUsersForBooking'));

const SelectUsersForBooking = props => (
  <Suspense fallback={null}>
    <LazySelectUsersForBooking {...props} />
  </Suspense>
);

export default SelectUsersForBooking;
