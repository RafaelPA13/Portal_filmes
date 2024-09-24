import "./MovieCard.css"

export default function MovieCard({titulo, imagem_destaque, descricao}) {
  return (
    <div className="card">
      <img src={imagem_destaque} alt={titulo} />
      <div className="info">
        <h2>{titulo}</h2>
        <p>{descricao}</p>
      </div>
    </div>
  );
}
