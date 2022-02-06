import { Header } from "./components/Header";
import { RepositoryList } from "./components/RepositoryList";
import "./styles/global.scss";

export function App() {
  return(
    <>
      <Header/>
      <RepositoryList />
    </>
  ) 
}
