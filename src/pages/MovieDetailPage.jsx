import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Movie Detail Page</h1>
      <p>O ID do filme é {id}</p>
      {/* Exibe detalhes de um filme específico. */}
    </div>
  );
}
