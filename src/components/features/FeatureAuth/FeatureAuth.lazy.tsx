import React, { lazy, Suspense } from 'react';

const LazyFeatureAuth = lazy(() => import('./FeatureAuth'));

const FeatureAuth = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFeatureAuth {...props} />
  </Suspense>
);

export default FeatureAuth;
