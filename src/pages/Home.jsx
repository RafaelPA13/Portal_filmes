import CardContainer from "../components/cardContainer/CardContainer";
import movies from "../data/movies.json";
import MovieCard from "../components/movieCard/MovieCard";

export default function Home() {
  return (
    <div className="container">
      <CardContainer titulo={'Filmes'}>
        {movies
        .map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </CardContainer>

      {/* <CardContainer titulo={'Filmes Antigos'}>
        {movies
        .filter(movie => movie.ano_lancamento < 2000)
        .map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </CardContainer> */}
    </div>
  );
}
