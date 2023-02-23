import { Repos } from "./dto/repos";

const url = "https://api.github.com/users/EduDevHe/repos";

// get all repositories
async function getRepos(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Falha ao buscar repositórios");
    }
    const data = await response.json();
    return data;
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

const repos = await getRepos(url);

const languageNames: string[] = repos.map((repos: Repos) => {
  return repos.name;
});

const languagesUrl: string[] = languageNames.map((lang) => {
  return `https://api.github.com/repos/EduDevHe/${lang}/languages`;
});

const promises = languagesUrl.map((url) => fetch(url));

const responses = await Promise.all(promises);

const data = (await Promise.all(
  responses.map((response) => response.json())
)) as unknown[];

console.log(repos);
console.log(languageNames);
console.log(languagesUrl);
console.log(data);
export {};
