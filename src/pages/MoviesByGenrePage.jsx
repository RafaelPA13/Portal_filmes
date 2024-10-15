import { useParams } from "react-router-dom";

export default function MoviesByGenrePage() {
  const { id } = useParams();
  
  return (
    <div className="container">
      <h1>Movies By Genre Page</h1>
      {/*Lista todos os filmes do gênero selecionado pelo usuário. */}
    </div>
  );
}
