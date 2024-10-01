import "./GenreCard.css"

export default function GenreCard({genero, descricao}) {
  return (
    <div className="card-genero">
      <h1>{genero}</h1>
      <p>{descricao}</p>
    </div>
  );
}
