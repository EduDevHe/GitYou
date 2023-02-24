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

const reposNames: string[] = repos.map((repos: Repos) => {
  return repos.name;
});

const languagesUrl: string[] = reposNames.map((lang) => {
  return `https://api.github.com/repos/EduDevHe/${lang}/languages`;
});

interface Language {
  [key: string]: number;
}

async function getLanguagesForRepositories(url: string[]): Promise<Language[]> {
  const promises = url.map((url) => fetch(url));
  const responses = await Promise.all(promises);

  const data = (await Promise.all(
    responses.map((response) => response.json())
  )) as Language[];

  return data;
}

const languages = await getLanguagesForRepositories(languagesUrl);

const languagesArray = languages.map((lang) => Object.keys(lang));

const listLanguage = languagesArray.flatMap((langs) => langs);

function rankingLanguage() {}

console.log(listLanguage);
console.log(repos);
console.log(reposNames);
console.log(languagesUrl);
console.log(languages);

export {};
