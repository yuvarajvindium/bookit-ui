import React, { lazy, Suspense } from 'react';

const LazyBookingDetails = lazy(() => import('./bookingDetails'));

const BookingDetails= props => (
  <Suspense fallback={null}>
    <LazyBookingDetails {...props} />
  </Suspense>
);

export default BookingDetails;