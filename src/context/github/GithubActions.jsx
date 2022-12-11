import axios from "axios";

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const res = await github.get(`/search/users?${params}`);
  return res.data.items;

  //   const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const { items } = await res.json();

  //   return items;
};

export const getUser = async (login) => {
  const res = await github.get(`/users/${login}`, {
    validateStatus: () => true,
  });

  if (res.status === 404) {
    window.location = "/notfound";
  } else {
    return res.data;
  }
};

export const getRepos = async (login) => {
  const res = await github.get(
    `/users/${login}/repos?sort=created&per_page=10`
  );
  return res.data;

  // const params = new URLSearchParams({
  //   sort: "created",
  //   per_page: 10,
  // });

  //   const res = await fetch(
  //     `${GITHUB_URL}/users/${login}/repos?sort=created&per_page=10`,
  //     {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     }
  //   );

  //   const data = await res.json();

  //   return data;
};
