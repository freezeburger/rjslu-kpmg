import React, { lazy, Suspense } from 'react';

const LazyViewGeneric = lazy(() => import('./ViewGeneric'));

const ViewGeneric = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyViewGeneric {...props} />
  </Suspense>
);

export default ViewGeneric;
