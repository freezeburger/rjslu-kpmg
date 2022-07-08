import React, { lazy, Suspense } from 'react';

const LazyViewLogin = lazy(() => import('./ViewLogin'));

const ViewLogin = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyViewLogin {...props} />
  </Suspense>
);

export default ViewLogin;
