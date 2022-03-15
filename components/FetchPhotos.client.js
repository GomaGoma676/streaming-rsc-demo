import useSWR from "swr";
import { delay } from "../utils/Delay";

const urlPhotos = "https://jsonplaceholder.typicode.com/photos?_limit=5";

const fetcher = async (url) => {
  const res = await fetch(new URL(url)).then(await delay(2500));
  return res.json();
};

const FetchPhotos = () => {
  const { data: photos } = useSWR(urlPhotos, fetcher, {
    suspense: true,
  });
  return (
    <ul className="m-5">
      {photos?.map((photo) => (
        <li key={photo.id}>{photo.url}</li>
      ))}
    </ul>
  );
};

export default FetchPhotos;
