import { Suspense } from "react";
import Layout from "../components/Layout.client";
import Skelton from "../components/Skelton";
import { getUsers, getPhotos } from "../lib/fetch-data";
import { useData } from "../lib/use-data";

const UserList = () => {
  const users = useData("users", () => getUsers());
  return (
    <ul className="m-5">
      {users?.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  );
};

const PhotoList = () => {
  const photos = useData("photos", () => getPhotos());
  return (
    <ul className="m-5">
      {photos?.map((photo) => (
        <li key={photo.id}>{photo.url}</li>
      ))}
    </ul>
  );
};

const StreamingRSC = () => {
  return (
    <Layout title="Streaming RSC">
      <p className="mb-5 text-2xl font-bold text-blue-500">
        🚀 Streaming React Server Components
      </p>
      <Suspense fallback={<Skelton />}>
        <UserList />
      </Suspense>
      <Suspense fallback={<Skelton />}>
        <PhotoList />
      </Suspense>
    </Layout>
  );
};

export default StreamingRSC;
