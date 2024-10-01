import CardContainer from "../components/cardContainer/CardContainer";
import MovieCard from "../components/movieCard/MovieCard";

import { FaSearch } from "react-icons/fa";

import { useState } from "react";
import movies from "../data/movies.json";

export default function MovieListPage() {
  const [listMovies, setListMovies] = useState(movies);
  const [search, setSearch] = useState("");
  const moviesFilter = listMovies.filter((movie) =>
    movie.titulo.toLowerCase().includes(search.toLowerCase())
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
