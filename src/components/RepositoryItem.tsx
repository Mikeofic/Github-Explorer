import "../styles/repositoryItem.scss";

interface  RepostoryItemProps {
  repository: {
    name: string,
    description: string,
    html_url: string
  }
}

export function RepostoryItem(props: RepostoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}
