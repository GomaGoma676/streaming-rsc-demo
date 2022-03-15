import { CubeTransparentIcon } from "@heroicons/react/solid";
import Layout from "../components/Layout.client";

const Home = () => {
  return (
    <Layout title="Home">
      <CubeTransparentIcon className="mb-10 h-16 w-16 text-blue-500" />
      <a
        href="/csr"
        target="_blank"
        className="my-1 rounded px-3 py-2 hover:bg-gray-100"
      >
        🔑 CSR with useSWR(cache)
      </a>
      <a
        href="/rsc"
        target="_blank"
        className="my-1 rounded px-3 py-2 hover:bg-gray-100"
      >
        🚀 Steaming React Server Component
      </a>
      <a
        href="/ssr"
        target="_blank"
        className="my-1 rounded px-3 py-2 hover:bg-gray-100"
      >
        🐭 Conventional getServerSideProps
      </a>
    </Layout>
  );
};

export default Home;
