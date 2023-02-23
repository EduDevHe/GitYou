const urlCommits = "https://api.github.com/search/commits?q=author:EduDevHe";

async function getCommits(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Falha ao buscar commits");
    }
    const data = await response.json();
    return data;
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

const commits = await getCommits(urlCommits);

export { commits };
