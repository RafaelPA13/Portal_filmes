import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* Exibe o header e a lista de filmes disponível divididos por
     Antigos(antes dos anos 2000)
     Bem-avaliados(nota maior que 9)*/}
    </>
  );
}

export default App;
