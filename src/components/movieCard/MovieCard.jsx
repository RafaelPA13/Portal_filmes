import { Link } from "react-router-dom";
import "./MovieCard.css"

export default function MovieCard({id, titulo, imagem_destaque, descricao}) {
  return (
    <Link to={`/filmes/${id}`} className="card">
      <img src={imagem_destaque} alt={titulo} />
      <div className="info">
        <h2>{titulo}</h2>
        <p>{descricao}</p>
      </div>
    </Link>
  );
}
