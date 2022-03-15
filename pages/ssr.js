import Layout from "../components/Layout.client";
import { getPhotos, getUsers } from "../lib/fetch-data";

const Ssr = ({ photos, users }) => {
  return (
    <Layout title="getServerSideProps">
      <p className="mb-5 text-2xl font-bold text-blue-500">
        🦊 Conventional getServerSideProps (All or Nothing)
      </p>
      <ul className="m-5">
        {users?.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
      <ul className="m-5">
        {photos?.map((photo) => (
          <li key={photo.id}>{photo.url}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Ssr;

export const getServerSideProps = async () => {
  const photos = await getPhotos();
  const users = await getUsers();
  return {
    props: { photos, users },
  };
};
