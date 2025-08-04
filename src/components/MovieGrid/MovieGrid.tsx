import css from "./MovieGrid.module.css";
import { Movie } from "../../types/movie";

interface MovieListProps {
    movies: Movie[];
    onClick: (movie: Movie) => void;
};

export default function MovieGrid({movies, onClick}: MovieListProps) {
    return (
        <ul className={css.grid}>
            {movies.map((movie) => (
      <li key={movie.id}>
                    <div className={css.card}
                    onClick={() => onClick(movie)}>
     <img 
		    className={css.image} 
		    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
		    alt={movie.title} 
		    loading="lazy" 
		  />
        <h2 className={css.title}>{movie.title}</h2>
    </div>
  </li>
  ))}
</ul>

    )
}