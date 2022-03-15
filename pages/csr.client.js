import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "../components/Layout.client";
import Skelton from "../components/Skelton";
import FetchUsers from "../components/FetchUsers.client";
import FetchPhotos from "../components/FetchPhotos.client";

const CSR = () => {
  return (
    <Layout title="CSR + SG">
      <p className="mb-5 text-2xl font-bold text-blue-500">
        🦊 CSR(useSWR) + SG
      </p>
      <ErrorBoundary fallback={<p className="my-5">Error</p>}>
        <Suspense fallback={<Skelton />}>
          <FetchUsers />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p className="my-5">Error</p>}>
        <Suspense fallback={<Skelton />}>
          <FetchPhotos />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
};

export default CSR;
