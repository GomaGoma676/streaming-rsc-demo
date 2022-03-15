import { delay } from "../utils/Delay";

const urlUsers = "https://jsonplaceholder.typicode.com/users?_limit=5";
const urlPhotos = "https://jsonplaceholder.typicode.com/photos?_limit=5";

export const getUsers = async () => {
  const res = await fetch(new URL(urlUsers)).then(await delay(1000));
  return res.json();
};

export const getPhotos = async () => {
  const res = await fetch(new URL(urlPhotos)).then(await delay(2500));
  return res.json();
};
