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

console.log(repos);


export {};
