import CardContainer from "../components/cardContainer/CardContainer";
import MovieCard from "../components/movieCard/MovieCard";
import movies from "../data/movies.json";

export default function Home() {
  return (
    <div className="container">
      <CardContainer titulo={'Filmes Antigos'}>
        {movies
        .filter(movie => movie.ano_lancamento < 2000)
        .map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </CardContainer>

      <CardContainer titulo={'Clássicos'}>
        {movies
        .filter(movie => movie.avaliacao > 8.6)
        .map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </CardContainer>

      <CardContainer titulo={'Filmes dos anos 2000'}>
        {movies
        .filter(movie => movie.ano_lancamento > 2000 && movie.ano_lancamento < 2010)
        .map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </CardContainer>
    </div>
  );
}
