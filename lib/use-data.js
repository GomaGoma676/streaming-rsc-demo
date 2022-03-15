const cache = {};

export const useData = (key, fetcher) => {
  if (!cache[key]) {
    throw fetcher().then((d) => (cache[key] = d));
  }
  return cache[key];
};
