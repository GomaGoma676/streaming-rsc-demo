import useSWR from "swr";
import { delay } from "../utils/Delay";

const urlUsers = "https://jsonplaceholder.typicode.com/users?_limit=5";

const fetcher = async (url) => {
  const res = await fetch(new URL(url)).then(await delay(1000));
  return res.json();
};

const FetchUsers = () => {
  const { data: users } = useSWR(urlUsers, fetcher, {
    suspense: true,
  });
  return (
    <ul className="m-5">
      {users?.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  );
};

export default FetchUsers;
