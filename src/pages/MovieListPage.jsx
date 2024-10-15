import CardContainer from "../components/cardContainer/CardContainer";
import MovieCard from "../components/movieCard/MovieCard";

import { FaSearch } from "react-icons/fa";

import { useState, useEffect } from "react";

export default function MovieListPage() {
  const [listMovies, setListMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br"
    )
      .then((res) => res.json())
      .then((data) => setListMovies(data.results))
      .catch((error) => console.log(error))
      .finally(() => console.log("FIM"));
  }, []);

  const moviesFilter = listMovies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="titulo-pagina">Filmes</h1>
      <div className="search-bar">
        <div>
          <FaSearch />
        </div>
        <input
          type="text"
          placeholder="Digite o filme:"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <CardContainer>
        {moviesFilter.length > 0 ? (
          moviesFilter.map((movie) => <MovieCard key={movie.id} {...movie} />)
        ) : (
          <h1>Filme não encontrado</h1>
        )}
      </CardContainer>
    </div>
  );
}
