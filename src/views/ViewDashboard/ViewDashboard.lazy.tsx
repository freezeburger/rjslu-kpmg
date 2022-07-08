import React, { lazy, Suspense } from 'react';

const LazyViewDashboard = lazy(() => import('./ViewDashboard'));

const ViewDashboard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyViewDashboard {...props} />
  </Suspense>
);

export default ViewDashboard;
