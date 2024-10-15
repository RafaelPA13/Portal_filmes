import { Link } from "react-router-dom";
import "./MovieCard.css";

export default function MovieCard({ id, title, poster_path, vote_average }) {
  return (
    <Link to={`/filmes/${id}`} className="card">
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <div className="info">
        <h2>{title}</h2>
        <p>{vote_average}</p>
      </div>
    </Link>
  );
}
