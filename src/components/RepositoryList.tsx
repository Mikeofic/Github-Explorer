import { useState, useEffect } from "react";
import { RepostoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

interface Repository {
  name: string,
  description: string,
  html_url: string,
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Mikeofic/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepostoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
