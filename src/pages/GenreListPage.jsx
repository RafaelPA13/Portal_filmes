import CardContainer from "../components/cardContainer/CardContainer";
import GenreCard from "../components/gerneCard/GenreCard";

import genres from "../data/genres.json";

export default function GenreListPage() {
  return (
    <div className="container">
      <h1 className="titulo-pagina">Genre Page</h1>
      <CardContainer>
        {genres.map((genre) => (
          <GenreCard key={genre.id} {...genre} />
        ))}
      </CardContainer>
      {/*Lista todos os gêneros disponíveis em um formato de card,
        cada um com uma cor de fundo diferente, com um link 
        para uma página que exibe filmes pertencentes a esse gênero. */}
    </div>
  );
}
